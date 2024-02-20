import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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



// Create a new styled component by extending DesktopDatePicker
const CustomDesktopDatePicker = styled(DesktopDatePicker)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        height: '35px',
        width: '220px',
        color: '#939699',
      
      

        fontSize: '14px',


    },

    '& fieldset': {
        borderColor:"#D9DADB",
    },
});

const ResponsiveDatePickers = ({ label, value, onChange, onBlur }) => {
    const defaultDate = dayjs('2023-05-23');
    return (
        <CustomBox>
            <CustomLabel>{label}</CustomLabel>
            <TextFieldContainer>
                <CustomDesktopDatePicker
                    value={value || defaultDate} // Set the default value using value prop
                    onChange={(date) => onChange({ target: { name: label.toLowerCase(), value: date } })}
                    adapter={AdapterDayjs}
                    openPickerIcon={<ArrowDropDownIcon />}
                    onBlur={onBlur}
                />
            </TextFieldContainer>
        </CustomBox>
    );
};


export default ResponsiveDatePickers;
