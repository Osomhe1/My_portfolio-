import React from 'react'
import {Box, Text, Image, SimpleGrid} from '@chakra-ui/react'
import AbibolaPics from '../../assests/Abibola.jpeg'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export default function Review() {

    const margin = createBreakpoints({base: 4, sm:'auto', md: 'auto'});
    // const marginTop = createBreakpoints({base: 5, sm: 6, md: 5});
    const width = createBreakpoints({base: 420, md: 700})
    const width2 = createBreakpoints({base: 420, md: 600})


    return (
      <Box bg='#ccd6e0'>
        <Box pb='5'  >
          <SimpleGrid
          margin={margin}
          w={width}
            >
            <Box bg='#fff' m='auto' p='4' boxShadow='xl' 
            w={width2}
            >
              <Box>
                <Text color='#5b687b' fontWeight={400} fontSize={30}>
                  "Osomhe is a great person to work with. A team-player and
                  someone who is ready to learn."
                </Text>
              </Box>
              <Box d='flex' m='5'>
                <Image borderRadius='50%' h='100' src={AbibolaPics} />
                <Box mt='5' ml='4'>
                  <Text fontWeight={500} fontSize={20} color='#333c66'>
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
