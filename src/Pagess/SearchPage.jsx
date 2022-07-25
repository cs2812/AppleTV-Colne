import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { searchShow } from '../data'

const SearchPage = () => {
  return (
    <Box p="30px 45px">
        <Box textAlign={"left" }>
        <Text fontWeight="600" fontSize="lg">Explore Popular Series and Films</Text>
        </Box>
        <Box mt="10px">
        <Grid templateColumns='repeat(5, 1fr)' gap={6} overflow='hidden'>
            {searchShow.map((e)=>{
                return(
        <GridItem w='100%' h='130px' overflow='hidden' borderRadius="12px"><Image src={e.img} w="100%" h='100%'/></GridItem>

                )
            })}
        </Grid>
        </Box>

      
    </Box>
  )
}

export default SearchPage
