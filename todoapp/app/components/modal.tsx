import React, { useState } from 'react';
import { Todointerface } from "../../interfaces/todo_interface";
import { addTodo } from "../../app";


const Modals: React.FC = () => {
    const [newValue, setNewValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setNewValue(e.target.value);
       

    };

    const handleSubmit = async  (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo: Todointerface = {
            id: Math.floor(Math.random() * 1000),
            todo: newValue,
        };
        await addTodo (newTodo);
        console.log(newValue); // Replace this with your logic to handle the new value
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={newValue}
                
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <button type="submit" className="btn btn-warning">Add</button>
            </form>
        </div>
    );
}

export default Modals;
