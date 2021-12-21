import React from 'react'
import {Box, Text, Link, Grid, GridItem} from '@chakra-ui/react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default function Footer() {

      const colSpan = createBreakpoints({ base: 2, md: 1 });
      const marSpan = createBreakpoints({base: 4, sm:'auto', md: 'auto'});


    return (
      <Box bg='#ccd6e0' w='100%' fontSize={20}
       bottom='' h='100' color='#4a5568' 
     
       >
       <Grid templateColumns='repeat(2, 1fr)'>
       <GridItem colSpan={colSpan} m={marSpan}>
          <Text>Designed and developed by Osomhe Aleogho.</Text>
        </GridItem>
        <GridItem colSpan={colSpan} m={marSpan}>
        <Box m='auto' d='flex' fontSize={30}>
          <Box m='4'>
            <Link href='https://github.com/Osomhe1' target='_blank'>
              <AiFillGithub />
            </Link>
          </Box>
          <Box m='4'>
            <Link href='https://twitter.com/home' target='_blank'>
              <AiOutlineTwitter />
            </Link>
          </Box>

          <Box m='4'>
            <Link
              href='https://www.linkedin.com/in/osomhe-aleogho-8396861a6/'
              target='_blank'
            >
              <AiOutlineLinkedin />
            </Link>
          </Box>
        </Box>
        </GridItem>
        </Grid >
      </Box>
    )
}
