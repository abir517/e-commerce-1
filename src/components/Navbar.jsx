import Container from './Container'
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import cartimg from "../assets/cart.png"
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  let [cartShow, setCartShow] = useState(false)
  let [userCartShow, setUserCartShow] = useState(false)
  let cartref = useRef()
  let userref = useRef()


  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cartref.current.contains(e.target) == true) {
        setCartShow(!cartShow)
      } else {
        setCartShow(false)


      }   if (userref.current.contains(e.target) == true) {
        setUserCartShow(!userCartShow)
        
      } else {
        setUserCartShow(false)
       
      }

    })
  }, [cartShow,userCartShow])

  return (
   <nav className='bg-[#F5F5F3] py-5 '>
     <Container>
      <Flex>
        <div className="w-[30%] relative">
          <div ref={cartref} className="flex items-center gap-x-3">
            <FaBarsStaggered />
            <p className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Shop by Category</p>
          </div>
          {cartShow &&
            <div className=" absolute top-[50px] left-0 bg-[#262626] w-[300px]">
              <ul className=' py-4'>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Accesories</li>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Furniture</li>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Electronics</li>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Clothes</li>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Bags</li>
                <li className='text-[#FFFFFFB2] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Home appliances</li>
              </ul>
            </div>
          }
        </div>
        <div className="w-[40%]">
          <div className=" relative">
            <input placeholder='Search Products...' type="search" className=' w-full h-[50px] border-2 border-[#262626] outline-none px-2' />
            <div className=" absolute top-[50%] right-4 translate-y-[-50%] items-center">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="w-[30%] relative ">
          <div className=" flex justify-end gap-x-3 top-8">
            <div className=" flex ">
              <FaUser />
              <IoMdArrowDropdown />
             
            </div>
           
            <div ref={userref} className="">
              <FaCartPlus />
            </div>
           
          </div>
          {userCartShow &&
            <div className=" w-[360px] absolute bg-[#F5F5F3] top-[30px]  right-0">
              <div className=" py-3 bg-[#fff]">
                <div className=" flex justify-around items-center ">
                  <div className="">
                    <img src={cartimg} alt="" />
                  </div>
                  <div className="">
                    <h3>Black Smart Watch</h3>
                    <h5>$44.00</h5>
                  </div>
                  <div className="">
                    <GiCrossedBones />
                  </div>
                </div>
                <div className="bg-[#fff]">
                  <h3 className=' pl-4 py-3'>Subtotal: <span> $44.00</span></h3>
                  <div className=" flex justify-around">
                    <div className="">
                      <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] bg-[#fff] hover:bg-[#222] hover:text-[#fff] text-[#222] duration-300' href="#">View Cart</a>
                    </div>
                    <div className="">
                      <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] bg-[#fff] hover:bg-[#222] hover:text-[#fff] text-[#222] duration-300' href="#">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </Flex>
    </Container>
   </nav>
  )
}

export default Navbar