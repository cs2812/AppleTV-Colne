import { 
    Box,


} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slide.module.css"
import { useNavigate} from "react-router-dom"

const Slide1 = ({data}) => {
    const navigate=useNavigate()
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
      };

    const handleClick=()=>{
        navigate("/show")
    }      
  return (
   
    <Box  className={styles.box}>
        <Slider {...settings}>
        {data.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                className='s1img'
                src={e.img} alt="" />
                </Box>
            </Box>
        })}
        </Slider>
        <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box>
    </Box>
  )
}

export default Slide1
