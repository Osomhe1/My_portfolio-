import React from 'react'
import { extendTheme, Box } from '@chakra-ui/react'

export default function theme() {

    const config = {
      initialColorMode: 'light' | 'dark',
      useSystemColorMode: false,
    }

    const theme = extendTheme({ config })
    return (
        <Box>
            {theme}
            
        </Box>
    )
}
