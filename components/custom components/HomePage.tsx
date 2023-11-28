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
        // <Router>
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
                    <h2 className="inline sm:block lg:inline xl:block">Zin in een potje poker?</h2>{' '}
                    <p className="inline sm:block lg:inline xl:block">Vraag de code bij je teamgenoten!</p>
                </div>
                <form className="w-full max-w-md lg:col-span-5 lg:pt-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-x-4">
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            value={username}
                            onChange={handleUsernameChange}
                            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="John Doe"
                        />

                        <label htmlFor="roomCode" className="sr-only">
                            Room Code
                        </label>
                        <input
                            id="roomCode"
                            name="roomCode"
                            type="text"
                            autoComplete="roomCode"
                            required
                            value={roomCode}
                            onChange={handleRoomCodeChange}
                            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="1234"
                        />

                        <button
                            type="button"
                            onClick={joinLobby}
                            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Join Room
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-900">
                        Ben jij de baas? Maak een eigen{' '}
                        <a onClick={createLobby}
                           className="font-semibold text-indigo-600 hover:text-indigo-500">
                            room&nbsp;
                        </a>
                        aan.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
