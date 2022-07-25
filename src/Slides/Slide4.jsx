import { 
    Box,

} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slide.module.css"

const Slide4 = ({data}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      };
  return (
   
    <Box  className={styles.box3}>
        <Slider {...settings}>
        {data.map((e,i)=>{
            return <Box key={i}className={styles.card3}>
                
                <Box className={styles.cardTop3}>
                <img 
                src={e.img} alt="" />
                </Box>
            </Box>
        })}
        </Slider>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box>
    </Box>
  )
}

export default Slide4
