import { getQueryData } from "../services/apiService"
import { saveUserStories } from "../utils/DBManager";
import { useNavigate } from "react-router-dom";
import ProductImage from "../assets/images/landingPage.png"
import { CustomForm } from "../components";
import "./HomePageStyles.css";
import { useState } from "react";
export default function HomePage(props) {
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false);
    async function handleSubmit(userStoryTitle, role) {
        const validatedFields = validator(userStoryTitle)
        if(validatedFields === true){
            setisLoading(true)
            const response = await getQueryData(userStoryTitle, role)
            const savetoDB = await saveUserStories(response)
            if (savetoDB) {
                navigate("/userstories")
                setisLoading(false)
            }
        }else{
            alert(validatedFields)
        }
       
    }
    const validator = (userStoryTitle) => {
        const regex = /^[a-zA-Z| ]+$/;
        if (!regex.test(userStoryTitle)) {
            return "Error: Input must contain only alphabets";
        }
        return true;
    }
    return (
        <div className='main-container'>
            <CustomForm onFormSubmit={handleSubmit} isLoading={isLoading} />
            <div className="img-container" >
                <img src={ProductImage} />
            </div>
        </div>
    )
}