import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'

const Arrivalproduct = () => {
  return (
    <Container>
        <h2 className='text-[#262626] font-sans text-[36px] font-bold py-5'>Special Offers</h2>
        <Flex className=" flex justify-between flex-wrap py-14">
        <Product1/>
        <Product2/>
        <Product3/>
        <Product4/>
        </Flex>
    </Container>
  )
}

export default Arrivalproduct
