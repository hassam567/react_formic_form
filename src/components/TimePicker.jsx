import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// Styled components
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
    position: 'relative',
});

// Create a new styled component by extending DesktopTimePicker
const CustomDesktopTimePicker = styled(DesktopTimePicker)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        height: '35px',
        width: '220px',
        color: '#939699',
       
        fontSize: '14px',
    },

    '& fieldset': {
        borderColor: '#D9DADB' // Border color
    },
});
const defaultTime = new Date();
defaultTime.setHours(12); // Set hours to 12
defaultTime.setMinutes(30); // Set minutes to 30
const ResponsiveTimePickers = ({ label, value, onChange, onBlur }) => {
    // Ensure value is a valid Date object, or use defaultTime
    const timeValue = value instanceof Date ? value : defaultTime;
    
    return (
        <CustomBox>
            <CustomLabel>{label}</CustomLabel>
            <TextFieldContainer>
                <CustomDesktopTimePicker
                    value={dayjs(timeValue)}
                    onChange={(time) => onChange({ target: { name: label.toLowerCase(), value: time } })}
                    adapter={AdapterDayjs}
                    openPickerIcon={<AccessTimeIcon />}
                    onBlur={onBlur}
                />
            </TextFieldContainer>
        </CustomBox>
    );
};



export default ResponsiveTimePickers;
