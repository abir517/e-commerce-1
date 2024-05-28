import React from 'react'
import product3 from "../assets/product3.png"
import { FaHeart } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Product3 = () => {
  return (
    <div className="w-[24%] py-5">
    <div className="relative group overflow-hidden">
      <img src={product3} alt="" />
     
      <div className=" bg-white absolute left-0 h-[120px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end ">
        <ul className=' pr-5'>
          <li className=' flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart/></li>
          <li className=' flex items-center justify-end gap-x-4 py-2'> Compare <IoReload/></li>
          <li className=' flex items-center justify-end gap-x-4'>Add to Cart <FaShoppingCart/></li>
        </ul>
      </div>
    </div>
    <div className=" flex justify-between py-3">
      <h2 className='text-[#262626] font-sans text-[16px] font-bold '>Basic Crew  Neck Tee</h2>
      <p className='text-[#262626] font-sans text-[15px] '>$44.00</p>
     
    </div>
    <div className="">
    <h4 className='text-[#767676] font-sans text-[16px]'>Black</h4>
    </div>
   </div>
  )
}

export default Product3
