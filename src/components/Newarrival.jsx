import  Container  from './Container'
import React, { useState,useEffect, useContext} from 'react'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { ContextApi, apiData } from './ContextApi'
import Arivals from './Arivals'
import Arivalim from './Arivalim'
import Arivalsimg from './Arivalsimg'


const Newarrival = () => {
  let data = useContext(apiData)
  

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
