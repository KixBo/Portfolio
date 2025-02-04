import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

{
  /* Paramètres du carrousel */
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

function ProjectCarousel({ images }) {
  return (
    <div className="relative custom-slider mb-4">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image}>
            <img src={image} alt="Image du projet" className="w-full rounded-lg" loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectCarousel;
