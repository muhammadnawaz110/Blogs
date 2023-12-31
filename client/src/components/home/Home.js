import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../sections/hero/HeroSection'
import LatestPost from '../sections/latestPosts/LatestPost'
import SubcriptionSection from '../sections/subscriptionSection/SubcriptionSection'

function Home() {
  return (
    <Box>
      <HeroSection />
      <LatestPost />
      <SubcriptionSection />
    </Box>
  )
}

export default Home
