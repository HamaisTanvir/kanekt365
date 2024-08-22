import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function AccordionUsage() {
    const [expanded, setExpanded] = useState('panel1');

    // Function to handle accordion expansion
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: expanded === 'panel1' ? '#f6f6f6' : '', 
            color: expanded === 'panel1' ? '#000' : '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px',  fontWeight: '700',
            '&:focus': {
              backgroundColor: expanded === 'panel1' ? '#f6f6f6' : '', 
              color: expanded === 'panel1' ? '#000' : '#282d47',
              fontWeight: '700',
            },
          }}
        >
          WHO WE ARE
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
        As a premier <span style={{color: '#F8931F'}}>QSR call center</span> situated in Laconia, NH, our expertise lies in providing top-notch order-taking
        services tailored for the pizza industry.<span><a href="https://kanekt365.com/who-we-are" 
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </AccordionDetails>
      </Accordion>
      <Accordion
       expanded={expanded === 'panel2'}
       onChange={handleChange('panel2')}
       >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: expanded === 'panel2' ? '#f6f6f6' : '',
            color: expanded === 'panel2' ? '#000' : '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px',  fontWeight: '700',
            '&:focus': {
              backgroundColor: expanded === 'panel2' ? '#f6f6f6' : '', 
              color: expanded === 'panel2' ? '#000' : '#282d47',
              fontWeight: '700',
            },
          }}
        >
          CUSTOMER SERVICES
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
        <span style={{color: '#F8931F'}}>We do not keep your customers waiting!</span> We have a team of dependable and friendly call center agents 
        representing your restaurant in every call they answer.<span><a href="https://kanekt365.com/customer-services/"
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </AccordionDetails>
      </Accordion>
      <Accordion
      expanded={expanded === 'panel3'}
      onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: expanded === 'panel3' ? '#f6f6f6' : '', 
            color: expanded === 'panel3' ? '#000' : '#282d47',
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px',  fontWeight: '700',
            '&:focus': {
              backgroundColor: expanded === 'panel3' ? '#f6f6f6' : '', 
              color: expanded === 'panel3' ? '#000' : '#282d47',
              fontWeight: '700',
            },
          }}
        >
          TOP QUALITY PIZZA
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
        <span style={{color: '#F8931F'}}>We do not compromise on quality whatsoever!</span> <br />
        You can focus on growing your business while we take care of all your meal ordering.<span><a href="https://kanekt365.com/top-quality-pizza/"
        className='font-bold' style={{color: '#222D35'}}> read more...</a></span>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
