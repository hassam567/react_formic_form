import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const CustomLabel = styled('label')({
  fontSize: '14px',
  color: '#000000',
  marginBottom: '5px',
});

const TextFieldContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',

  width: '220px',
});

const CustomSelect = styled(Select)({
  flex: 1,
  color: '#939699',
  fontSize: '14px',
  borderRadius: '5px',
  height: '31px',
  color: '#939699',
  position: "relative",

  '& fieldset': {
    borderColor: '#D9DADB',
  },






});

const TextArea = ({ label, options, placeHolder, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionSelect = (event) => {
    onChange({ target: { name: label.toLowerCase(), value: event.target.value } });
    handleClose();
  };


  return (
    <CustomBox>
      <CustomLabel>{label}</CustomLabel>
      <TextFieldContainer>

        <CustomSelect
          open={open}
          onClose={handleClose}
          placeholder={placeHolder}
          displayEmpty={true}
          onOpen={handleOpen}
          value={value}
          onChange={handleOptionSelect}
          // IconComponent={ArrowIcon}
          sx={{ color: '#939699' }}
        >
          <MenuItem value="" disabled>
            {placeHolder}
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </CustomSelect>
      </TextFieldContainer>
    </CustomBox>
  );
};

export default TextArea;
