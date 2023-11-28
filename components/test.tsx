'use client'

import { Client } from '../lib/client';

export function Test(): JSX.Element {
    const client = new Client();

    return (
        <button>Click me to connect!</button>
    )
}
