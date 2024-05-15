import React from 'react'
import  Container  from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { BiShow } from 'react-icons/bi';

const Header = () => {
  return (
 <header className='h-[80px]'>
  <Container>
  <Flex className='justify-between items-center h-[80px]'>
    <div className="w-1/4">
      <img src={logo} alt="logo" />
    </div>
    <div className="w-3/4">
      <ul className='flex justify-center gap-x-10 '>
        <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Home</li>
        <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Shop</li>
        <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>About</li>
        <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Contacts</li>
        <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Journal</li>
      </ul>
    </div>
    <div className="lg:hidden " onClick={()=>setshow(!show)}>
      {BiShow == true ? <RxCross2/> : <FaBars/>}
    
    </div>
  </Flex>
 </Container>

 </header>
  )
}

export default Header
