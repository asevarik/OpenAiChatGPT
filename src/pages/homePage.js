import { useRef } from "react";
import { CustomButton, CustomTextArea, TextInput } from "../components";
import { getQueryData } from "../services/apiService";

export default function HomePage(props){
const userStorytitleRef = useRef()
const userStoryRoleModelref = useRef()
const userStoryDescriptionRef = useRef()


function handleSubmit(){
  const res = validateFields(userStorytitleRef.current.value,userStoryRoleModelref.current.value,userStoryDescriptionRef.current.value);
    if(typeof(res)=== "boolean" && res === true){
        getQueryData(userStorytitleRef.current.value,userStoryRoleModelref.current.value,userStoryDescriptionRef.current.value)
    }else{
        alert(res);
    } 
}
    const validateFields = (title,prespective="",description="")=>{
            const regex = /^[a-zA-Z]+$/;
            let message = '';
            if (!regex.test(title)) {
              message += 'Title must contain only alphabets. ';
            }
            if (!regex.test(prespective)) {
                const res = prespective.split(",")
                .every(element=>{
                    console.log("element testing",element)
                    console.log("value of regex",regex.test(element))
                    return regex.test(element)
                })
                console.log(res);
                if (res===false){
                    console.log("res value",res)
                    message += "\n prespective must contain only alphabets"
                }
            }
            if(description.length){
                const res = description.split(",").every(element=>regex.test(element))
                if (!res){
                    message += "\n Description must contain only alphabets"
                }
            }
            if (message) {
              return message;
            } else {
              return true;
            }
          }
    return (
       <div className='main-container'>
    <h1>User Story Creator</h1>
    <TextInput placeHolderTitle="Write User Story Title here" refs = {userStorytitleRef}/>
    <TextInput placeHolderTitle='Write Role Model here' refs = {userStoryRoleModelref}/>  
    <CustomTextArea placeholderTitle='Write Additional Description Here' refs={userStoryDescriptionRef}/>
    <CustomButton title={"get User Stories"} onCustClick={handleSubmit}/> 
    </div>
    )
}