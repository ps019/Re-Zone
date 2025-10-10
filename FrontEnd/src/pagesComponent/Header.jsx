
import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainCoursePage from '../CourseComponents/CourseMain';

function Header(){

    const addpersonIcon = "/add-user.png"
    const HomeIcon = "/home.png"
    const SettingIcon = "/settings.png"
    const ProfileIcon = 'account.png'

    const [IsAuthorized, setIsAuthorized] = useState(false);

    return(
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 bg-gray-800">

            <div className="flex items-center space-x-4">
                <img src="/re-zone-logo.png" alt="Re-Zone Logo" className="h-20"/>
                <h1 className="text-3xl font-bold text-white">Re-Zone</h1>
            </div>

            <nav className="flex items-center space-x-4">
                
                <NavLink to='/' className="text-white hover:text-gray-300"><img className="w-6 h-6" src={HomeIcon} alt=""/>Home</NavLink>

                <NavLink to="/Course" className="text-white hover:text-gray-300">Courses</NavLink>

                {!IsAuthorized 
                ? (
                    <NavLink to="SignUp" className="text-white hover:text-gray-300"><img src={addpersonIcon} alt="" />Sign Up</NavLink>
                    ) 
                : (
                    <NavLink to="/Profile" className="text-white hover:text-gray-300"><img src={ProfileIcon} alt="" />Profile</NavLink>
                )}
                <NavLink to="/Setting" className="text-white hover:text-gray-300"><img className="w-6 h-6" src={SettingIcon} alt="" /></NavLink>

            </nav>

            <Routes>
                <Route path="/Course" element={<MainCoursePage />} />
            </Routes>
        </div>
    );
}
export default Header;
