import React from 'react'
import Showimg from "../Image/ShowImg.webp"
import {BsFillPlayFill} from "react-icons/bs"
import { Box, Button, Image, Text } from '@chakra-ui/react'

const ShowImg = () => {
  return (
    <Box >
    <Box h={"56.25vw"}>
    <Box
    position="absolute"
    m="40px 0 0 40px"
    color="white"
    left="0" 
     >
    <Text 
    fontSize="8xl" 
    fontWeight="extrabold"
    fontFamily="fantasy"
    >TRYING</Text>
    <Text fontWeight="bold">NEW EPISODES FRIDAY</Text>
    </Box>



    <Box 
    display="flex"
    position="absolute"
    pl="2rem"
    pr="2rem"
    mt="41%"
    gap="24px"
    // border="solid black"
    >
        <Box
        w="30%"
        h="200px"
        color="black"
        >
            <Text color="white">Apple TV+</Text>
            <Button bg="white" w="100%" mt="5px"> <BsFillPlayFill/> Play Free Episode</Button> <br />
            <Button bg="white" w="100%" mt="5px">Start Free Trial</Button> <br />
            <Button bg="white" w="100%" mt="5px">+ Add to Up Next</Button>

        </Box>
        <Box 
        color="white"
        mt="40px"
        // border="solid"
        w="99%"
        textAlign="left"
        >
        <Text>All Nikki and Jason want is a baby--the one thing they can't have. So they decide to adopt. with their dysfunctional friends,
            dramatic relatives, and chaotic lives, will the couple succeed in building the family of their dreams? 
            </Text>
        </Box>
        <Box
        color="white"
        textAlign="left"
        // border="solid"
        mt="40px"
        ><Text>Starring Rafe Spall, Esther Smith, Imelds Staunton</Text>
        </Box>
    </Box>
    <Image src={Showimg}/>
    </Box>

    

  
</Box>
  )
}

export default ShowImg
