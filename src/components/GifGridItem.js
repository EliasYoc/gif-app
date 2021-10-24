import React from "react";

export const GifGridItem = ({ img, title, id }) => {
  return (
    <article className="card animate__animated animate__fadeInLeft">
      <h3>{title}</h3>
      <img
        style={{ flexGrow: 1, objectFit: "contain" }}
        loading="lazy"
        src={img}
        alt={title}
      />
    </article>
  );
};
