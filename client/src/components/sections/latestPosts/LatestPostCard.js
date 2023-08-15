import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function LatestPostCard() {
  return (
    <Box margin={'2rem 0'}>
      <Grid container>
          <Grid item md={3} boxShadow={5} padding={1}>
              <img width={"100%"} src='https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg'/>
              <Typography fontSize={'1.5rem'} color={'#fff'}>
                Blog Title
              </Typography>
              <Typography  fontSize={'1rem'} color={'#fff'}>
                Blog Content
              </Typography>
              <Box display={'flex'} justifyContent={'space-evenly'}>
                <Typography  fontSize={'0.7rem'} color={'#fff'}>
                  Date
                </Typography>
                <Typography  fontSize={'0.7rem'} color={'#fff'}>
                  Name
                </Typography>
              </Box>
          </Grid>
      </Grid>
    </Box>
  )
}

export default LatestPostCard
