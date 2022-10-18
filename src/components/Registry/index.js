import React, { useEffect, useState } from "react";
import { retrieveRegistry } from "../API-Calls";
import CreateProduct from "../CreateProduct";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import "./style.css";

const Registry = () => {
    const[registry, setRegistry] = useState({});
    const[products, setProducts] = useState([]);
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
            setProducts(data.products);
        })
    }

    

    return(
        <div className="container-fluid container mt-5">
            <h2>Your Registry {id}</h2>
            <h3>{registry.title} | edit</h3>
            <h4>Add Product</h4>
            


            <CreateProduct  getRegistry={ getRegistry}/>

            <h4>Products</h4>

            <div className="d-flex flex-wrap card-container">
            {
                    products
                    .map(product =>
                <div key={product.id} className="card product-card" style={{width:"18rem"}} >
                <img className="card-img-top product-image" src={product.image} alt="Card image cap"></img>    
                <div  className="card-body">
                    <h5 className="card-title"><Link to={`/registry/${product.id}`} style={{color:"inherit"}}>{product.title}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">$ {product.price}</h6>
                    <p className="card-text eclipse-Text">{product.description}</p>

                    <button >Remove Product</button>
                </div>

                </div>           
                )}
            </div>

        </div>
    )

}

export default Registry