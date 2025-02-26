"use client";
import { useState } from 'react';

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    function handleSubmit() {
        event.preventDefault();
        if (name === "") {
            alert("Name can't be empty");
            return;
        }
        let item = {
            "name" : name,
            "quantity": quantity,
            "category": category
        };
        console.log(item);
        alert("Name: " + item.name + " Quantity: " + item.quantity + " Category: " + item.category);
        setQuantity(prev => prev = 1);
        setName(prev => prev = "");
        setCategory(prev => prev = "Produce");
    }

    function increment() {
        setQuantity(prevQuantity => prevQuantity < 20 ? prevQuantity + 1 : prevQuantity);
    }

    function decrement() {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
    }

    return (
        <div className='text-lg p-16'>
            <form onSubmit={handleSubmit}>
                <input className='text-black rounded-lg mb-5' type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
                <div className='flex items-center p-0 shadow-glow max-w-fit'>
                    <button type='button' onClick={decrement} className='p-4 bg-red-500'>-</button>
                    <h1 className='p-4 bg-gray-300 text-black'>{quantity}</h1>
                    <button type='button' onClick={increment} className='p-4 bg-green-500'>+</button>
                </div>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-black p-2 border border-gray-400 rounded">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" className="bg-blue-400 p-3 rounded-2xl text-white m-5">Submit</button>
            </form>
        </div>
    );
}

//just in case <button onClick={handleSubmit} className='bg-blue-400 p-3 rounded-2xl'>Submit</button>