import { useEffect, useState } from 'react';
import { CardWithTable } from '../components';
import { getUserStories, updateUserStories } from '../utils/DBManager';
import "./UserStoryPageStyles.css";
function UserStories() {
const updatedRows = async (updatedData)=>{
  const savetoDB = updateUserStories(updatedData)
  if(savetoDB){
    console.log("successfully Saved to DB")
  }else{
    console.log("problem Saving to DB");
  }
}
const [userStories,setUserStories] = useState([]);
useEffect(()=>{
 const getuserStories = getUserStories()
 setUserStories(getuserStories)
},[])

return (
   <div className="user-style-main-container">
    <h1 className="user-header-title">User History</h1>
   {userStories.map(userStory=>{
   return  <CardWithTable cardId={userStory.id} accordianTitle={userStory.userStoryTitle}  tableData={userStory.userStories} tableTitle={userStory.userStoryFor} updatedData={updatedRows}/>
   })}    
   </div>
  );
}

export default UserStories;

