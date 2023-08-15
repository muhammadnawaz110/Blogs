import { Box, Grid, Container, Typography, Button } from '@mui/material'
import React from 'react'
import LatestPostCard from './LatestPostCard'

function LatestPost() {
  return (
    <Box marginTop={'5rem 0'}>
        <Box textAlign={'start'} margin={'1rem 0'}>

        <Typography fontSize={'2rem'} color={'#fff'}>
            Latest Post
        </Typography>
        <Typography fontSize={'1rem'} color={'#fff'}>
            There are our latest Post
        </Typography>
        </Box>
      <Box>
            <Grid container sx={{background: 'rgba(255, 255, 255, 0.3)', borderRadius: "10px"}}>
                <Grid item md={6}>
                    <img width={'100%'} style={{ borderRadius: "10px 0 0 10px"}} src='https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg' />
                </Grid>
                <Grid item md={6}>
                    <Typography fontSize={'2rem'} color={'#fff'}>
                        Blog Name
                    </Typography>
                    <Typography fontSize={'1.2rem'} color={'#fff'}>
                        Blog Content
                    </Typography>
                    <Typography fontSize={'1rem'} color={'#fff'}>
                        Date
                    </Typography>
                    <Button variant='contained'>
                        Read More
                    </Button>
                </Grid>
            </Grid>
      </Box>
      <Box>
        <LatestPostCard/>
        <Box>
            <Button variant='outlined'>
                Load More
            </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LatestPost
