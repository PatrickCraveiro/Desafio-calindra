import React from "react";
import "./StarRatings.scss";

const StarRatings = ({ score }) => {
  const setStar = () => {
    let scoreSpllit = score.toString().split("");

    let scoreCeil = scoreSpllit[0] + "." + scoreSpllit[1];

    return Math.round(Number(scoreCeil));
  };

  let numberStar = setStar();

  return (
    <div className="product-information__review">
      {new Array(1, 2, 3, 4, 5).map((item) => {
        return (
          <div
            className={
              item <= numberStar
                ? "product-information__review__star active"
                : "product-information__review__star"
            }
          ></div>
        );
      })}

      <p>Avaliações</p>
    </div>
  );
};

export default StarRatings;
