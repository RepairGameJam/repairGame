import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io(process.env.REACT_APP_API_URI);
const client = feathers();
console.log('⚡: client', client);

client.configure(socketio(socket));

export default client;
