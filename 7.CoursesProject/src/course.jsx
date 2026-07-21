import React from "react";

function course({ course }) {
  //console.log(course);
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} width={250} height={150} />
        <h4 className="course-title">{title}</h4>
        <p className="course-des">{description}</p>
        <h3 className="course-price">{price}</h3>
        <a href="{link}" className="course-link">
          Satın almak için
        </a>
      </div>
    </div>
  );
}

export default course;
