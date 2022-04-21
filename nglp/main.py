import uvicorn

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.responses import FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from nglp.routers import query, api
from nglp.config import settings
from nglp.lib import paths

app = FastAPI()
app.include_router(query.router)
app.include_router(api.router)
app.mount("/static", StaticFiles(directory=paths.rel2abs(__file__, "static")), name="static")

templates = Jinja2Templates(directory=paths.rel2abs(__file__, "templates"))

@app.get("/", include_in_schema=False)
async def root():
    return {"message": "Welcome to the NGLP Analytics Application"}


@app.get("/search", response_class=HTMLResponse, include_in_schema=False)
async def search(request: Request):
    return templates.TemplateResponse("search.html", {"request": request, "config": settings})


@app.get("/g001", include_in_schema=False)
async def g001(request: Request):
    return templates.TemplateResponse("g001.html", {"request" : request, "config" : settings})


@app.get("/g014", include_in_schema=False)
async def g014(request: Request):
    source = request.get("source", "http://example.com/wdp")    # Defaults to an example source for testing
    return templates.TemplateResponse("g014.html", {"request" : request, "config" : settings, "source" : source})

########################################
## Pilot endpoints

# data from all sources

@app.get("/g001-all", include_in_schema=False)
async def g001(request: Request):
    return templates.TemplateResponse("g001.html", {"request" : request, "config" : settings})


@app.get("/g014-all", include_in_schema=False)
async def g014(request: Request):
    source = request.get("source", "http://example.com/wdp")    # Defaults to an example source for testing
    return templates.TemplateResponse("g014.html", {"request" : request, "config" : settings, "source" : source})


# data from 2 journals

@app.get("/g001-umass", include_in_schema=False)
async def g001(request: Request):
    return templates.TemplateResponse("g001-umass.html", {"request" : request, "config" : settings})


@app.get("/g014-umass", include_in_schema=False)
async def g014(request: Request):
    source = request.get("source", "http://example.com/wdp")    # Defaults to an example source for testing
    return templates.TemplateResponse("g014-umass.html", {"request" : request, "config" : settings, "source" : source})

# data from a single journal

@app.get("/g001-lymphology", include_in_schema=False)
async def g001(request: Request):
    return templates.TemplateResponse("g001-lymphology.html", {"request" : request, "config" : settings})


@app.get("/g014-lymphology", include_in_schema=False)
async def g014(request: Request):
    source = request.get("source", "http://example.com/wdp")    # Defaults to an example source for testing
    return templates.TemplateResponse("g014-lymphology.html", {"request" : request, "config" : settings, "source" : source})

#########################################

@app.get("/favicon.ico", include_in_schema=False)
async def icon():
    return FileResponse('nglp/static/img/favicon.ico')


if __name__ == "__main__":
    from nglp.initialise import initialise
    initialise()

    uvicorn.run("main:app", host=settings.host, port=int(settings.port), reload=True, debug=True, proxy_headers=True,
                forwarded_allow_ips='*')
