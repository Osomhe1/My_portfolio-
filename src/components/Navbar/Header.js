import React from 'react'
import { Box, Text,  Link } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box>
      <Box d='flex' justifyContent='space-between'>
        <Box textTransform='uppercase' m='auto'>
          <Text color='#4a5568' fontWeight={700} fontSize={20}>
            osomhe <span color='#4b5ebe'>aleogho</span>
          </Text>
        </Box>
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
    </Box>
  )
}
