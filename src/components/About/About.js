import React from 'react'
import {Box, Text, 
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'



export default function About() {

    const margin = createBreakpoints({base: 4, sm:5, md: 'auto'});
    const marginTop = createBreakpoints({base: 5, sm: 6, md: 5});
    const width = createBreakpoints({base:300, sm: 420, md: 700, lg: 900})
    const width2 = createBreakpoints({base: 'auto', md: 600});
    const fontSize = createBreakpoints({base:17, sm:20, md:35});
    

    return (
      <Box>
        <Box w={width} m='auto'>
          <Text
            color='#8895bf'
            fontWeight={500}
            textTransform='uppercase'
            fontSize={17}
            mt={marginTop}
            mb={2}
          >
            software developer
          </Text>
          <Box>
            <Text color='#4b5ebe' fontSize={fontSize} fontWeight={700}>
              Hi there, I’m Osomhe
            </Text>
            <Text fontWeight={700} fontSize={fontSize} color='#333c66'>
              I help companys build amazing apps and websites with amazing
              features
            </Text>
          </Box>
        
        </Box>
        <Box w={width2} m={margin} mb={marginTop} color='#5b687b' fontWeight={400} fontSize={20}>
          <Text mt={marginTop}>
            My name is Osomhe Aleogho. I’m a frontend developer with a
            full-stack background and a keen eye for good design. I love to make
            complex things simple and joy to use. Currently, I focus on building
            single-page applications with React and Next.
          </Text>
          <Text mt={marginTop}>
            Over the past years, I’ve gained experience across most aspects of
            the frontend application lifecycle. This allows me to take ownership
            of a project from design to implementation.
          </Text>

          <Text mt={marginTop}>
            I started as a frontend developer. At some point, I found out that I
            will enjoy contributing to brainer part of an applications . Since
            then, I’ve changed my focus to full-stack development.
          </Text>
        </Box>
      </Box>
    )
}
