'use client';

import { join } from 'path';
import { use, useEffect } from 'react';
import LobbyPage from "@/components/custom components/Lobby";

export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

export default function Lobby() {
  useEffect(() => {
    console.log('Lobby page loaded');
    joinLobby();
  }, []);

  const joinLobby = async () => {
    // Use the lobbyCode value here
    // const response = await fetch('/api', {
    //   method: 'POST',
    //   body: JSON.stringify({  }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  };

  return (
    <div>
        <LobbyPage/>
    </div>
  );
}