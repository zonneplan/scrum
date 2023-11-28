// import React, { useState } from 'react';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {
    // const [username, setUsername] = useState<string>('');
    // const [roomCode, setRoomCode] = useState<string>('');

    // const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value);
    // };

    // const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setRoomCode(e.target.value);
    // };

    const redirectToNextPage = () => {
        console.log('Redirecting to the next page');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Scrum Poker</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        // value={username}
                        // onChange={handleUsernameChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="roomCode" className="block text-sm font-medium text-gray-600">
                        Room Code
                    </label>
                    <input
                        type="text"
                        id="roomCode"
                        name="roomCode"
                        // value={roomCode}
                        // onChange={handleRoomCodeChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <button
                    // onClick={redirectToNextPage}
                    className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
                >
                    Join Room
                </button>
            </div>
        </div>
    );
};

export default HomePage;