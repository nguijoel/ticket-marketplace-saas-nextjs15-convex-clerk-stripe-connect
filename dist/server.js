"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var next_1 = require("next");
var port = parseInt(process.env.PORT || '3000', 10);
var dev = process.env.NODE_ENV !== 'production';
var app = next_1({ dev: dev });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = (0, express_1.default)();
    // Example custom route
    server.get('/api/custom', function (req, res) {
        res.json({ message: 'Hello from custom Express route!' });
    });
    // Let Next.js handle everything else
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function () {
        console.log("> Ready on http://localhost:".concat(port));
    });
});
