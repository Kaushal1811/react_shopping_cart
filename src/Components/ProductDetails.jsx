import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    // console.log("filterproduct : ", filterProduct);
    const relatedProducts = items.filter(
      (prod) => prod.category === product.category
    );
    // console.log("related product :", relatedProduct);
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    // console.log(obj)
    // console.log(cart);
    
  };
  return (
    <>
    

    
      <div className="container con">
        <div className="imges">
          <img src={product.imgSrc} alt="" />
        </div>

        <div className="text-center ">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className="btn btn-warning"
          >
            Add to cart
          </button>
        </div>
      </div>

      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
