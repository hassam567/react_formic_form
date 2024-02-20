import React, { useState } from 'react';
import { Box, Typography, styled, ThemeProvider, createTheme, IconButton, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TextArea from './components/SelectMenu';
import { ValidationSchema } from './validations';
import { useFormik } from 'formik';
import ResponsiveDatePickers from './components/DatePicker';
import ResponsiveTimePickers from './components/TimePicker';
import Detail from './components/TextArea';
import CustomCheckbox from './components/CheckBox';

const StyledBox = styled(Box)({
  border: '1px solid transparent', // Set border color to transparent
  borderColor: 'currentColor', // Use currentColor to inherit the color of the text
  width: 500,
  display: 'flex',
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  marginTop: "30px",
  marginBottom: "30px",
  height:870,

  '@media (max-width: 509px)': {
    margin: '20px auto',
    height:1400,
  },
 
});


const SecondStyledBox = styled(Box)({
  backgroundColor: "#55C6EC",
  width: "100%",
  height: 70,
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    backgroundColor: "#55C6EC",
    height: "120px"
  }
});



const StyledBox2 = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  marginTop: "20px",
  '@media (max-width: 520px)': {
    display: "flex",
    flexDirection: "column"
  }
});

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
});
const CheckboxContainer = styled(Box)({

  marginLeft: '-12px', // Adjust the margin-left as needed
 
});
const CloseButton = styled(IconButton)({
  width: "18px",
  height: "18px",
  backgroundColor: 'white',
  borderRadius: '50%',
  marginLeft: "40px",
  marginRight: "30px",
  '@media (max-width: 650px)': {
    marginRight: "20px"
  },
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:hover .MuiSvgIcon-root': {
    color: '#55C6EC',
  }
});


function DynamicBox() {
  const [showForm, setShowForm] = useState(true);
  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  const handleFormSubmit = (values, { resetForm }) => {
    const isEmpty = Object.values(values).some(value => !value);
    
    if (isEmpty) {
      alert("Please fill in all fields before saving.");
    } else {
      resetForm();
      
      console.log(values);
      
    }
    
  };
  
  

  const locations = ['Lahore', 'Multan', 'Islamabad'];
  const reasons = ['WorkLoad', 'Fever', 'Programs'];
  const roles = ['DealerShip Representatives', 'Manager', 'Cricket'];
  const users = ['Zain', 'Waseem Ullah', 'Gulshair'];
  const locationPlaceHolder = "Select Location";
  const reasonPlaceHolder = "Select Reasons";
  const userPlaceHolder = "Waseem Ullah";
  const rolePlaceHolder = "Dealership Representatives";

  const { values, handleChange, handleBlur, handleSubmit, touched, errors, resetForm } = useFormik({
    initialValues: {
      role: '',
      user: '',
      location: '',
      reason: '',
      date: '',
      time: '',
      description: '',
      comment: '',
      checkbox1: false,
      checkbox2: false
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, actions) => handleFormSubmit(values, actions)
  });

  return (
    <ThemeProvider theme={theme}>
      {showForm && (
        <StyledBox >
          <SecondStyledBox>
            <Typography align="center" color={'white'}  textTransform={"uppercase"} marginLeft={"20px"}>
              Appointment for 2023 Heartland Prowler (#523330A)
            </Typography>
            <CloseButton onClick={toggleForm}>
              <ClearIcon sx={{ width: "15px", height: "15px", strokeWidth: "2", stroke: "#55C6EC" }} />
            </CloseButton>
          </SecondStyledBox>
          <form onSubmit={handleSubmit}>
            <StyledBox2>
              <Box>
                <TextArea
                  label="Location"
                  options={locations}
                  placeHolder={locationPlaceHolder}
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.location && touched.location ? (
                  <Typography color="error">{errors.location}</Typography>
                ) : null}
              </Box>

              <Box>
                <TextArea
                  label="Reason"
                  options={reasons}
                  placeHolder={reasonPlaceHolder}
                  value={values.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.reason && touched.reason ? (
                  <Typography color="error">{errors.reason}</Typography>
                ) : null}
              </Box>
            </StyledBox2>
            <StyledBox2>
              <Box>
                <ResponsiveDatePickers
                  label="Date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.date}
                  touched={touched.date}
                />
                {errors.date && touched.date ? (
                  <Typography color="error">{errors.date}</Typography>
                ) : null}
              </Box>
              <Box>
                <ResponsiveTimePickers
                  label="Time"
                  value={values.time}
                  onChange={handleChange}
                  error={errors.time}
                  touched={touched.time}
                />
                {errors.time && touched.time ? (
                  <Typography color="error">{errors.time}</Typography>
                ) : null}
              </Box>
            </StyledBox2>

           <StyledBox2>
              <Box>
                <TextArea
                  label="Assign to Role"
                  options={roles}
                  placeHolder={rolePlaceHolder}
                  value={values.role}
                  onChange={event => handleChange('role')(event.target.value)}
                  onBlur={handleBlur}
                />
                {errors.role && touched.role ? (
                  <Typography color="error">{errors.role}</Typography>
                ) : null}
              </Box>
              
          
              <Box>
                <TextArea
                  label="Assign to User"
                  options={users}
                  placeHolder={userPlaceHolder}
                  value={values.user}
                  onChange={event => handleChange('user')(event.target.value)}
                  onBlur={handleBlur}
                />
                {errors.user && touched.user ? (
                  <Typography color="error">{errors.user}</Typography>
                ) : null}
              </Box>
              </StyledBox2>
            
            <Box marginTop={"20px"}>
              <Detail
                label="Description"
               
                placeholder="Description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                minRows={2}
              />
              {errors.description && touched.description ? (
                <Typography color="error">{errors.description}</Typography>
              ) : null}
            </Box>
            <Box marginTop={"20px"}>
              <Detail
                label="Comments"
               
                value={values.comment}
                onChange={event => handleChange('comment')(event.target.value)}
                onBlur={handleBlur}
                minRows={5}
              />
              {errors.comment && touched.comment ? (
                <Typography color="error">{errors.comment}</Typography>
              ) : null}
            </Box>
          
          
          <Box>
  <CheckboxContainer>
    <CustomCheckbox
      label="Notify Dealership"
      value={values.checkbox1}
      onChange={(checked) => handleChange('checkbox1')(checked)}
      onBlur={handleBlur('checkbox1')}
      id="checkbox1"
    />
    </CheckboxContainer>
    {errors.checkbox1 && touched.checkbox1 ? (
      <Typography color="error">{errors.checkbox1}</Typography>
    ) : null}
  
</Box>

  <CheckboxContainer>
    <CustomCheckbox
      label="Notify Customer"
      value={values.checkbox2}
      onChange={(checked) => handleChange('checkbox2')(checked)}
      onBlur={handleBlur('checkbox2')}
      id="checkbox2"
    />
     </CheckboxContainer>
    {errors.checkbox2 && touched.checkbox2 ? (
      <Typography color="error">{errors.checkbox2}</Typography>
    ) : null}
 

            <Box sx={{ marginTop: "20px" }}>
              <Button variant="contained"  type="submit" sx={{backgroundColor:"#55C6EC", borderRadius:"8px", width:"108px", height:"40px"}}>
                Save
              </Button>
            </Box>
          </form>
        </StyledBox>
      )}
    </ThemeProvider>
  );
}

export default DynamicBox;
