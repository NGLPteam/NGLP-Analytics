EVENT_TYPES = [
    'request',
    'investigation',
    'workflow_transition',
    'export',
    'share',
    'join',
    'leave'
]

OBJECT_TYPES = [
    'file',
    'article',
    'journal'
]

CATEGORY_TYPES = {
    'request':'usage',
    'investigation':'usage',
    'export': 'usage',
    'join': 'audit',
    'leave': 'audit',
    "workflow_transition" : "workflow"
}

SOURCE_ID_TYPES = [
    "Crossref metadata",
    "DataCite metadata",
    "F1000Prime",
    "Hypothes.is",
    "The Lens (Cambia)",
    "Newsfeed",
    "Reddit",
    "Reddit Links",
    "Stack Exchange Network",
    "Twitter",
    "Wikipedia",
    "Wordpress.com"
]

SUBJ_ID_TYPES = {
    "Crossref metadata": 'crossref.org/',
    "DataCite metadata": 'datacite.org/',
    "F1000Prime": 'facultyopinions.com/',
    "Hypothes.is": 'web.hypothes.is/',
    "The Lens (Cambia)": 'lens.org/',
    "Newsfeed": 'newsfeed.url/',
    "Reddit": 'reddit.com/',
    "Reddit Links": 'reddit.com/',
    "Stack Exchange Network": 'stackexchange.com/',
    "Twitter": 'twitter.com/',
    "Wikipedia": 'wikipedia.com/',
    "Wordpress.com": 'wordpress.com/'
}


DATA_SOURCE_TYPES = [
    'dspace',
    'ojs',
    'janeway',
    'wdp'
]

