'use client'

import React, { useState } from 'react';

export default function HomePage() {
    function createSession() {
        console.log('create session')
    }

    function joinSession() {
        console.log('join session')
    }

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <h1>Zonneplan SCRUM Poker</h1>

            <div>
                <h2>Create session:</h2>
                <button
                    onClick={createSession}
                    type="button"
                    className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Create session
                </button>
            </div>

            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                    Username
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="username"
                    />
                </div>
                <label htmlFor="roomcode" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                    Room code
                </label>
                <div className="mt-2">
                    <input type="text" name="roomcode" id="roomcode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="1234"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <button onClick={joinSession} type="button"
                        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Join session
                    </button>
                </div>
            </div>
        </main>
    )
}