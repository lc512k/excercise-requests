# exercise-requests

This project illustrates different ways to make API requests.

By following the instructions below you will run a site that calls API endpoints on a remote server in a few different ways.


## Install
Before you start, please run `npm install` to download all your dependencies

## Run
Run your clientside site by doing:
`node localServer.js`

Run your serverside app (API endpoints) by doing:
`node remoteServer.js`

This will run two servers: Your site will be running on port `8888` and the remote server whose APIs you will call will run on port `9999`

## Usage
You will see your site on http://localhost:8888

![alt tag](https://cloud.githubusercontent.com/assets/3425322/23827078/4e016d4c-06a3-11e7-885b-d48350e80c86.png)

You will see options to make API calls "from the client" (from your clientside JS inside `index.html`) and "from the server" (from `localServer.js`). The calls made from the client will fail when cors is not allowed on the server.

All endpoints return JSON. You can call the different endpoints in three ways:

- `xmlHttp`
- `fetch`
- jQuery's `getJSON()`

There are two endpoints you can call:

- `/with-cors-enabled`
- `/with-cors-disabled`

Additionally, you can call the endpoint with cors disabled via JSONP as:

- `/with-cors-disabled/?callback=?`

The server is contained in `remoteServer.js`. This file contains all the API endpoints you can call, and caters for the different types of requests.

## Expected Results

###From the client
- `/with-cors-enabled`
	- `xmlHttp` : SUCCESS
	- `fetch` : SUCCESS
	- jQuery's `getJSON()` : SUCCESS
- `/with-cors-disabled`
	- `xmlHttp` : FAILURE
	- `fetch` : FAILURE
	- jQuery's `getJSON()` : FAILURE
- `/with-cors-disabled/?callback=?`
	- `xmlHttp` : FAILURE
	- `fetch` : FAILURE
	- jQuery's `getJSON()` : SUCCESS

###From the server
- `/with-cors-enabled`
	- `fetch`: SUCCESS
- `/with-cors-disabled`
	- `fetch`: SUCCESS
- `/with-cors-disabled/?callback=?`
	- `fetch`: FAILURE (JSONP makes sense only for the client)

