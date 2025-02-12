"use client";
import { useState } from 'react';

export default function NewItem() {

    let [quantity, setQuantity] = useState(1);

    function increment() {
        setQuantity(prevQuantity => prevQuantity < 20 ? prevQuantity + 1 : prevQuantity);
    }

    function decrement() {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
    }

    return (
        <div className='text-lg p-16'>
            <div className='flex items-center p-0 shadow-glow max-w-fit'>
                <button onClick={decrement} className='p-4 bg-red-500'>-</button>
                <h1 className='p-4 bg-gray-300 text-black'>{quantity}</h1>
                <button onClick={increment} className='p-4 bg-green-500'>+</button>
            </div>
        </div>
    );
}