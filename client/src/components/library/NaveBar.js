import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { NaveBarStyle } from './navBarStyle'

export default function NaveBar() {
  return (
   <Box p={3} sx={{borderBottom: '1px solid blue'}} display={'flex'} justifyContent={'space-between'}>
        <Typography sx={{color:'#22D3EE'}} fontSize='1.2em' fontWeight={700}>
            Byte Teach
        </Typography>
        <Box>
            <Link style={NaveBarStyle.link}>Home</Link>
            <Link style={NaveBarStyle.link}>About</Link>
            <Link style={NaveBarStyle.link}>Blogs</Link>
            <Link style={NaveBarStyle.link}>Contact</Link>
        </Box>
   </Box>
  )
}
