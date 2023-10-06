import milk from "../assets/image-gallery-milkbottles.jpg";
import orange from "../assets/image-gallery-orange.jpg";
import sugar from "../assets/image-gallery-sugarcubes.jpg";
import cone from "../assets/image-gallery-cone.jpg";

const ImageGrid = () => {
  return (
    <section className="image__grid">
      <img src={milk} alt="milk bottles" className="grid__img" />
      <img src={orange} alt="orange" className="grid__img" />
      <img src={sugar} alt="sugar cubes" className="grid__img" />
      <img src={cone} alt="ice cream cone" className="grid__img" />
    </section>
  );
};

export default ImageGrid;
