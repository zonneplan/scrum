import Pusher from 'pusher';

export async function POST(request: Request) {
    const pusher = new Pusher({
        appId: process.env["PUSHER_APP_ID"] as string,
        key: process.env["PUSHER_KEY"] as string,
        secret: process.env["PUSHER_SECRET"] as string,
        cluster: process.env["PUSHER_CLUSTER"] as string,
        useTLS: true
      });
      
  pusher.trigger("my-channel", "counter-event", {newCount: 5} );

  return new Response("OK");
}