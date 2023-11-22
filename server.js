const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Je suis super Ryo !');
});

server.listen(process.env.PORT || 3000);