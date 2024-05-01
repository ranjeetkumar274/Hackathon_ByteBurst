import ImageGallery from "react-image-gallery";
import React from "react";
import "~react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
    const images = [
  {
    original: "../public/birthday.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

    return (
        <ImageGallery items={images}/>
    )
}

export default Gallery;

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }