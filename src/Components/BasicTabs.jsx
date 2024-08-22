import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx= {{ pt: 2, pr: 8,  textAlign:'start', fontSize: '14px'}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: isMobile ? 'block' : 'flex'}}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        variant={isMobile ? 'scrollable' : 'standard'}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        sx={{
          minWidth: isMobile ? '100%' : 'auto',
          [`& .MuiTabs-flexContainer`]: {
            flexDirection: isMobile ? 'column' : 'row',
          },
        }}>
          <Tab label="WHO WE ARE" {...a11yProps(0)}  
          sx={{ backgroundColor: value === 0 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px',  
            '&.Mui-selected': {
                color: '#282d47', // Ensure color remains orange when selected
             },
            '&:focus': {
              backgroundColor: value === 0 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47'
            },
          }} 
          />
          <Tab label="CUSTOMER SERVICES" {...a11yProps(1)} 
          sx={{ backgroundColor: value === 1 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px',
            '&:focus': {
              backgroundColor: value === 1 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47'
            },
          }} 
          />
          <Tab label="TOP QUALITY PIZZA" {...a11yProps(2)} 
          sx={{ backgroundColor: value === 2 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px',
            '&:focus': {
              backgroundColor: value === 2 ? '#f6f6f6' : '', fontWeight: 'bold', color: '#282d47'
            },
          }} 
          />
        </Tabs>
      </Box>
        <CustomTabPanel value={value} index={0}>
        As a premier <span style={{color: '#F8931F'}}>QSR call center</span> situated in Laconia, NH, our expertise lies in providing top-notch order-taking
        services tailored for the pizza industry.<span><a href="https://kanekt365.com/who-we-are" 
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <span style={{color: '#F8931F'}}>We do not keep your customers waiting!</span> We have a team of dependable and friendly call center agents 
        representing your restaurant in every call they answer.<span><a href="https://kanekt365.com/customer-services/"
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <span style={{color: '#F8931F'}}>We do not compromise on quality whatsoever!</span> <br />
        You can focus on growing your business while we take care of all your meal ordering.<span><a href="https://kanekt365.com/top-quality-pizza/"
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </CustomTabPanel>
    </Box>
  );
}

export default BasicTabs