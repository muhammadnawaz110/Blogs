import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { heroSectionStyle } from './heroSectionStyle'
import Man from '../../../statics/image/Man.png'


function HeroSection() {
  return (
    <Box>
        <Grid container marginTop={'5rem'}>
            <Grid item md={8} xs={12} textAlign={'start'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Typography margin={'1rem 0'} fontSize={'2rem' } color={'#fff'} fontWeight={700}>
                        H! There I am Nawaz
                    </Typography>
                    <Typography margin={'1rem 0'} fontSize={'1rem' } color={'#fff'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.d
                    </Typography>
                    <Box>
                        <i style={heroSectionStyle.twitterIcon} className='fa-brands fa-twitter'></i>
                        <i style={heroSectionStyle.facebookIcon} className="fa-brands fa-facebook"></i>
                        <i style={heroSectionStyle.linkedinIcon} className="fa-brands fa-linkedin"></i>
                        <i style={heroSectionStyle.youtubeIcon} className="fa-brands fa-youtube"></i>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={4} xs={12} >
                <img width={'60%'} src={Man} />
            </Grid>
        </Grid>
    </Box>
  )
}

export default HeroSection
