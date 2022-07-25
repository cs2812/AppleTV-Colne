import { 
    Box,


} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slide.module.css"

const Slide2 = ({data}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
      };
  return (
   
    <Box  className={styles.box1}>
        <Slider {...settings}>
        {data.map((e,i)=>{
            return <Box key={i}className={styles.card1}>
                
                <Box className={styles.cardTop1}>
                <img 
                src={e.img} alt="" />
                </Box>
            </Box>
        // console.log(e)
        })}
        </Slider>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box>
    </Box>
  )
}

export default Slide2
