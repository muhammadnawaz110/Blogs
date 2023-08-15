import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div>
        <Divider sx={{backgroundColor: '#fff'}}/>
           <Container >
           <Box fontSize={'1.5rem'} padding={'1rem 0'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'#fff'}>
                <Typography>
                    &copy; Copyright 2023 By Nawaz Ambrose
                </Typography>
            
            <Box>
                <GitHubIcon sx={{margin: '5px', fontSize: '1.5rem' }}/>
                <LinkedInIcon  sx={{margin: '5px', fontSize: '1.5rem'}}/>
                <FacebookIcon  sx={{margin: '5px', fontSize: '1.5rem'}}/>
                <TwitterIcon  sx={{margin: '5px', fontSize: '1.5rem'}}/>
            </Box>
            </Box>
           </Container>
    </div>
  )
}

export default Footer
