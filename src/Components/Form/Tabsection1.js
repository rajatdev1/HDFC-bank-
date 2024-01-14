import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


const Tabsection1 = ({ onNext }) => {

    const [merchantExpanded, setMerchantExpanded] = useState(true); // State for Merchant Organization Information
    const [qsaExpanded, setQsaExpanded] = useState(false); // State for Qualified Security Assessor Information
    const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and processing here

    // Call the onNext function passed from Mainform to move to the next tab
    onNext('tab2');
  };
  
    const handleMerchantAccordionToggle = () => {
      setMerchantExpanded(!merchantExpanded);
    };
  
    const handleQsaAccordionToggle = () => {
      setQsaExpanded(!qsaExpanded);
    };
  
    const accordionStyle = {
        width: '100%', // Ensure full width
        marginTop: '15px', 
       
      };

      const handleCountryChange = (event) => {
        setCountry(event.target.value);
        // Reset state when country changes
        setState('');
      };
    
      const handleStateChange = (event) => {
        setState(event.target.value);
      };
        // Sample list of states for India (add more as needed)
  const indianStates = [
    'Bihar',
    'Uttar Pradesh',
    'Andhra Pradesh',
    'Maharashtra',
    'Karnataka',
    // ... other states
  ];

    
  return (

    <>


    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      '& > :not(style)': { m: 1 },
      
    }}
  >
    <Accordion expanded={merchantExpanded} onChange={handleMerchantAccordionToggle} sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="merchant-panel-content"
            id="merchant-panel-header"
          >

        <Typography
          variant="h5" // Adjust the variant as needed
          component="h1" // The semantic element to be used
          gutterBottom // Adds a bottom margin to the Typography
          sx={{
            color: 'text.secondary', // Attractive light black color
            my: 2, // Margin top and bottom, adjust as needed
          }}
        >
          Merchant Organization Information

        </Typography>
        </AccordionSummary>
        <AccordionDetails>

        

     
   <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="company-name"
            label="Company Name"
            helperText=" " // Blank helper text to align fields
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="dba"
            label="DBA (doing business as)"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="contact-name"
            label="Contact Name"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="telephone"
            label="Telephone"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="email"
            label="E-mail"
            helperText=" "
          />
        </Grid>

        <Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="country"
         label="Country"
         helperText=" "
         value={country}
         onChange={handleCountryChange}
       />
</Grid>


<Grid item xs={12} md={4}>
<FormControl fullWidth>
            <InputLabel id="state-province-label">State/Province</InputLabel>
            <Select
              labelId="state-province-label"
              id="state-province"
              value={state}
              label="State/Province"
              onChange={handleStateChange}
              disabled={country !== 'India'} // Disable if country is not India
            >
              {indianStates.map((indianState, index) => (
                <MenuItem key={index} value={indianState}>
                  {indianState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="city"
        label="City"
        helperText=" "
        
/>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="Zipcode"
        label="Zipcode"
        helperText=" "
/>
</Grid>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="business-address"
            label="Business Address"
            helperText=" "
          />
        </Grid>


  
<Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="url"
         label="URL"
         helperText=" "
       />
</Grid>
</Grid>

</AccordionDetails>
      </Accordion>
</Box>






<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      '& > :not(style)': { m: 1 },
      
    }}
  >

<Accordion expanded={qsaExpanded} onChange={handleQsaAccordionToggle} sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="qsa-panel-content"
            id="qsa-panel-header"
          >

        <Typography
          variant="h5" // Adjust the variant as needed
          component="h1" // The semantic element to be used
          gutterBottom // Adds a bottom margin to the Typography
          sx={{
            color: 'text.secondary', // Attractive light black color
            my: 2, // Margin top and bottom, adjust as needed
          }}
        >
          Qualified Security Assessor Company Information (if applicable)


        </Typography>
        </AccordionSummary>
        <AccordionDetails>

        

     
   <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="company-name"
            label="Company Name"
            helperText=" " // Blank helper text to align fields
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="QSA"
            label="Lead QSA Contact Name:"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="contact-name"
            label="Contact Name"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="telephone"
            label="Telephone"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="email"
            label="E-mail"
            helperText=" "
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <TextField
            fullWidth
            id="country"
            label="Country"
            value={country}
            onChange={handleCountryChange}
            helperText=" "
          />
</Grid>


<Grid item xs={12} md={4}>
<FormControl fullWidth>
            <InputLabel id="state-province-label">State/Province</InputLabel>
            <Select
              labelId="state-province-label"
              id="state-province"
              value={state}
              label="State/Province"
              onChange={handleStateChange}
              disabled={country !== 'India'} // Disable if country is not India
            >
              {indianStates.map((indianState, index) => (
                <MenuItem key={index} value={indianState}>
                  {indianState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="city"
        label="City"
        helperText=" "
/>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="Zipcode"
        label="Zipcode"
        helperText=" "
/>
</Grid>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="business-address"
            label="Business Address"
            helperText=" "
          />
        </Grid>


  
<Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="url"
         label="URL"
         helperText=" "
       />
</Grid>
</Grid>
</AccordionDetails>
      </Accordion>



      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          style={{ width: '150px', height: '40px' }} // Fixed width and height
        >
          Save and Next
        </Button>
      </Box>
</Box>



</>
);
};



export default Tabsection1;