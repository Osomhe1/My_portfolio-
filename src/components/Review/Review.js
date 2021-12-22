import React from 'react'
import {Box, Text, Image, SimpleGrid} from '@chakra-ui/react'
import AbibolaPics from '../../assests/Abibola.jpeg'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export default function Review() {

    const margin = createBreakpoints({base: 4, sm:'auto', md: 'auto'});
    const width = createBreakpoints({base:300, sm: 420, md: 700})
    const width2 = createBreakpoints({base:300, sm: 420, md: 600})
    const fontWeight = createBreakpoints({base:400, md:500});
    const fontSize = createBreakpoints ({base:15, sm:20, md:30});


    return (
      <Box 
      bg='#ccd6e0' 
      w='100%'
      >
        <Box pb='5' pt='3'  >
          <SimpleGrid
          margin={margin}
          mt='0'
          w={width}
            >
            <Box bg='#fff'
            //  m='auto'
              p='3'
               boxShadow='xl' 
            w={width2}
            >
              <Box >
                <Text color='#5b687b' fontWeight={400} fontSize={fontSize}>
                  "Osomhe is a great person to work with. A team-player and
                  someone who is ready to learn."
                </Text>
              </Box>
              <Box 
              d='flex'
               m='5'>
                <Image borderRadius='50%' h='100' src={AbibolaPics} />
                <Box mt='5' ml='4'>
                  <Text fontWeight={fontWeight} fontSize={20} color='#333c66'>
                    Ifunanyachi Abibola Oworu-Chima
                  </Text>
                  <Text color='#5b687b' fontWeight={400} fontSize={20}>
                    Hng internship
                  </Text>
                </Box>
              </Box>
            </Box>
           
           
          </SimpleGrid>
        </Box>
      </Box>
    )
}
