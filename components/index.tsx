import Counter from './counter';
import Pusher from 'pusher-js';
import { db } from '@/lib/kysely';

const pusher = new Pusher(process.env.PUSHER_KEY!, {
  cluster: process.env.PUSHER_CLUSTER!,
});


type CountEvent = {
  count: number;
}

const channelName = 'client-count-channel'

export default async function Index() {
  let users;
  try {
    users = await db.selectFrom('users').selectAll().execute();
  } catch (e: any) {
    users = [];
    console.log("we dont catch errors")
  }
  
  let count = 0;

  const channel = pusher.subscribe(channelName);

  setInterval(() => {
    console.log('interval')
      count++;
      channel.trigger('client-count', {
        count,
      });
  }, 1000)

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Counter!</h2>
          
        <Counter channelName={channelName} />
        </div>
      </div>
     
    </div>
  );
}
