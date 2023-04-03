import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomTableView } from '..';
import { updateUserStories } from '../../utils/DBManager';

export default function SimpleAccordion({cardId="",accordianTitle="Some Great Title",tableData=[],updatedData,tableTitle="Some Great Table Title"}) {
  const updateTableData=(updatedData)=>{
    const saveToDB = updateUserStories(updatedData,cardId);
    if(saveToDB){
      console.log("save success");
    }else{
      console.log("error saving the data")
    }
  }
  return (
    <>
      <Accordion sx={{
        width:"50rem"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            bgcolor:"rgb(37, 183, 202)",
            color:"white",
          }}
        >
        <Typography sx={{
          textTransform:"capitalize",
        }}>{accordianTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CustomTableView tableTitle={tableTitle.toUpperCase()} tableData={tableData} updatedData={updateTableData}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </>
  );
}