import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
  }
  if (halfStars === 1) {
    stars.push(
      <i key="half" className="fas fa-star-half-alt text-yellow-500"></i>
    );
  }
  return <div>{stars}</div>;
};

export default StarRating;
