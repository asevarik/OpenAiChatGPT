import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomTableView } from '..';

export default function SimpleAccordion({accordianTitle="Some Great Title",tableData=[],updatedData}) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>{accordianTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CustomTableView tableTitle='greate Title' tableData={tableData} updatedData={updatedData}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </>
  );
}