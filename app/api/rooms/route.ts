import { Client } from "@/lib/client";

const client: Client = new Client();

export async function POST(request: Request) {
    const body = await request.json()

    client.newRoom();

    console.log(body.test)
    return new Response('ok');
}

export async function GET(request: Request) {
    client.fetchRoom();

    return new Response('ok');
}
