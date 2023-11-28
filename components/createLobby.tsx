'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { useState } from 'react';
import Pusher from 'pusher-js';

export default function CreateLobbyButton(): JSX.Element {
  const [lobbyCode, setLobbyCode] = useState('');

  interface Data {
    message: string;
  }

  useEffect(() => {
    console.log('useEffect')
  }, []);


  const createLobby = () => {
    const code = generateCode();
    console.log(code);
    
    const key = process.env["NEXT_PUBLIC_PUSHER_KEY"];
    const cluster = process.env["NEXT_PUBLIC_PUSHER_CLUSTER"];

    if(!key || !cluster) {
      return;
    }

    const pusher = new Pusher(key, {
      cluster: cluster,
    });

    const channel = pusher.subscribe("lobby-" + code);

     // Bind to an event
     channel.bind('counter-event', (data: Data) => {
      console.log('hello world1', data.message);
    });

};

  const generateCode = () => {
    const codeLength = 4;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  };

  return (
    <div>
      <button onClick={createLobby} style={{ outline: '2px solid green' }}>Create Lobby</button>
      {lobbyCode && <p>Lobby Code: {lobbyCode}</p>}
    </div>
  );
}
