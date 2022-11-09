import React, { useEffect, useState } from "react";
import { retrieveRegistry, deleteProduct } from "../config/API-Calls";
import CreateProduct from "./CreateProduct";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import "./Registry.css";

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

    const removeProduct= (productId) => {
        console.log("In remove product")
        deleteProduct(registry.id, productId)
        .then(res => {
            getRegistry()
        }).catch(error => {
            console.log(error.response.data.error)
        })
    }

    

    return(
        <div className="container-fluid container mt-5">
            <h2>Your Registry {id}</h2>
            <h3>{registry.title} | <Link to={`/registry/${registry.id}/edit`} style={{color:"inherit"}}>edit</Link></h3>
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
                    {product.id === 0 &&
                        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                        }
                    <p className="card-text eclipse-Text">{product.description}</p>

                    <button onClick={() => removeProduct(product.id)}>Remove Product</button>
                </div>      
                </div> 

    
                )}
            </div>

           
            <div>
                
            </div>


        </div>
    )

}

export default Registry