import React from 'react'
import Aicon from "../Icon/Appleicon.jpg"
import {useNavigate}from "react-router-dom"
import {
Box,
Button,
Image,
Flex,
Spacer,
Input,
} from "@chakra-ui/react"

import SignBtn from './SignBtn'
import SearchSvg from '../SVG/SearchSvg'
const Navbar = () => {

  const navigate=useNavigate()
  let handleInput=()=>{
    navigate("/search")
  }
  let handleclick=()=>{
    navigate("/")
  }
  return (
    <Box 
    border="1px" 
    p="0.5rem" 
    bgColor="black" 
    pl="2rem" 
    pr="2rem"  
    pos="sticky" 
    top="0" 
    left="0"
    zIndex={1}
    >
    <Flex >
      <Button h="32px" ml="-1rem" colorScheme='black' onClick={handleclick}><Image src={Aicon} alt='' w="52px" h="20px" /></Button>
      <Spacer/>
      <Box display="flex" border="1px solid white" borderRadius="8px" mr="10px">
      <SearchSvg />
      <Input variant='unstyled' placeholder="Search" ml="6px" color="white" onClick={handleInput}/>
      </Box>
        <SignBtn/>
    </Flex>
    </Box>
  )
}

export default Navbar


/*
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
*/