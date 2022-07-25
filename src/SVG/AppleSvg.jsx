import React from 'react'
import {Image,Box} from "@chakra-ui/react"
import Apple_logo from "../Icon/Apple_logo.png"
const AppleSvg = () => {
  return (
    <Box boxSize="52px" alignItems="center" ml="43%" mt="3%">
    <Image  src={Apple_logo} />
    </Box>
  )
}

export default AppleSvg
