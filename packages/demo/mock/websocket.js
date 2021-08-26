#!/usr/bin/env node
var ws = require('ws');
var faker = require('faker');

const wss = new ws.WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        ws.send(faker.fake("time:{{time.recent}} , name:{{name.lastName}} {{name.firstName}} , m1:{{datatype.number}}, m2:{{datatype.float}}, f1:{{internet.url}}, f2:{{internet.ip}}"));
    });
}, 1000);