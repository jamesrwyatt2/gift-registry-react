import React from "react";
import Product from "./Product";
import IframelyProduct from "./IframelyProduct";



const ProductList = ({ products, regId, changeToRegistry }) => {


  return (
    <div className="d-flex flex-wrap card-container">
      {
        products
          .map(product =>
            <Product
              key={product.id}
              product={product}
              registryId={regId}
              changeToRegistry={changeToRegistry}
            />
          )}
      {/* {
        products
          .map(product =>
            <IframelyProduct
              key={product.id}
              product={product}
              registryId={regId}
              changeToRegistry={changeToRegistry}
            />
          )} */}
    </div>
  );
};

export default ProductList;