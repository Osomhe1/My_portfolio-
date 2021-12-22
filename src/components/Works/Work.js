import React from 'react'
import {Box, Text, SimpleGrid ,
//  Link,
 GridItem, Image} from '@chakra-ui/react'
import Blogpost from '../../assests/blogpost.png'
import Profile from '../../assests/profile.png'
import Todolist from '../../assests/todolist.png'
import Estore from '../../assests/Estore.png'
import FourBox from '../../assests/Four-box.png'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default function Work() {

  // const colSpan = createBreakpoints({ base: 3, md: 2 });
  const margin = createBreakpoints({base: 4, sm:'auto', md: 'auto'});
  const marginTop = createBreakpoints({base: 5, sm: 6, md: 5});
  const width = createBreakpoints({base: 420, md: 700, lg: 900})
  const width2 = createBreakpoints({base: 420, md: 600})
  const imageWidth = createBreakpoints({base: 350, md: 250})



    return (
      <Box bg='#edf2f7'>
        <Box>
          <Box w={width2} alignItems='center' m='auto' justifyContent='center'>
            <Text
              textAlign='center'
              color='#4b5ebe'
              fontSize={40}
              fontWeight={700}
            >
              Some of my work
            </Text>
            <Text
              textAlign='center'
              // w={470}
              m='auto'
              color='#5b687b'
              fontWeight={400}
              fontSize={20}
              mt='5'
              mb='5'

            >
              I care about code quality and building truly pleasant user
              experiences, with attention to small but important details.
            </Text>
          </Box>

          <Box pb='6'
          width={width}
          alignItems='center'
           m='auto' 
          >
            <SimpleGrid  
            columns={[1, null, 2, null, 3]}  
            
            >
              <GridItem 
              borderRadius={10} 
              // m='auto' 
              m={margin}
              marginTop={marginTop}
              w={imageWidth}
              >
              {/* <Box 
              bgImage="url('/images/Abibola.jpeg')"
              backgroundPosition="center"
  backgroundRepeat="no-repeat"
                >
              </Box> */}
              <Box>
              <a target='_blank' rel="noreferrer" href='https://netlifyblogosomhe.netlify.app/'>
                <Image borderRadius={10} src={Blogpost} />
                </a>
                </Box>
              </GridItem>
              <GridItem 
              //  m='auto' 
              m={margin}
              marginTop={marginTop}
               w={imageWidth}
               >
               <Box>
               <a target='_blank' rel="noreferrer" href='https://osomhetodolist.netlify.app/' >
                <Image 

                  borderRadius={10} src={Todolist} />
                  </a>
                  </Box>
              </GridItem>
              <GridItem 
              // m='auto' 
              m={margin}
              marginTop={marginTop}
               w={imageWidth}
               ><Box>
               <a target='_blank' rel="noreferrer" href='https://profilecardosomhe.netlify.app/' >
                <Image borderRadius={10} src={Profile} />
                </a>
                </Box>
              </GridItem>
              <GridItem 
              // m='auto' 
              m={margin}
              w={imageWidth}
              >
              <Box>
              <a target='_blank' rel="noreferrer" href='https://osomheestore.netlify.app/' >
                <Image borderRadius={10} src={Estore} />
                </a>
                </Box>
              </GridItem>
              <GridItem 
              // m='auto'
              m={margin}
              marginTop={marginTop}
               w={imageWidth}
               >
               <Box>
               <a target='_blank' rel="noreferrer" href='https://osomhe-four-card-challange.netlify.app/' >
                <Image borderRadius={10} src={FourBox} />
                </a>
                </Box>
              </GridItem>
              {/* <GridItem 
              h={320}  
              bg='#4b5ebe'
              //  m='auto'
              m={margin}
              marginTop={marginTop}
                w={imageWidth}
                >
                <Box>
                <a target='_blank' href='https://github.com/Osomhe1' >
              <Text m='auto'  textAlign='center'>More of my work</Text>
              </a>
              </Box>
              </GridItem> */}
            </SimpleGrid >
          </Box>
        </Box>
      </Box>
    )
}
