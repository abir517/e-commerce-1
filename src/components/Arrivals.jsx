import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Arriv from './Arriv'
import Arriva from './Arriva'
import Arrivas from './Arrivas'
import Arri from './Arri'

const Arrivals = () => {
  return (
   <Container>
    <Flex className=" flex justify-between flex-wrap py-3 mt-20 ">
      <Arriv/>
      <Arriva/>
      <Arrivas/>
      <Arri/>
    </Flex>
   </Container>
  )
}

export default Arrivals
