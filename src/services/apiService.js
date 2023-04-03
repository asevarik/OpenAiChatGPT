import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const baseAPI = "https://api.openai.com/v1/completions"
const apiKey = "Bearer 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"
export async function getQueryData(title,role){
 const response = await axios.post(baseAPI,{
    prompt : getPrompt(title,role),
    model:"text-davinci-003",
    max_tokens:2048,
    n:1,
    stop:"&",

 },{headers:{
    "Content-Type":"application/json",
    Authorization: apiKey
 }})
   const structedResponse = generateResponse(title,role,response.data.choices[0].text)
   return structedResponse
}

function generateResponse(title,role,response=""){
   // const arrayOfUserStories = response.split("\n").filter(userStory=>userStory.length>15).map((userStory)=>userStory.replace(/^[^a-z A-Z]+/,""))
   const arrayOfUserStories = response.split("\n").filter(userStory=>userStory.length>15).map(userStory=>{return {userstory:userStory}})
   return {
      userStoryTitle:title,
      userStoryFor:role,
      userStories:arrayOfUserStories,
      id:uuidv4()
   }
}

function getPrompt(title,role) {
       return `User stories for ${title} from the perspection of ${role} give everything in numbered bullet points`;
  }