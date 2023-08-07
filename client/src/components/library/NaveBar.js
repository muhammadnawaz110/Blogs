import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NaveBar() {
  return (
   <Box p={3} sx={{borderBottom: '1px solid blue'}} display={'flex'} justifyContent={'space-between'}>
        <Typography fontSize='1.2em' fontWeight={700}>
            Byte Teach
        </Typography>
        <Box>
            link
        </Box>
   </Box>
  )
}
