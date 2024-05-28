import React from 'react'
import banImg from "../assets/banner.png"
import Slider from "react-slick";
import  Container  from './Container';
import Flex from './Flex';
import { IoReloadSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";

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
        <ul style={{ margin: "0" }}> {dots} </ul>
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
    <>

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
   <Container>
    <Flex className=" justify-between py-6">
     <div className="">
      <div className="flex items-center  gap-x-2">
      <PiNumberTwoBold/>
      <h2 className='text-[white] font-sans text-[16px] lg:text-[#767676]'> Two years warranty</h2>
      </div>
     
     </div>
     <div className="">
      <div className=" flex items-center  gap-x-4">
      <FaTruck/>
      <h2 className='text-[white] font-sans text-[16px] lg:text-[#767676]'>  Free shipping</h2>
      </div>
     </div>
     <div className="">
      <div className=" flex items-center gap-x-4">
      <IoReloadSharp/>
      <h2 className='text-[white] font-sans text-[16px] lg:text-[#767676]'>  Return policy in 30 days</h2>
      </div>
     
     </div>
    </Flex>
   </Container>



    </>
  
  )
}

export default Bannerr
