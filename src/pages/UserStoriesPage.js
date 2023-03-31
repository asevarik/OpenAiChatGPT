import { useRef } from 'react';
import { CardWithTable } from '../components';


function UserStories() {
const data = [ { name: "Mohammad", surname: "Faisal" },
{ name: "Nayeem Raihan ", surname: "Shuvo"},
{ name: "Udesh", surname: "Shuvo"},
{ name: "Jhon ", surname: "Wick"},
{ name: "Superman  ", surname: "Returns"},
]
const updatedRows = (updatedData)=>{
  console.log(updatedData)
}
//TODO useEffect to call retrive the data from the chatGPT api
  
return (
   <>    
   <CardWithTable tableData={data} updatedData={updatedRows}/>
    </>

  );
}

export default UserStories;

