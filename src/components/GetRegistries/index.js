import React, { useEffect, useState } from "react";
import { retrieveRegistries, deleteRegistry } from "../API-Calls";
import AddRegistry from "../AddRegistry";
import {Link} from "react-router-dom";
import "./style.css";


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
        <div className="container-fluid container mt-5">
            <h2>Your Registries</h2>

            <AddRegistry getRegistries={getRegistries}/>

            
            <div className="d-flex flex-wrap card-container">

                {
                    registries
                    .map(registry =>
                <div key={registry.id} className="card registry-card" style={{width:"18rem"}} >
            
                    <div  className="card-body">
                        <h5 className="card-title"><Link to={`/registry/${registry.id}`} style={{color:"inherit"}}>{registry.title}</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">{registry.date}</h6>
                        <p className="card-text">{registry.description}</p>

                        <button onClick={() => removeRegistry(registry.id)}>Remove Registry</button>
                    </div>

                </div>           
                )}

            </div>


            {/* <ul>
            {
                registries
                .map(registry =>
                    <li key={registry.id}> <Link to={`/registry/${registry.id}`}>{registry.title}</Link> | <button onClick={() => removeRegistry(registry.id)}>x</button></li>
                )
            }
            </ul> */}

        </div>
    )
}
export default Registries