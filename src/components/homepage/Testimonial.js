import React from "react";

const starClassName = "bi bi-star-fill";
const starFilledClassName = "bi bi-star-fill ll-secondary-color";

const Testimonial = ({ title, rating, description }) => {
  return (
    <div className='testimonial p-2'>
      <h6>{title}</h6>
      <h6>
        <i className={rating >= 1 ? starFilledClassName : starClassName}></i>
        <i className={rating >= 2 ? starFilledClassName : starClassName}></i>
        <i className={rating >= 3 ? starFilledClassName : starClassName}></i>
        <i className={rating >= 4 ? starFilledClassName : starClassName}></i>
        <i className={rating >= 5 ? starFilledClassName : starClassName}></i>
      </h6>
      <p className='testimonial-description'>{description}</p>
    </div>
  );
};

export default Testimonial;
