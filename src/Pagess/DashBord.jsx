import { Box } from '@chakra-ui/react'
import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'
import Home from './Home'

const DashBord = () => {
  return (
    <Box>
      <Home/>
      <Footer/>
      <FAQ/>
    </Box>
  )
}

export default DashBord
