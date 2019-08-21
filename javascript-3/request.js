const hostname = '127.0.0.1';
const port = 3000;
const http = require('http');
const url = `http://${hostname}:${port}/`;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const req = new XMLHttpRequest();

function _getAsync(url, handler = () => {}, errorHandler = () => {}) {
    http.get(url, (resp) => {
        let data = '';

        resp.on('data', chunk => data += chunk);

        resp.on('end', () => handler(data));
    }).on("error", (err) => errorHandler(err.message));
}


function _getSync(url, handler = () => {}, errorHandler = () => {}) {
    req.open('GET', url, false);
    req.send();
    if (req.status === 200) {
        handler(req.responseText);
    } else {
        errorHandler(req.status);
    }
}

function request(N, isAsync) {
    for (i = 0; i < N; i++) {
        if (isAsync) {
            _getAsync(url, console.log);
            console.log('async');
        } else {
            _getSync(url, console.log);
            console.log('sync');
        }
    }
}
console.log("1. SYNC...");
request(5, false);
console.log("2. ASYNC...");
request(5,true);
