import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

const FAQ = () => {
  return (
    <Box border="solid white" mt="20px" >
        <Box p="2rem">
            <Text fontWeight="bold" fontSize="5xl">Question? Answers.</Text>
        </Box>
        <Box border="solid white" w="80%" m="auto">
            <Accordion defaultIndex={[0]} allowMultiple>

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px"> 
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">What is Apple TV+?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton >
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                    Apple TV+ is a streaming service from Apple.
                    it features exclusive Apple Original shows and movies from some of the industry's top talent, 
                    with new premieres arriving eaach month.
                    Browse all of the available content on Apple TV+ inside the Apple TV app on the "Apple TV+" tab or here on <Link target="_blank" href='https://tv.apple.com/' color="blue">tv.apple.com</Link>
                    </Box>
                    </AccordionPanel>
                </AccordionItem> 

                <AccordionItem >
                    <h2>
                    <AccordionButton  pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">What does Apple TV+ include?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                    Apple TV+ includes Apple Original films and series--Which are original shows and movies made exclusively for Apple.
                    It alse includes free access for anyone to watch Friday Night Baseball, provided through Apple TV+ in partnership with MLB
                    (Major League Baseball). New shows and movies are being added to the streaming service often, so browse inside the Apple TV
                    app or visit <Link target="_blank" href='https://tv.apple.com/' color="blue">tv.apple.come</Link>
                    </Box>
                    </AccordionPanel>
                </AccordionItem> 

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">Where can I watch Apple TV+?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                    Apple TV+ is an exclusivr streaming subscription available in the Apple TV app. 
                    You can find Apple TV app on many of your favorite Applw devices. P;us, find the app on 
                    <Link target="_blank" href='https://support.apple.com/en-in/guide/tvplus/welcome/web' color="blue"> many  smart TVs, streaming devices, game consoles, and some select cable boxes.</Link>
                    </Box>
                    </AccordionPanel>
                </AccordionItem> 

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">Can I watch Apple TV+ on my phone?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                   Apple TV+ is a streaming service that lives inside the Apple TV app--and app that brings Apple TV+
                   together with <Link target="_blank" href='https://support.apple.com/en-in/HT209670' color="blue">other streaming service subscriptions that you add.</Link> You can find the <Link target="_blank" href='https://support.apple.com/en-in/guide/tvplus/apd5a38547d1/1.0/web/1.0' color="blue">Apple TV app on iPhone, iPad, Apple TV 4K or HD</Link>,
                   plus on many streaming devices and smart TVs like <Link target="_blank" href='https://support.apple.com/en-in/guide/tvplus/apda10aaed81/1.0/web/1.0' color="blue">Roku, Samsung, LG, Panasonic, and more</Link>.
                    </Box>
                    </AccordionPanel>
                </AccordionItem> 

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">How to watch Apple TV+ on Android or Windows?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                   The easiest way to watch Apple TV+ on an Android phone or Windows device is to visit <Link target="_blank" href='https://tv.apple.com/' color="blue">tv.apple.com</Link>.
                   There you can still sign in with an Apple ID, add Apple Original shows and movies to your Up Nest watchlist, and keep track of what you're watching.
                    </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">Where can I watch on Apple TV+?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                        More Apple Original series are being added to the TV app frequently, so check back often to discover new TV shows on 
                        Apple TV+. Start by browsing in the Apple TV+ tab on the Apple TV app or here on <Link target="_blank" href='https://tv.apple.com' color="blue">tv.apple.com</Link>
                        . You'll find hits like the Emmy-winning Ted Lasso, critically-acclaimed The Morning Show, and sci-fi epic Foundation, plus new and 
                        popular shows like Severance, Slow Horses, and WeCrashed.
                    </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">Can I get Apple TV+ for free?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                    There are a few ways to try Apple TV+ for free .First, try 7 days of Apple TV+ for free by starting a trial in the Apple TV app on 
                    your iPhone , iPad, Apple TV 4k or HD, or on any streaming device.
                    Eligible devices activated 1 July, 2021 or later will qualify for offers of 3 months free Apple TV+, 
                    while those activated on 30 June 2021 or earlier will qualify for offers of 1 year free Apple TV+. 
                    Offer cannot be combined with Apple One. Only one offer per Family, regardless of number of devices purchased.
                    Make sure your eligible device is running the latest iOS, iPadOS, tvOS or macOS. Offer must be claimed in the Apple TV app within 3 months after first setting • up your new device. 
                    To see the offer appear, you will need to sign in with your Apple ID on your new device.
                    </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton pt="15px" pb="15px">
                        <Box flex='1' textAlign='left'>
                        <Text fontSize="2xl" fontWeight="normal">is Apple TV+ accessible?</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                    <Box w="90%" pt="5px"  pb="5px">
                    Apple TV includes built-in accessibility features: VoiceOver: Apple TV supports VoiceOver, 
                    Apple's screen reader. Available in all the languages supported by Apple TV, and with support for Braille displays, 
                    VoiceOver tells you exactly what's on your TV screen and helps you choose commands.
                    Subtitles are supported for 40+ languages for all Apple TV+ titles.
                    <Link target="_blank" href='https://support.apple.com/en-in/guide/tvapp/atvbaeff85db/web' color="blue">Learn about more accessibility options in the Apple TV app.</Link>
                    </Box>
                    </AccordionPanel>
                </AccordionItem>

                
            </Accordion>
            <Box p="2rem"></Box>
        </Box>
      
    </Box>
  )
}

export default FAQ
