#!/usr/bin/env node
import app from '../app';
import debug from 'debug';

debug('myapp:server');
import http from 'http';

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
        return val;
    }
    
    if (port) {
        return port;
    }
    
    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    
    const bind = typeof port === 'string' ?
        `Pipe ${  port}` :
        `Port ${  port}`;
    
    switch (error.code) {
    case 'EACCES':
        console.error(`${bind  } requires elevated privileges`);
        process.exit(true);
        break;
    case 'EADDRINUSE':
        console.error(`${bind  } is already in use`);
        process.exit(true);
        break;
    default:
        throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        `pipe ${  addr}` :
        `port ${  addr.port}`;

    debug(`Listening on ${  bind}`);
}