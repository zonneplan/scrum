'use client';

import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

interface Data {
  newCount: number;
}

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = process.env['NEXT_PUBLIC_PUSHER_KEY'];
    const cluster = process.env['NEXT_PUBLIC_PUSHER_CLUSTER'];

    if (!key || !cluster) {
      return;
    }

    // Initialize Pusher
    const pusher = new Pusher(key, {
      cluster,
      //   authEndpoint: '/api/pusher/auth',
    });

    // Subscribe to a channel
    const channel = pusher.subscribe('my-channel');

    // Bind to an event
    channel.bind('counter-event', (data: Data) => {
      setCount(data.newCount);
    });

    return () => {
      pusher.unsubscribe('my-channel');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}