import React, { useEffect, useState } from "react";
import { retrieveRegistries, deleteRegistry } from "./API-Calls";
import AddRegistry from "./AddRegistry";
import {Link} from "react-router-dom";

const Registries = ({props}) => {
    const[registries, setRegistries] = useState([]);

    useEffect(() => {
        getRegistries();
    }, []);

    const getRegistries = () => {
        console.log("Getting Registries!")
        return retrieveRegistries()
            .then(res => {
            const registries = res.data;
            setRegistries(registries);
        })
    }
    const removeRegistry = id => {
        console.log("Delete Key: " + id)
        deleteRegistry(id).then(res => {
            console.log(res.status)
            getRegistries()
        })
    }

    return (
        <div>
            <h2>Your Registries</h2>
            <ul>
            {
                registries
                .map(registry =>
                    <li key={registry.id}> <Link to={`/registry/${registry.id}`}>{registry.title}</Link> | <button onClick={() => removeRegistry(registry.id)}>x</button></li>
                )
            }
            </ul>
            <AddRegistry getRegistries={getRegistries}/>
        </div>
    )
}
export default Registries