'use client';

import React, { useState } from 'react';

interface VotePageProps {

}

const VotePage: React.FC<VotePageProps> = () => {
    const vote = (num: Number) => {
        console.log(num);
    };

    return (
        <div className="flex items-center flex-col gap-10 justify-center h-screen bg-gray-200">
            <div className="flex items-center flex-row gap-10 bg-white p-8 rounded shadow-md w-120 md-20">
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
                <div className="text-2l font-semibold mb-4 drop-shadow-xl p-4 p5 rounded bg-white">
                    naam
                    ?
                </div>
            </div>

            <div className="bg-white p-8 rounded shadow-md w-120">
                <h2 className="text-2xl font-semibold mb-4">Vote</h2>

                <div>
                    <button
                        onClick={()=> {vote(0)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        0
                    </button>

                    <button
                        onClick={()=> {vote(1)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        1
                    </button>

                    <button
                        onClick={()=> {vote(2)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        2
                    </button>

                    <button
                        onClick={()=> {vote(3)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        3
                    </button>

                    <button
                        onClick={()=> {vote(5)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        5
                    </button>
                    
                    <button
                        onClick={()=> {vote(8)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        8
                    </button>

                    <button
                        onClick={()=> {vote(13)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        13
                    </button>

                    <button
                        onClick={()=> {vote(20)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        20
                    </button>

                    <button
                        onClick={()=> {vote(40)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                    >
                        40
                    </button>

                    <button
                        onClick={()=> {vote(100)}}
                        className="bg-blue-500 text-white p-2 rounded-md w-12 mr-6 hover:bg-blue-600"
                        >
                        100
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VotePage;