'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { useState } from 'react';
import Pusher from 'pusher-js';

export default function CreateLobbyButton(): JSX.Element {
  const [lobbyCode, setLobbyCode] = useState('');

  useEffect(() => {
    console.log('useEffect')
  }, []);

  const joinLobby = async () => {
    console.log('joinLobby' + lobbyCode)
    
    // Use the lobbyCode value here
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({lobbyCode}),
      headers: {
        'Content-Type': 'application/json'
      }
    })


  };


  return (
    <div>
      <input type="text" value={lobbyCode} onChange={(e) => setLobbyCode(e.target.value)} />
      <button onClick={joinLobby}>Join Lobby</button>
    </div>
  );
}
