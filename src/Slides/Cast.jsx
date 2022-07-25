import { 
    Box,
    Text,

} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slide.module.css"

const Cast = ({data}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
      };
  return (

    <Box  className={styles.box2}>
        <Slider {...settings}>
        {data.map((e,i)=>{
            return <Box key={i}className={styles.card2}>
                <Box>
                <Box className={styles.cardTop2} borderRadius="50%">
                <img src={e.img} alt=""  />
                </Box>
                </Box>
                <Box border="solid">
                <Text fontWeight="bold" fontSize="xs" color="black">{e.t1}</Text>
                <Text fontSize="xs" color="gray">{e.t2}</Text>
                </Box>
            </Box>
        })}
        </Slider>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="6px"></Box>
    </Box>
  )
}

export default Cast
