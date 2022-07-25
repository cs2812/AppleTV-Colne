import { Box, Icon } from '@chakra-ui/react'
import {AiOutlineSearch} from "react-icons/ai"

import React from 'react'

const SearchSvg = () => {
  return (
    <Box color="gray" >
        <AiOutlineSearch style={{width:"20px",height:'20px', marginTop:"5px", marginLeft:"5px"}}/>
    </Box>
  )
}

export default SearchSvg
