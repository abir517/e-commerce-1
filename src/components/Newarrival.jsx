import  Container  from './Container'
import React from 'react'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import Arivals from './Arivals'
import Arivalsimg from './Arivalsimg'
import Arivalim from './Arivalim'

const Newarrival = () => {
  return (
    <section>
        <Container>
            <h2 className='text-[#262626] font-sans text-[36px] font-bold '>New Arrivals</h2>
            <Flex className=" flex justify-between flex-wrap py-3">
             <Arrivalsitem/>
             <Arivals/>
             <Arivalsimg/>
             <Arivalim/>
            </Flex>
        </Container>
    </section>
  )
}

export default Newarrival
