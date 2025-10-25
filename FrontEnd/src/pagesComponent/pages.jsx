import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUp";
import MainCoursePage from "../CourseComponents/CourseMain";
import FacePanel from "../CourseComponents/Courses/Face/FacePanel";
import BodyPanel from "../CourseComponents/Courses/Body/BodyPanel";
import FashionPanel from "../CourseComponents/Courses/Fashion/FashionPanel";
import MentalityPanel from "../CourseComponents/Courses/Mentality/MentalityPanel";

function Pages(){
    const location = useLocation();

    useEffect(() => {
        console.log("Current route:", location.pathname);
    }, [location]);

    return(
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Course" element={<MainCoursePage />} />
        <Route path="/Course/Face" element={<FacePanel />} />
        <Route path="/Course/Body" element={<BodyPanel />} />
        <Route path="/Course/Fashion" element={<FashionPanel />} />
        <Route path="/Course/Mind" element={<MentalityPanel />} />
      </Routes>
    );
}

export default Pages
