import React from 'react'
import {FaRegArrowAltCircleRight} from "react-icons/fa"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Button,
    Box,
    Text,
    Link,
    Input,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import SignInSvg from '../SVG/SignInSvg'
import AppleSvg from '../SVG/AppleSvg'
const SignBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const fontF=["SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif]
    return (
      <Box value="inside" >
          <Button
            onClick={() => onOpen()}
            colorScheme='blue' h="32px"
          >
        <SignInSvg/>
         Sign in</Button>
        <Modal  onClose={onClose} size="3xl"  isOpen={isOpen} scrollBehavior="inside"  >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader> <AppleSvg/> </ModalHeader>
            <ModalCloseButton color="gray.300" fontSize="xl"  />
            <ModalBody>
              <Box w="60%" h=""  ml="19%" textAlign="center">
              <Text 
              fontSize="2xl" 
              color="black" 
              fontWeight="600"
             fontFamily="Calibri"
             mt="10px"
              >Sign in with your Apple ID</Text>
              <Text fontSize="lg"
              fontWeight="400"
              mt="16px"
              >You will be signed in to Apple TV and Apple Music</Text>
              <Box 
              w="80%" 
              mt="40px" 
              ml="10%"
              borderRadius="9px" 
              display="flex"
              justifyContent="center"
              border="1px solid #b3b3b3 "
              >
              <Input placeholder="Apple ID" variant='unstyled' ml="10px"  border="0px solid" />
              <Button mr="3px" fontSize="3xl" color="gray" mt="3px" variant=''><FaRegArrowAltCircleRight/></Button>
              </Box>
              <Box p="6rem">
                <Text><Link href="" color="blue">Create New Apple ID </Link></Text>
                <Text><Link href="" color="blue"> Forgot Apple ID or Password ?</Link></Text>
              </Box>
              </Box>
            </ModalBody>  
          </ModalContent>
        </Modal>
        
      </Box>
    )
}

export default SignBtn
