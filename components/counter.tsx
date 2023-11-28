"use client";

import { useEffect, useState } from 'react';

import Pusher from 'pusher-js';

type Props = {
  channelName: string
}



export default function Counter({
  channelName,
}: Props) {
  let [count, setCount] = useState(0)

  useEffect(() => {
    const pusher = new Pusher(process.env.PUSHER_KEY!, {
      cluster: process.env.PUSHER_CLUSTER!,
    });

    const channel = pusher.subscribe(channelName);

    channel.bind('client-count', (count: number) => {
      setCount(count);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  }, []);

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      { count }
    </div>
  );
}

