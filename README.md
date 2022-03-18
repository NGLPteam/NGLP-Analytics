# NGLP Analytics Suite
The API and models for the NGLP Analytics. Python 3

## Getting the code

Clone from this repo:

```bash
git clone git@github.com:NGLPteam/NGLP-Analytics.git
```

### Update submodules (the edges search component)

From project root, run:
```bash
git submodule update --init --recursive
```

This will check out the `edges` js library to `nglp/static/edges`

### Python environment

1. Copy the secrets file from `env.template` to `.env` and customise as necessary (todo: hints)
2. Create and activate virtualenv with e.g. `virtualenv -p python3.8 venv` and `./venv/bin/activate`
3. Install dependencies with `pip install -r requirements.txt && pip install -e .`

### Setup the Geolocation database

We are using the MaxMind geolocation data for this project.  You may use the free or paid-for options.

To use the free version, go to https://dev.maxmind.com/geoip/geolite2-free-geolocation-data

You will need to sign up for GeoLite2, and when you have logged into your account, you will need to 
download the "GeoLite2 City" binary edition.

Unzip the download and find the `.mmdb` file.  Put this file somewhere the application will be able to use
it.

In `.env` set:

```
geo_database=/path/to/geolite2.mmdb
```

### Elasticsearch

We are using the OpenDistro release of Elasticsearch, though you should also be able to use the 7.10
release of the original Elasticsearch.

Install and run Open Distro for Elasticsearch as per their website: https://opendistro.github.io/for-elasticsearch-docs/

You will require a recent version of Java (>=11), which you can set and run with

```bash
JAVA_HOME=/path/to/java/11
export JAVA_HOME
[elasticsearch]/bin/elasticsearch
```

### Generate Test Data

Each type of incoming event (e.g. as if via the API)

```bash
for i in {request,investigation,join,leave,export,workflow_transition}; do python test/generate_test_data.py -e $i -n 1000; done
```

A set of events populating all the core model data too

```bash
for i in {request,investigation,join,leave,export,workflow_transition}; do python test/generate_test_data.py -e $i -n 1000 -c; done
```

### Index Data in ElasticSearch

In the directory where you generated the test data in the previous section:

```bash
find . -maxdepth 1 -name "*.json" -exec python test/load_test_data.py -i {} \;
```

TODO - full usage instructions.

### Run the analytics API application

From project root, run:
```bash
python nglp/main.py
```

This will bring up the webserver, by default at http://localhost:8000

* The JSON API
* at /search (http://localhost:8000/search) is a demo instance of `edges` with a search interface over the whole index.
* /g001 and /g014 are reports configured with d3 charts in `edges`.

TODO - make instruction writing more gooder.

### Starting app with Docker

Quick and basic docker container to get it running with the same configuration as local dev (i.e. the same `.env` credentials)
optionally supply `--build-arg PORT=8001` to the build stage to change its port, remember to expose the same port in `docker run`.

```shell
docker build -t nglp-analytics .
docker run -it -p 8000:8000 --name nglp-analytics nglp-analytics
```

### Starting app with docker-compose
You can run a stack of kafka+zookeper together with the analytics services with `docker-compose run`. You will still need to configure your .env file as per the instructions above, pointing to the instance of ElasticSearch to connect to.

Alternatively, you can also feed in the `docker-compose-es.yml` file to spin up a dockerised instance of ElasticSearch (Open Distro's release). There is a custom `.env` file setup for this docker-compose setup (`env.docker`), so all you need to do is run the following:

`docker-compose -f docker-compose.yml -f docker-compose-es.yml up`
