import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const socket = io('http://10.106.30.105:3030');
const client = feathers();
console.log('⚡: client', client);

client.configure(feathers.socketio(socket));

export default client;
