import React from "react";

type Props = {
  rating: number;
  numReviews?: number;
  caption?: string;
};
export default function Rating(props: Props) {
  const { rating, numReviews, caption } = props;

  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <i
            className={
              rating >= i + 1
                ? "fas fa-star"
                : rating >= i + 1 - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
      ))}
      {caption ? (
        <span>{caption}</span>
      ) : numReviews != 0 ? (
        <span>{" " + numReviews + " reviews"}</span>
      ) : (
        ""
      )}
    </div>
  );
}
