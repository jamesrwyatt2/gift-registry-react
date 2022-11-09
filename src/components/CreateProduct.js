import React, { useState } from "react";
import { createProduct } from "../config/API-Calls";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";


const CreateProduct = ({ getRegistry}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const[url, setUrl] = useState("");
    const { id } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        if(url === "") {
            setError("Not a valid URL");
            return;
        }

        createProduct(id, url).then(res => {
            console.log("Status code: "+res.status)
            if(res.status === 200){
                setError(null)
                setUrl("");
                getRegistry();
            }
        }).catch(error => {
            // gets error code
            console.log("Error: "+error.response.status)

            setIsLoaded(true);
            setError("Not a valid URL");
        })
    }

    const validateUrl = () => {
        if(url == "") {

        }
    }


    console.log(error)
    console.log(isLoaded)

    return (<>

        {error != null && 
            <div style={{color:"red"}} >
                Error: {error}
            </div>
        }

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