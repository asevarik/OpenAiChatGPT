//TODO CRUD Operations Goes here
const USER_STORY_KEY = "userStories"

export const saveUserStories = (userStories="")=>{
    if(!userStories.length){
        console.log("data is not Recieved");
        return false
    }
    const data = JSON.stringify(userStories)
    if(data){
        localStorage.setItem(USER_STORY_KEY,data);
        return true
    }
    console.log("stringify error");
    return false
}

export const getUserStories = ()=>{
    const res = localStorage.getItem(USER_STORY_KEY)
    if(!res){
        console.log("error retriving response")
        return [];
    }
  const response = JSON.parse(res)
  if(response){
    return response;
  }
  console.log("error in parsing the response")
  return [];
}