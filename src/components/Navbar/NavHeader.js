import React,{useState} from 'react'
import {useColorMode, Switch, Flex, Spacer, Text, Link, IconButton, Box, } from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { createBreakpoints } from '@chakra-ui/theme-tools'


 const NavHeader = () => {

     const {colorMode, toggleColorMode} = useColorMode()
     const isDark = colorMode === 'dark'
     const [display, changeDisplay] = useState('none')
     const marginTop = createBreakpoints({base: 5, sm: 6, md: 5});
     const width = createBreakpoints({base: 420, md: 650})


    return (
        <Flex m='3'>
        <Box textTransform='uppercase' m='auto'>
          <Text color='#4a5568' fontWeight={700} fontSize={20}>
            osomhe <span color='#4b5ebe'>aleogho</span>
          </Text>
        </Box>
        <Spacer />
        <Flex 
        top='1rem'
        align='center'
        right='1rem'>

        <Flex 
        display={['none', 'none', 'flex', 'flex' ]}
        >
        <Box d='flex' justifyContent='space-between'>
        <Box
          color='#4b5ebe'
          textTransform='uppercase'
          d='flex'
          justifyContent='space-around'
          m='auto'
          fontWeight={500}
        >
          <Box
            m='4'
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link href='https://github.com/Osomhe1' target='_blank'>
              github
            </Link>
          </Box>
          <Box
            m='4'
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link href='https://twitter.com/home' target='_blank'>
              twitter
            </Link>
          </Box>
          <Box
            m='4'
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link
              href='https://www.linkedin.com/in/osomhe-aleogho-8396861a6/'
              target='_blank'
            >
              linkedin
            </Link>
          </Box>
          <Box
            m='4'
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link
              target='_blank'
              href='https://docs.google.com/document/d/1K6xATEjCZxVCkhK_DUz4fgOPCj-MmbHIebEVFbtkSz8/edit'
            >
              resume
            </Link>
          </Box>
        </Box>
      </Box>
        </Flex>
        <IconButton 
        // aria-lable='open Menu'
        size='lg'
        mr={2}
        icon={< HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none' ]}
        onClick={() => changeDisplay('flex')}
         />
        <Switch 
        
        color='green'
        isChecked={isDark}
        onChange={toggleColorMode}
        />
        </Flex>

        <Flex 
        w='100vw'
        bg='gray.50'
        zIndex={20}
        h='70vh'
        pos='fixed'
        top=''
        left='0'
        overFlow = 'auto'
        flexDir='column'
        display={display}
         >
         <Flex justify='flex-end'>
         <IconButton
        //  aria-lable='close Menu'
        size='lg'
        mr={2}
        mt={2}
        icon={< CloseIcon />}
        onClick={() => changeDisplay('none')}
        />
         </Flex>
        <Flex 
        flexDir='colum'
        align='center'
        >
        <Box  
         align='center'
         >
        <Box textTransform='uppercase' m='auto' align='center'>
          <Text color='#4a5568' fontWeight={700} fontSize={20}>
            osomhe <span color='#4b5ebe'>aleogho</span>
          </Text>
        </Box>
        <Box
          color='#4b5ebe'
          textTransform='uppercase'
         marginTop={marginTop}
          fontWeight={500}
          w={width}
        >
          <Box
            m={marginTop}
            h={37}

            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link href='https://github.com/Osomhe1' target='_blank'>
              github
            </Link>
          </Box>
          <Box
            m={marginTop}
            h={37}
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link href='https://twitter.com/home' target='_blank'>
              twitter
            </Link>
          </Box>
          <Box
           m={marginTop}
           h={37}
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link
              href='https://www.linkedin.com/in/osomhe-aleogho-8396861a6/'
              target='_blank'
            >
              linkedin
            </Link>
          </Box>
          <Box
           m={marginTop}
           h={37}
            cursor='pointer'
            _hover={{
              color: '#4a5568',
            }}
          >
            <Link
              target='_blank'
              href='https://docs.google.com/document/d/1K6xATEjCZxVCkhK_DUz4fgOPCj-MmbHIebEVFbtkSz8/edit'
            >
              resume
            </Link>
          </Box>
        </Box>
      </Box>
        </Flex>
        </Flex>
            
        </Flex>
    )
}


export default NavHeader;