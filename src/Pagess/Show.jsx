import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ShowImg from './ShowImg'
import {Season,row2,Casts} from "../data"

import {AiFillCaretDown} from "react-icons/ai"
import Episode from '../Slides/Episode'
import styles from "../Slides/Slide.module.css"

import t1 from  "../Image/Trailer/1.jpg"
import t2 from  "../Image/Trailer/2.jpg"
import t3 from  "../Image/Trailer/3.jpg"
import Slide2 from '../Slides/Slide2'
import Cast from '../Slides/Cast'


const Show = () => {
  return (
    <Box>
        <ShowImg/>
        <Box >
        <Box textAlign="left" ml="40px" mt="30px" display="flex">
        <Text
        fontSize="l"
        fontWeight="600"
        >
            Season 1 </Text><AiFillCaretDown/>
        </Box>
          <Episode data={Season}/>
        </Box>



        <Box >
        <Box textAlign="left" ml="40px" mt="10px" display="flex">
        <Text
        fontSize="l"
        fontWeight="600"
        >
            Trailers </Text>
        </Box>
        <Box  className={styles.box2} display="flex" >
            <Box className={styles.card2}>
                <Box className={styles.cardTop2}>
                <img src={t1} alt=""  />
                </Box>
                <Box border="solid" textAlign="left">
                <Text fontWeight="bold" fontSize="xs" color="gray">Seasone 3</Text>
                </Box>
            </Box>

            
            <Box className={styles.card2}  w="20%">
                <Box className={styles.cardTop2} >
                <img src={t2} alt=""  />
                </Box>
                <Box border="solid" textAlign="left">
                <Text fontWeight="bold" fontSize="xs" color="gray">Seasone 2</Text>
                </Box>
            </Box>

            <Box className={styles.card2} w="20%">
                <Box className={styles.cardTop2}>
                <img src={t3} alt=""  />
                </Box>
                <Box border="solid" textAlign="left">
                <Text fontWeight="bold" fontSize="xs" color="gray">Seasone 1</Text>
                </Box>
            </Box>
        </Box>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="6px"></Box>





        
        <Box textAlign="left" ml="40px" mt="10px" display="flex">
        <Text
        fontSize="l"
        fontWeight="600"
        >
        Bonus Content </Text>
        </Box>
        <Box  className={styles.box2} display="flex" >
            <Box className={styles.card2}>
                <Box className={styles.cardTop2}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mh92Ko25esUcPPyzH5-0A5jMIaR4o0KxD_H6flLp3LjwKnbXkJhxrtiF0O0oPBxCDX8&usqp=CAU" alt=""  />
                </Box>
                <Box border="solid" textAlign="left">
                <Text fontWeight="bold" fontSize="xs" color="gray">Adulting/Adopting</Text>
                </Box>
            </Box>
        </Box>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="6px"></Box>



        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Most Popular Now</Text>
          </Box>
          <Slide2 data={row2}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Cast {"&"} Crew</Text>
          </Box>

          <Cast data={Casts}/>
          
        </Box>





<Box p="2rem"></Box>

        </Box>
        
    </Box>
   
  )
}

export default Show
