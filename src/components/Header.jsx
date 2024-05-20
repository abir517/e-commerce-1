import React from 'react'
import  Container  from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"

const Header = () => {
  return (
 <header>
  <Container>
  <Flex className='justify-between items-center h-[80px] bg-#fff'>
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
    
  </Flex>
 </Container>

 </header>
  )
}

export default Header
