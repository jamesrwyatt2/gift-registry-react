import React, { useState } from "react";
import { createRegistry } from "./API-Calls";


const AddRegistry = ({getRegistries}) => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[date, setDate] = useState("");

    const handleSubmit = e => {
        console.log("Handle Submit - Add Reg!")
        e.preventDefault();
        // return;
        console.log("title:" + title)
        console.log("description:" + description)
        console.log("Date:" + date)
        createRegistry(title, description, date).then(res => {
            if(res.status === 200){
                setTitle("");
                setDescription("");
                setDate("");
                getRegistries();
            }
        })
        
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                className="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input
                type="text"
                className="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Button</button>
            </form>
        </div>
    )
}
export default AddRegistry