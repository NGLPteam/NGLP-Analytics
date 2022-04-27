import json, csv, math
from datetime import datetime

FILE = "workflow.json"
OUT = "workflow.csv"

with open(FILE) as f:
    d = json.loads(f.read())

    table = {}
    ids = []

    for entry in d:
        oid = entry.get("object_id")[0]
        state = entry.get("event")
        transition = entry.get("workflow", {}).get("follows", {}).get("transition_time", 0)
        transition = math.ceil(transition / (60 * 60 * 24))
        date = entry.get("occurred_at")

        datestamp = datetime.strptime(date, "%Y-%m-%dT%H:%M:%SZ")
        ago = (datetime.utcnow() - datestamp).total_seconds()
        age = ago / (60 * 60 * 24 * 30)

        if date not in table:
            table[date] = []
        table[date].append({oid: state + " (" + str(transition) + " | " + str(age) + ")"})

        if oid not in ids:
            ids.append(oid)

    dates = list(table.keys())
    dates.sort()

    output = [["date"] + ids]
    for d in dates:
        row = []
        for id in ids:
            action = ""
            for event in table[d]:
                if id in event:
                    action = event[id]
                    break
            row.append(action)

        output.append([d] + row)

with open(OUT, "w") as f:
    writer = csv.writer(f)
    writer.writerows(output)