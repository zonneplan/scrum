import Pusher from 'pusher';

export async function POST(request: Request) {
  console.log('POST');
  const pusher = new Pusher({
    appId: process.env['PUSHER_APP_ID'] as string,
    key: process.env['PUSHER_KEY'] as string,
    secret: process.env['PUSHER_SECRET'] as string,
    cluster: process.env['PUSHER_CLUSTER'] as string,
    useTLS: true,
  });

  const data = await request.json();
  console.log(data);
  pusher.trigger('lobby-' + data.roomCode, 'counter-event', {
    message: 'Bonjour',
    username: data.username,
  });

  return new Response('OK');
}
