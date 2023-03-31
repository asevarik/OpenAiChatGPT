import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import {tableIcons} from "./TableIcons"
import { useState } from "react";

const BasicTable = ({tableTitle="some Title",tableData=[],updatedData}) => {
  const [data,setData ]=useState(tableData);
  
  const columns = [
    { title: "Name", field: "name",align:'center' },
    { title: "Surname", field: "surname",align:'center' },
  ];
  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme} >
  <MaterialTable icons={tableIcons} title={tableTitle} columns={columns} data={data} 
  options={{
    exportButton:true,
    actionsColumnIndex:-1,
    paging:false,
  }
  }
  editable={{
    onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
      const updatedRows = [...data,newRow]
     setData(updatedRows)
     updatedData(updatedRows)
     setTimeout(()=>resolve(),500)
    }),
    onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
      const updatedRows = [...data]
      updatedRows[oldRow.tableData.id] = newRow
      setData(updatedRows)
      updatedData(updatedRows)
      setTimeout(()=>resolve(),500)

    }),
    onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
      const updatedRows = [...data]
      updatedRows.splice(selectedRow.tableData.id,1)
      setData(updatedRows)
      updatedData(updatedRows)
      setTimeout(()=>resolve(),500)

    })
  }}
  />
  </ThemeProvider>
  );
};
export default BasicTable;