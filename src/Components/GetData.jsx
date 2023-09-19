import React from 'react';
import { useState } from 'react';
import {Box, Typography, Button, TextField, Grid, 
    Stack, Select, MenuItem,FormHelperText} from '@mui/material'

import axios from 'axios';
import LoadModal from './LoadModal';

function GetData() {
    const [val, setVal] = useState("")
    const [size, setSize] = useState("small")
    const [imgUrl, setImgUrl] = useState("")
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const BASE_URL = "https://image-generator-openai.onrender.com"
    const genImage = async(prompt, size) => {
        try{
            console.log("Generating image");
            const response= await axios.post(`${BASE_URL}/openai/generateimage`,{prompt: prompt, size: size})
            if(response.status === 200){
               handleClose();
               setImgUrl(response.data.data[0].url)
                //console.log(response, imgUrl);
            }
        }
        catch(error){
            setImgUrl("")
            handleClose()
            window.alert(error.response.data?.message)
            console.log(error);
        }

    }
    function handleSubmit(e){
      e.preventDefault();
      setImgUrl("")
      setOpen(true)
      genImage(val,size);
    }
  return (
    <>
    <LoadModal open={open} handleClose={handleClose}/>
    <Grid container my={3} columnSpacing={1} rowSpacing={2}
    sx={{justifyContent : 'center', alignItems: 'center',
     borderRadius: '15px'}}>
    <Grid item xs={11} sm={10} md={8} lg={6}>
    <Box bgcolor={'#eeeeee'} p={4}>
    <form onSubmit={handleSubmit}>
    <Stack direction='column'  gap={2}>
     <Typography variant='h6'>Enter an image description</Typography> 
         <TextField 
          variant='outlined'
          value={val}
          fullWidth
          label= 'be creative'
          type='text'
          onChange={(e) => setVal(e.target.value)}
          required
          error = {!val}
          helperText= { !val ? 'Write something': "Ex: pigs flying over rainbow"}
          >
          </TextField>
          <Typography variant='body1'>Select image size</Typography> 
           <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Image Size"
          onChange={(e)=> setSize(e.target.value)} 
          autoWidth
        >
          <MenuItem value='small'>Small</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
          <MenuItem value='large'>Large</MenuItem>
        </Select>
        <FormHelperText>sizes: 256px / 512px / 1024px</FormHelperText>
          <Button variant='contained'
           type='submit'
           size='medium'
           color="warning"
           sx={{maxWidth: '200px', alignSelf : 'center'}}>
            Generate Image
           </Button>
        </Stack> 
        </form>
    </Box>
    </Grid>
    
    </Grid>  
    <Grid container my={3} columnSpacing={1} rowSpacing={2}
    sx={{justifyContent : 'center', alignItems: 'center'}}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
         { imgUrl &&
           <Box sx={{overflowX: 'auto'}}>
           <img src={imgUrl} alt={val}></img>
           </Box>
         }
    </Grid>  
    </Grid>
    </>
  )
}

export default GetData