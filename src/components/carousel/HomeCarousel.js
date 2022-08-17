import React from "react";
import Carousel from "react-material-ui-carousel";
// icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CarouselItem from "./CarouselItem";
// images
import Blog1 from "../../assets/img/blog1.jpg";
import Blog2 from "../../assets/img/blog2.jpg";
import Blog3 from "../../assets/img/blog3.jpg";
const HomeCarousel = () => {
  const items = [Blog1, Blog2, Blog3];
  return (
    <Carousel
      height={400}
      NextIcon={<NavigateBeforeIcon />}
      PrevIcon={<NavigateNextIcon />}
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};
export default HomeCarousel;
