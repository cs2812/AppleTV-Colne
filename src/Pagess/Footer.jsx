import React from 'react'
import styles from "./footer.module.css"
import {
    Box,
    Flex,
    Image,
    Link,
    Text,

} from "@chakra-ui/react"
import AL from "../Image/Footer Image/Apple Logo.png"
import fiveI from "../Image/Footer Image/fiveI.jpg"
import device from "../Image/Footer Image/device.jpg"
import game from "../Image/Footer Image/game.jpg"
import TV from "../Image/Footer Image/TV.jpg"

const Footer = () => {
  return (
    <Box bg="black" mt="20px">
     <Box   justifyContent="center" p='2rem' display="flex">
      <Box w="5%" mt="20px" ><Image w="100%" borderRadius="14px" height="100%"  src={AL}/></Box>
     </Box>
     <Box mt="-17px" 
     color="#ebebeb"
     textAlign="center" 
    //  border="solid red" 
     w="58%" 
     ml="21%">
        <Text fontSize="42px" fontWeight="600">Watch Apple TV+ here or anywhere.</Text>
        <Text fontSize="xl" mt="1rem" fontWeight="400">Find Apple TV+ on the Apple TV app, available on Apple devices, smart TVs, and more.</Text>
        <Text mt="1rem">
        <Link color="blue"  fontSize="sm" >See all supported devices</Link>
        </Text>
     </Box>
     <Box ml="23%">
        <Box  w="70%" h="100px" >
            <Image cursor="pointer" src={fiveI} w="100%" h="100%" />
        </Box>
        <Box fontWeight="600" color="#ebebeb" display="flex" ml="24px" w="67%" >
            <Text>Apple TV</Text>
            <Text cursor="pointer" ml="90px">iPhone</Text>
            <Text cursor="pointer" ml="115px">iPad</Text>
            <Text cursor="pointer" ml="120px">Mac</Text>
            <Text cursor="pointer" ml="115px">AirPlay</Text>
        </Box>
        <Box color="#ebebeb" w="70%" p="0.7rem" >
            <Text fontWeight="bold" fontSize="2xl" >See it on your big screen.</Text>
            <Text fontSize="sm" ><Link color="blue">set up your device</Link> </Text>
            <Text fontSize="sm"><Link color="blue">Explor compatible devices</Link> </Text>
        </Box>



        <Box border="solid black" w="75%" ml="-20px" color="gray" >
            <Flex  cursor="pointer">
                <Box  >
                    <Box border="solid black"  ml="32%" mt="30px" className={styles.imgDiv}>
                    <Image src={device}/>
                    </Box>
                    <Box>
                        <Text color="#ebebeb" fontWeight="600" fontSize="l">Streaming Devices</Text>
                        <Text>Roku</Text>
                        <Text>Fire TV</Text>
                        <Text>Google TV</Text>
                        <Text>Android TV</Text>
                    </Box>

                </Box>
                <Box border="solid black">
                <Box border="solid black" ml="31%" className={styles.imgDiv}>
                    <Image src={TV}/>
                    </Box>
                    <Box>
                        <Text color="#ebebeb" fontWeight="600" fontSize="l">Smart TVs</Text>
                        <Text>Samsung</Text>
                        <Text>LG</Text>
                        <Text>VIZIO</Text>
                        <Text>Sony</Text>
                    </Box>

                </Box>
                <Box border="solid black">
                <Box border="solid black" ml="31%" mt="25px" className={styles.imgDiv}>
                    <Image src={game}/>
                    </Box>
                    <Box>
                        <Text color="#ebebeb" fontWeight="600" fontSize="l">Gaming Consoles</Text>
                        <Text>PlayStation</Text>
                        <Text>Xbox</Text>
                    </Box>
                </Box>
            </Flex>
            <Text border="solid black" color="#ebebeb" pb="30px" pt="10px" fontSize="11px">Device availability varies by country or region</Text>
        </Box>
     </Box>

    </Box>
  )
}

export default Footer
