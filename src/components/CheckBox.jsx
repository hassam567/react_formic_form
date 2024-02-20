import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CustomCheckbox = ({ id, label, value, onChange, onBlur }) => {
   
      
  return (
    <Box display="flex" alignItems="center">
      <Checkbox
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        color="primary"
        value={id}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography sx={{  fontSize: 14, color:"#939699" }}>{label}</Typography>
    </Box>
  );
};

export default CustomCheckbox;
