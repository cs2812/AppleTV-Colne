import React from 'react'
import HeaderImg from "../Image/HeaderImg.jpg"
import {
    Box,
    Image,
    Text,
    Button,
    Link,

} from "@chakra-ui/react"

const LandingImage = () => {
  return (
    <Box>
      <Box color="white"
                pos="absolute"
                // bottom="88.85%"
                top="7.4%"
                w="100%" 
                >
                <Text fontSize='80px' fontWeight="700" >All Apple Originals.</Text>   
                <Text fontSize='2xl' lineHeight="1.47" fontWeight="600"> Exclusively on Apple TV+. Watch here and on the Apple TV app across your devices.</Text>   
                <Button bg="white" mt="25px" color="black">Start Free Trial</Button>
                <Text fontSize='xs' mt="2px" color="gray"  fontWeight="500">7 days free then $4.99/month.</Text> 
                <Text fontSize='xs' color="gray" fontWeight="500">Or 3 months free when you buy an eligible Apple device. 
                {" "}
                <Text as="span"><Link href="https://www.apple.com/promo/" target={"_blank"} color="blue" >Terms apply.</Link></Text>
                {" "}
                <Text as="span">Some titles coming later to Apple TV+.</Text></Text>  
            </Box>
        <Box w="100%" h="55.63vw">
            <Image src={HeaderImg} alt="headerImage" />
        </Box>
            
    </Box>
  )
}
export default LandingImage
