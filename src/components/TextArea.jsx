import React from 'react';
import TextareaAutosize, { TextareaAutosize as Textarea } from '@mui/material/TextareaAutosize';



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const CustomLabel = styled('label')({
 
  fontSize: '14px',
  color: '#000000',
  marginBottom: '5px',
});

const TextFieldContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '@media (max-width: 520px)': {
    width:"220px",
  
 
 
   },
  
}));

const CustomTextField = styled(TextareaAutosize)(() => ({
  flex: 1,
  width: '220px',
  fontWeight: '400',
  fontFamily: 'Roboto',
  fontSize: '14px',
  borderRadius: '5px',
  borderColor:"#D9DADB",
  padding: '12px', // Adjust padding to create space for the placeholder
  '::placeholder': {
    color: '#939699',
    fontFamily: 'Roboto',
    fontSize: '14px',
  },
}));


const Detail = ({ label, placeholder, value, onChange, onBlur,minRows  }) => {
  const handleTextFieldChange = (event) => {
    onChange({ target: { name: label.toLowerCase(), value: event.target.value } });
  };

  return (
    <CustomBox>
      <CustomLabel>{label}</CustomLabel>
      <TextFieldContainer   >
        <CustomTextField
          placeholder={placeholder}
         
          value={value}
          onChange={handleTextFieldChange}
          onBlur={onBlur}
         
          minRows={minRows}
         
         
        />
      </TextFieldContainer>
    </CustomBox>
  );
};

export default Detail;
