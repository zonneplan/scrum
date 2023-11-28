import Pusher from "pusher-js";
import { NewRoomData } from '../types/types';

export class Client {
    private pusher = new Pusher(process.env.PUSHER_KEY!, {
        cluster: process.env.PUSHER_CLUSTER!,
    });

    private channel = this.pusher.subscribe('beun');

    public newRoom() {
        this.channel.trigger('client-new-room', <NewRoomData>{
            username: '',
        })
    }

    public fetchRoom() {
        this.channel.bind('client-new-room', (data: NewRoomData) => {
            console.log('huehue');
        })
    }

    public dispose() {
        this.channel.unsubscribe();
    }
}
