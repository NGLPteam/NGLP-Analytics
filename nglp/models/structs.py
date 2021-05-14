from nglp.lib import seamless
from nglp.lib import coerce

COERCE = {
    "unicode": seamless.to_utf8_unicode,
    "unicode_upper" : seamless.to_unicode_upper,
    "unicode_lower" : seamless.to_unicode_lower,
    "integer": seamless.intify,
    "float": seamless.floatify,
    "url": seamless.to_url,
    "bool": seamless.to_bool,
    "datetime" : seamless.to_datetime,
    "ip" : coerce.to_ip
}

"""
Example Request event

{
    "event" : "request",
    "object_type" : "File",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format" : "application/pdf",
    "url" : "/article/12345/download.pdf",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "ip" : "255.255.255.255"
}
"""

REQUEST_EVENT_STRUCT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["request"]},
        "object_type" : {"coerce" : "unicode_lower", "allowed_values" : ["file"]},
        "format" : {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer" : {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce": "ip"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce" : "unicode"}
    },
    "objects" : [],
    "required" : [
        "event",
        "object_type",
        "object_id",
        "format",
        "url",
        "ip"
    ]
}


"""
Example Investigation event
{
    "event" : "investigation",
    "object_type" : "splash page",
    "object_id": ["12345"],
    "url" : "/community/university-x/",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "ip" : "255.255.255.255"
}
"""

INVESTIGATION_EVENT_STRUCT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["investigation"]},
        "object_type": {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer": {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce" : "ip"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "url",
        "ip"
    ]
}


"""
Example Workflow Transition Event in JSON
{
  "event" : "first_decision",
  "object_type" : "article",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}

"""

WORKFLOW_TRANSITION_EVENT_STRUCT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower"},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["article"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}


"""
Example Export Event in JSON
{
  "event" : "export",
  "object_type" : "article",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "format" : "application/x-research-info-systems",
  "url" : "https://wdp.org/article/1234/export.ris",
  "method" : "get",
  "referrer" : "https://cottagelabs.com/nglp",
  "user_agent" : "Mozilla ...",
  "ip" : "255.255.255.255"
}
"""

EXPORT_EVENT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["export"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["article"]},
        "format" : {"coerce" : "unicode"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer": {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce" : "ip"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "format",
        "ip"
    ]
}


"""
Example Join Event in JSON
{
  "event" : "join",
  "object_type" : "journal",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}
"""

JOIN_EVENT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["join"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["journal"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}


"""
Example Leave Event in JSON
{
  "event" : "leave",
  "object_type" : "journal",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}

"""

LEAVE_EVENT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["leave"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["journal"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}

"""
Example data model event
 
{
    "timestamp" : 2021-04-29T12:00:00Z,
    "category" : "usage",
    "event" : "request",
    "object_type" : "file",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format" : "application/pdf",
    "container": ["12346", "12347", "12348"],
    "query": NA,
    "share.source_id" : NA,
    "share.subj_id" : NA,
    "url" : "/article/12345/download.pdf",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "user_id" : NA,
    "user_organisation" : NA,
    "ip" : "255.255.255.255",
    "lat" : "coordinate",
    "lon" : "coordinate",
    "city" : "edinburgh"
    "country" : "gbr",
    "source" : "
}

"""