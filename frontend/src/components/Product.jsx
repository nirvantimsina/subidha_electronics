import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="border-1 rounded-2xl p-6 m-8 h-125 w-200 flex-1 flex-row items-center">
        <div className="flex flex-col items-center">
          <img
            className="h-50 w-50"
            src="https://lumprodsta.blob.core.windows.net/prodcontainer/Images/0f673b62-087b-4901-83b5-2c1b02ca2747_Optimus%202800%2B%20inverter-1.png"
            alt="Luminious Optimus 2800+ Inverter"
          />
        </div>
        <div>
          <div className="text-2xl text-center">
            {products.map((p) => (
              <p key={p._id}>
                {p.name} - Rs.{p.price}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="textsm">
            {products.map((p) => (
              <p key={p._id}>{p.description}</p>
            ))}
          </div>
        </div>
        <br></br>
        <div className="flex flex-1 flex-row-reverse">
          <span className="bg-blue-300 border-1 rounded-2xl hover:bg-blue-500 p-4">
            Buy
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
