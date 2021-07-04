import React from "react";
const ImageGrid = ({ images }) => {
  //const { images } = props;
  return (
    <>
      {images.map((image) => (
        <img src={image.urls.small} alt={image.urls.small} />
      ))}
    </>
  );
};

export default ImageGrid;
