import random
import json
import datetime
import click
import warnings
import enum
from faker import Faker
from nglp.models import events
from nglp.lib import data_dictionaries

EVENTS_SELECTOR = {
    'request': events.RequestEvent,
    'investigation': events.InvestigationEvent,
    'join': events.JoinEvent,
    'leave': events.LeaveEvent,
    'export': events.ExportEvent,
    'workflow_transition': events.WorkflowTransitionEvent,
    'core': events.CoreEvent
}

ALLOWED_PARAM_VALUES = {
    'event_type': EVENTS_SELECTOR.keys(),
    'data_fill': ['minimal', 'full', 'mix'],
}


class DataGenerator:
    """
    used to generate data for the event models
    Usage:
    from nglp.generate_test_data import DataGenerator
    dg = DataGenerator('request', 1000)
    dg.write_data()
    """

    def __init__(self, event_type, number_of_records, is_core=False, data_fill='mix', add_records_with_error=False,
                 error_if_model_unsupported=True, filename=None):
        self.event_type = event_type
        self.number_of_records = number_of_records
        self.is_core = is_core
        self.data_fill = data_fill
        self.add_records_with_error = add_records_with_error
        self.filename = filename
        self.error_if_model_unsupported = error_if_model_unsupported
        self.validate_params()
        self.set_filename()
        self.model = EVENTS_SELECTOR.get(self.event_type)() if is_core is False else events.CoreEvent()
        # self.validate_model()
        self.fake = Faker()

    def validate_params(self):
        if self.event_type not in EVENTS_SELECTOR.keys():
            raise ValueError(f"'event_type' should be one of {ALLOWED_PARAM_VALUES['event_type']}")
        if not isinstance(self.number_of_records, int):
            raise ValueError(f"'number_of_records' should be an integer")
        if self.data_fill not in ALLOWED_PARAM_VALUES['data_fill']:
            raise ValueError(f"'data_fill' should be one of {ALLOWED_PARAM_VALUES['data_fill']}")
        if self.add_records_with_error:
            self.add_records_with_error = False
            warnings.warn("Feature 'add_records_with_error' is not implemented.", UserWarning, stacklevel=2)

    def validate_model(self):
        if len(self.model.__seamless_struct__.objects) > 0 and self.error_if_model_unsupported:
            raise NotImplementedError(f"The data model for '{self.event_type}' contains objects. This is not supported")

    def set_filename(self):
        if self.filename:
            return
        with_errors = '-with_errors' if self.add_records_with_error else ''
        dt = '{date:%Y-%m-%d_%H:%M:%S}'.format(date=datetime.datetime.now())
        self.filename = f"{self.event_type}-{self.number_of_records}{with_errors}-{dt}.json"

    def get_fake_data(self, data_type, single=True, allowed_values=None):
        length = 1
        if not single:
            # generate a list of random length, with the max set by max_len
            # The lower numbers have a higher probability
            max_len = 7
            weights = [2**(max_len-i) for i in range(1, max_len+1)]
            length = random.choices(range(1, max_len+1), weights=weights, k=1)[0]

        random_data_by_type = {
            'event': random.choices(data_dictionaries.EVENT_TYPES, k=length),
            'object_type': random.choices(data_dictionaries.OBJECT_TYPES, k=length),
            'object_id': random.choices([self.fake.bothify(text='????-########'), self.fake.uuid4()], k=length),
            'ip': random.choices([self.fake.ipv4(), self.fake.ipv6()], weights=[0.7, 0.3], k=length),
            'share.source_id': random.choices(data_dictionaries.SOURCE_ID_TYPES, k=length),
            'source.type': random.choices(data_dictionaries.DATA_SOURCE_TYPES, k=length),
            'container': random.choices(self.fake.hexify(text="^^^^^^^^"), k=length),
            'search_keywords': random.choices(self.fake.words(nb=8), k=length)
        }
        fake_data_by_type = {
            'occurred_at': str(self.fake.date_time_between(start_date="-1y")),
            'format': self.fake.mime_type(),
            'url': self.fake.uri(),
            'method': self.fake.http_method(),
            'referrer': self.fake.uri(),
            'user_agent': self.fake.user_agent(),
            'user_id': self.fake.hexify(text="^^^^^^^^^^^^"),
            'user_org': self.fake.hexify(text="ror:^^^^^^^"),
            'city': self.fake.location_on_land(),
            'source.archive_id': self.fake.hexify(text="^^^^^")
            }

        # If given a set of allowed values to choose from, compute that first
        fake_data = []
        if allowed_values:
            fake_data = random.choices(allowed_values, k=length)
        elif data_type in random_data_by_type:
            fake_data = random_data_by_type[data_type]
        elif data_type in fake_data_by_type:
            fake_data = []
            for i in range(length):
                fake_data.append(fake_data_by_type[data_type])
        return fake_data[0] if (single and fake_data) else fake_data

    def full_data_generator(self):

        stored_data = {}

        def recurse(struct, path):
            # This method will generate fake data for all the fields in the model
            data = {}


            for key, val in struct.fields:
                data[key] = self.get_fake_data(".".join(path + [key]), single=True, allowed_values=val.get(
                    'allowed_values', None))
                if key == "event":
                    data["category"] = data_dictionaries.CATEGORY_TYPES[data["event"]]
                elif key == "user_org":
                    stored_data["user_org"] = data["user_org"]
                elif key == "identifier":
                    data["identifier"] = (stored_data["user_org"] + "/" + data["type"] + "/" +
                                  self.fake.password(length=8, special_chars=False))
                elif key == "subj_id":
                    data["subj_id"] = data_dictionaries.SUBJ_ID_TYPES[data["source_id"]]
                elif key == "city":
                    stored_data["geo"] = data["city"]
                    data["city"] = stored_data["geo"][2]
                elif key == "country":
                    data["country"] = stored_data["geo"][3]
                elif key == "lat":
                    data["lat"] = stored_data["geo"][0]
                elif key == "lon":
                    data["lon"] = stored_data["geo"][1]
            for key, val in struct.lists:
                data[key] = self.get_fake_data(".".join(path + [key]), single=False, allowed_values=val.get('allowed_values', None))
            for key in struct.substructs.keys():
                substruct = struct.substruct(key)
                data[key] = recurse(substruct, path + [key])
            return data
        path = []
        data = recurse(self.model.__seamless_struct__, path)
        return data

    def minimal_data_generator(self):
        # This method will generate fake data for all the required fields in the model
        data = {}
        for key, val in self.model.__seamless_struct__.fields:
            if key not in self.model.__seamless_struct__.required:
                continue
            data[key] = self.get_fake_data(key, single=True, allowed_values=val.get('allowed_values', None))
        for key, val in self.model.__seamless_struct__.lists:
            if key not in self.model.__seamless_struct__.required:
                continue
            data[key] = self.get_fake_data(key, single=False, allowed_values=val.get('allowed_values', None))
        return data

    def generate_data(self):
        if self.data_fill == 'full':
            for i in range(self.number_of_records):
                yield self.full_data_generator()
        elif self.data_fill == 'minimal':
            for i in range(self.number_of_records):
                yield self.minimal_data_generator()
        else:
            # data_fill is mix
            for i in range(self.number_of_records):
                yield random.choices([self.full_data_generator(), self.minimal_data_generator()])[0]

    def write_data(self):
        print(f"Starting data generation for {self.event_type}")
        start = datetime.datetime.now()
        print(f"Start time: {start}")
        count = 0
        pulse = self.number_of_records // 100 if self.number_of_records > 100 else 1
        with open(self.filename, 'w') as output:
            output.write('[')
            first = True
            for data in self.generate_data():
                if not first:
                    output.write(',')
                first = False
                json.dump(data, output, indent=2)
                count += 1
                print('.', end="", flush=True) if count % pulse == 0 else ''
            output.write(']')
        end = datetime.datetime.now()
        print()
        print("Data generation completed.")
        print(f"File name: {self.filename}")
        print(f"Count: {count}")
        print(f"End time: {end}")
        diff = end - start
        hours = diff.days * 24 + diff.seconds // 3600
        minutes = (diff.seconds % 3600) // 60
        seconds = diff.seconds % 60
        print("Time taken: {:0>2d}:{:0>2d}:{:0>2d}".format(hours, minutes, seconds))


