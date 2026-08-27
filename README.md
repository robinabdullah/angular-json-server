# angular-json-server

A browser UI for a [json-server](https://github.com/typicode/json-server) mock API. json-server
gives you a REST API from a JSON file in seconds; this puts a front end on it, so you can edit the
fake data without hand-editing `db.json` while you are working.

## What it does

- **CRUD over entities** — list, view, add and edit records, with sortable and searchable tables
- **JSON editor** — edit the backing file in the browser through an embedded editor
- **JSON viewer** — read the whole document as a collapsible tree
- **Help page** — usage notes for whoever picks it up

## How it is put together

Feature modules with their own routing (`modules/entity`, `modules/json-file`), a shared
`JsonDataService` in `core/services` wrapping `HttpClient` with centralised error handling, and the
save endpoint read from `environment.fileSaveUrl` rather than hard-coded. Unit specs sit beside each
component; end-to-end specs live under `e2e/`.

## Built with

Angular · TypeScript · RxJS · Bootstrap · json-server · Express

## Running it

```bash
npm install
npm run json-server   # mock API on :3000
npm start             # UI on :4200
