import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1712714',
  key: '892d3d7e0676f240f4af',
  secret: '7e9b8c32a12ca529f49f',
  cluster: 'eu',
  useTLS: true
});

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const { socket_id, channel_name } = req.body;

  // Authenticate the connection
  const auth = pusher.authenticate(socket_id, channel_name);

  res.send(auth);
}