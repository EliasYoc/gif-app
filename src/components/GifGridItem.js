import React from "react";
import PropTypes from "prop-types";
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

GifGridItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
