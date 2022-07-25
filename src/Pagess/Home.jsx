import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import LandingImage from '../components/LandingImage'
import { 
  row1,
  row2,
  row3,
  row4,
  latest,
  ComingSoon,
  baseball,
  SingleSlide1,
  Suspense,
  Sensational,
  Moment,
  Science,
  Comedy,
  Drama,
  Feature,
  Kids,
} from '../data'


import Slide1 from '../Slides/Slide1'
import Slide2 from '../Slides/Slide2'
import Slide3 from '../Slides/Slide3'
import Slide4 from '../Slides/Slide4'


const Home = () => {
  return (
    <Box>
        <LandingImage/>
        
        <Box>
        <Box textAlign="left" ml="40px" mt="30px">
        <Text
        fontSize="l"
        fontWeight="600"
        >
            Trying Watch Season 1 Free Through This Weekend</Text>
        <Text color="gray.500">A London couple wants to start a family in this heartfelt comedy.</Text>
        </Box>
          <Slide1 data={row1}/>
        </Box>

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
        <Box textAlign="left" ml="40px" mt="9px">
        <Text
        fontSize="l"
        fontWeight="600"
        >
          Emmy® Nominees</Text>
        <Text color="gray.500">Explore the series that are up for television's biggest prize.</Text>
        </Box>
          <Slide1 data={row3}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Watch Entire Seasons</Text>
          </Box>
          <Slide2 data={row4}/>
        </Box>

  

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Latest Originals</Text>
          </Box>
          <Slide3 data={latest}/>
        </Box>

        <Box>
        <Box textAlign="left" ml="40px" mt="1px">
        <Text
        fontSize="l"
        fontWeight="600"
        >Coming Soon</Text>
        <Text color="gray.500">Add to your Up Next watchlist today.</Text>
        </Box>
          <Slide1 data={ComingSoon}/>
        </Box>

        <Box>
        <Box textAlign="left" ml="40px" mt="1px">
        <Text
        fontSize="l"
        fontWeight="600"
        >Major League BaseBall</Text>
        <Text color="gray.500">Free for a limited time, watch Friday Night Baseball and daily coverage.</Text>
        </Box>
          <Slide1 data={baseball}/>
        </Box>

        <Box>
          <Slide4 data={SingleSlide1}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Intrigue and Suspense</Text>
          </Box>
          <Slide2 data={Suspense}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Sensational Stories</Text>
          </Box>
          <Slide2 data={Sensational}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Finding Their Moment</Text>
          </Box>
          <Slide2 data={Moment}/>
        </Box>


        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >Appearing at San Diego's Comic-Con®</Text>
          </Box>
          <Slide3 data={Science}/>
        </Box>

        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >All Comedy Series</Text>
          </Box>
          <Slide2 data={Comedy}/>
        </Box>


        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >All Drama Series</Text>
          </Box>
          <Slide2 data={Drama}/>
        </Box>


        <Box>
          <Box textAlign="left" ml="40px" mt="5px">
          <Text
          fontSize="l"
          fontWeight="600"
          >All Feature Films</Text>
          </Box>
          <Slide2 data={Feature}/>
        </Box>


        <Box>
        <Box textAlign="left" ml="40px" mt="1px">
        <Text
        fontSize="l"
        fontWeight="600"
        >Kids and Family</Text>
        <Text color="gray.500">Discover shows and movies filled with wonder and imagination.</Text>
        </Box>
          <Slide1 data={Kids}/>
        </Box>
   
    </Box>
  )
}

export default Home
