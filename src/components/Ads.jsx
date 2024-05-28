import Container  from './Container'
import React from 'react'
import Flex from './Flex'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Ads = () => {
  return (
   <section className=' py-10'>
    <Container>
    <Flex className=" justify-between">
     <div className="w-[48%]">
        <img src={img1} alt="" />
     </div>
     <div className="w-[48%]">
        <div className="">
            <img src={img2} alt="" />
        </div> 
        <div className=" mt-[40px]">
            <img src={img3} alt="" />
        </div>
     </div>
    </Flex>
   </Container>

   </section>

  )
}

export default Ads
