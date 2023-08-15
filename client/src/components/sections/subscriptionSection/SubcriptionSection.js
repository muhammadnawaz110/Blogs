import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, FormControl, Grid, Button, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

function SubcriptionSection() {
  return (
    <Box margin={'2rem 0'}>
      <Grid container>
          <Grid item md={7}>
              <Typography textAlign={'start'} fontSize={'2rem'} color={'#fff'}>
                Subscibe to my Newlatters
              </Typography>
              <Typography textAlign={'start'} color={'#fff'} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.
              </Typography>
          </Grid>
          <Grid item md={5}>
          <FormControl sx={{ m: 1}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={'email'}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  aria-label="toggle password visibility"
                 variant='outlined'
                  edge="end"
                >
                 subscibe
                </Button>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </Grid>
      </Grid>
    </Box>
  )
}

export default SubcriptionSection
