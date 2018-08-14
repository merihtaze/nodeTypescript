import { Server } from './Server';

// todo merih.taze: Move below into configuration file
// and add it to .gitignore
const server = new Server({
    database: 'databaseName',
    host: 'host',
    password: 'password',
    user: 'user',
});

server.start();
