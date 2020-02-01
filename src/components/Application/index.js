import React, { useEffect, useState } from 'react';
import client from '../../modules/feathers';

const Application = () => {
  const [_messages, setMessages] = useState();
  useEffect(() => {
    const messages = client.service('messages');

    // Add new messages to the message list
    messages.on('created', message => setMessages(_messages.concat(message)));
  }, []);

  return <div>Board</div>;
};

export default Application;
