import React, { useState } from "react";
import { createProduct } from "../API-Calls";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";


const CreateProduct = ({ getRegistry}) => {
    const[url, setUrl] = useState("");
    const { id } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        createProduct(id, url).then(res => {
            if(res.status === 200){
                setUrl("");
                getRegistry();
                
            }
        })

    }




    return (<>

<form onSubmit={handleSubmit}>
            <input
                type="text"
                className="title"
                value={url}
                onChange={e => setUrl(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
            </form>
    </>);
}
export default CreateProduct