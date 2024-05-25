import React from 'react'
import banImg from "../assets/banner.png"
import Slider from "react-slick";

const Bannerr = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows:false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"70px",
          top:"50%",
          transform:"translateY(-50%)",
        }}
      >
        <ul style={{ margin: "10px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "#222",
         padding:"10px 0",
          borderRight: "2px #fff solid "
        }}
      >
        0{i + 1}
      </div>
    )
  };

  return (
    <Slider {...settings}><div className="">
    <img src={banImg} alt="Banner" />
  </div> 
  <div className="">
    <img src={banImg} alt="Banner" />
  </div> 
  <div className="">
    <img src={banImg} alt="Banner" />
  </div>
  <div className="">
    <img src={banImg} alt="Banner" />
  </div>
  </Slider>
  
  )
}

export default Bannerr
