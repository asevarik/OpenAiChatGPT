import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UserStories from "./pages/UserStoriesPage";

export default function PageRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="userstories" element={<UserStories/>}/>
        </Routes>
        </BrowserRouter>
    )
}