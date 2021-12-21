import React from 'react'
import {Box, Text, ListItem, Grid, List} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default function Skill() {


  const margin = createBreakpoints({base: 4, sm:'auto', md: 'auto'});
  const marginTop = createBreakpoints({base: 5, sm: 6, md: 5});
  const width = createBreakpoints({base: 420, md: 650})
  // const width2 = createBreakpoints({base: 420, md: 600})

    return (
      <Box bg='#ccd6e0'>
        <Box>
          <Text
            textAlign='center'
            color='#4b5ebe'
            fontSize={40}
            fontWeight={700}
          >
            Technical skill set
          </Text>
          <Text
            textAlign='center'
            // w={520}
            w={width}
            // m='auto'
            m={margin}
            color='#5b687b'
            fontWeight={400}
            fontSize={20}
          >
            I’m constantly learning and keep up to date with the latest
            technologies, so I can pick the best tech for the job.
          </Text>
        </Box>
        <Box>
          <Grid>
            <Box 
            // w={500}
            w={width}
            //  m='auto'
            m={margin}
            mb={marginTop}
             >
              <Text fontWeight={500} fontSize={40} color='#333c66'>
                Java
              </Text>
              <Text m='auto' color='#5b687b' fontWeight={400} fontSize={20}>
                I'm currently into it for some month now. Since I'm going into
                full-stack fully, it will be my main toolset for building web
                apps.
              </Text>
            </Box>
            <Box
              // w={500}
              w={width}
              // m='auto'
              m={margin}
              color='#5b687b'
              fontWeight={400}
              fontSize={20}
              mb={marginTop}
            >
              <Text fontWeight={500} fontSize={40} color='#333c66'>
                JavaScript
              </Text>
              <Text>
                It’s my main language. I focus on building single-page apps and
                websites with attention to code quality and best practices.
              </Text>
              <List
                textTransform='capitalize'
                d='flex'
                justifyContent='space-around'
                mt={marginTop}

              >
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  React
                </ListItem>
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  Chakra-UI
                </ListItem>
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  Bootstrap
                </ListItem>
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  Next
                </ListItem>
              </List>
            </Box>
            <Box
              // w={500}
              w={width}
              // m='auto'
              m={margin}
              mb={marginTop}
              color='#5b687b'
              fontWeight={400}
              fontSize={20}
              // mb='5'
            >
              <Text
                fontWeight={500}
                fontSize={40}
                color='#333c66'
                textTransform='uppercase'
              >
                html/css
              </Text>
              <Text>
                I write semantic markup with accessibility in mind. I keep my
                CSS manageable and scalable strictly.
              </Text>
              <List
                textTransform='capitalize'
                d='flex'
                justifyContent='space-around'
                mt={marginTop}
              >
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  Tailwind
                </ListItem>
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  html5
                </ListItem>
                <ListItem bg='#4a5568' opacity='90%' color='#fff' p={2}>
                  css3
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>
    )
}