@click.command()
@click.option('-e', '--event_type',
              required=True,
              type=click.Choice(ALLOWED_PARAM_VALUES['event_type'], case_sensitive=False),
              help='The type of event for which data needs to be generated.',
              )
@click.option('-n', '--number-of-records',
              required=True,
              type=int,
              help='Number of test records to generate.')
@click.option('-r', '--data-fill',
              default='mix',
              show_default=True,
              type=click.Choice(ALLOWED_PARAM_VALUES['data_fill'], case_sensitive=False),
              help='Amount of data required in each in record.'
                   'Minimal will generate just the required fields in the model,'
                   'Full will generate data in all the fields in the model and'
                   'Mix will generate a mix of full and minimal records.')
@click.option('-x', '--add-records-with-error',
              type=click.BOOL,
              default=False,
              show_default=True,
              help='Include records containing errors. '
                   'These error records will be in addition to the required number of records.')
@click.option('-u', '--error-if-model-unsupported',
              type=click.BOOL,
              default=True,
              show_default=True,
              help='Throw errors if an event model is not supported by the data generator.')
@click.option('-f', '--filename',
              default=None,
              show_default=True,
              help='Filename to save the json generated test data. '
                   'If no filename is provided, the default filename has the pattern '
                   '{event_type}-{number_of_records}-{dt} or {event_type}-{number_of_records}-with-errors-{dt}.json')
def generate_test_data(event_type, number_of_records, is_core=False, data_fill='mix', add_records_with_error=False,
                       error_if_model_unsupported=True, filename=None):
    dg = DataGenerator(event_type, number_of_records, is_core, data_fill, add_records_with_error,
                       error_if_model_unsupported, filename)
    dg.write_data()


if __name__ == '__main__':
    generate_test_data()
