import React from "react";
import "./Container.scss";
import StarRating from "../mainHeader/Search/StarRatings/StarRatings";
import { useProduct } from "../../context/Product";

const MainContainer = () => {
  const { product } = useProduct();

  return (
    <div className="main-container">
      {product.map((post) => (
        <ul className="scale-in-center">
          <li>
            <h3>{post["name"]}</h3>
            <div className="product-information">
              <StarRating score={post["_meta"]["score"]}></StarRating>
              <p>{post["_meta"]["visitsClickCount"]} Vísitas</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MainContainer;
