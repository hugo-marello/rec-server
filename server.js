const http = require('http');

const port = process.env.REC_PORT || 8000
const httpCode = process.env.REC_HTTP_CODE || 200
const httpStatus = process.env.REC_HTTP_STATUS || http.STATUS_CODES[httpCode]
const httpVersion = process.env.REC_HTTP_VERSION
const httpHeaders = process.env.REC_HTTP_HEADERS || 'Content-Length:0'
const httpPayload = process.env.REC_HTTP_PAYLOAD || ''

let message = `HTTP/${httpVersion || '1.1'} ${httpCode} ${httpStatus}\r\n`;
if(httpHeaders) {
    let headers = httpHeaders.split(';')
    for( const header of headers) {
        const separatorIndex = header.indexOf('=');
        if (separatorIndex == -1) continue;
        const name =  header.slice(0, separatorIndex);
        const value = header.slice(separatorIndex+1); 
        if(name && value) message+=`${name.trim()}: ${value.trim()}\r\n`
    }
}
message+=`${httpPayload}\r\n`

const server = http.createServer((req, res) => {
    console.log(`received message ${req.method} with ${req.socket.bytesRead} bytes`)
    if(!httpVersion){
        res.socket.end(message.replace('HTTP/1.1',`HTTP/${req.httpVersion}`));
    } else {
        res.socket.end(message);
    }
    console.log('response sent');
});

server.on('clientError', (err, socket) => {
  console.err('ERROR', err)
  socket.end(message);
});

console.log('Running server at port: '+port)
console.log('Using message: ',message)
server.listen(Number(port));
