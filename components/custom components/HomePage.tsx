'use client';

import React, { useState } from 'react';
import Pusher from 'pusher-js';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');

  interface Data {
    message: string;
    username: string;
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value);
  };

  const createLobby = () => {
    // const code = generateCode();
    console.log(roomCode);

    const key = process.env['NEXT_PUBLIC_PUSHER_KEY'];
    const cluster = process.env['NEXT_PUBLIC_PUSHER_CLUSTER'];

    if (!key || !cluster) {
      return;
    }

    const pusher = new Pusher(key, {
      cluster: cluster,
    });

    const channel = pusher.subscribe('lobby-' + roomCode);

    // Bind to an event
    channel.bind('counter-event', (data: Data) => {
      console.log('hello world1', data.username);
    });
  };

  const joinLobby = async () => {
    console.log('joinLobby' + roomCode);

    // Use the lobbyCode value here
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ roomCode, username }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status == 200) {
      document.cookie = `username=${username}`;
      document.cookie = `roomCode=${roomCode}`;

      window.location.href = '/lobby/';
      return;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Scrum Poker</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roomCode"
            className="block text-sm font-medium text-gray-600"
          >
            Room Code
          </label>
          <input
            type="text"
            id="roomCode"
            name="roomCode"
            value={roomCode}
            onChange={handleRoomCodeChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <button
            onClick={joinLobby}
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Join Room
          </button>
          <button
            onClick={createLobby}
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
