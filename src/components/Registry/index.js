import React, { useEffect, useState } from "react";
import { retrieveRegistry } from "../API-Calls";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

const Registry = () => {
    const[registry, setRegistry] = useState({});
    const { id } = useParams();
    console.log("Id is: "+ id)


    useEffect(() => {
        getRegistry()
    }, []);

    const getRegistry= () => {
        retrieveRegistry(id)
        .then(res => {
            const data = res.data;
            setRegistry(data);
        })
    }

    

    return(
        <div>
            <h2>Your Registry {id}</h2>
            <h3>{registry.title} | edit</h3>
            <h4>Add Product</h4>
            <h4>Products</h4>

        </div>
    )

}

export default Registry