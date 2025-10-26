import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header(){

    const addpersonIcon = "/add-user.png"
    const HomeIcon = "/home.png"
    const SettingIcon = "/settings.png"
    const ProfileIcon = 'account.png'

    const { isAuthenticated, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    if(location.pathname === "/"){
        if(isAuthenticated){
            return(
                    <div className="flex justify-between items-center p-4 shadow-md m-0 bg-gray-200">

                        <div className="flex items-center space-x-4">
                            <img src="/Logo.png" alt="Re-Zone Logo" className="h-25"/>
                            <h1 className="text-3xl font-bold" style={{ fontFamily: "Plus jakarta sans" }}>Re-Zone</h1>
                        </div>

                        <nav className="flex items-center space-x-4 no-underline">

                            <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="h-6 w-6" src={HomeIcon} alt=""/>Home</button>
                            <button onClick={() => navigate('/#/Course')} className="text-white hover:text-gray-300 no-underline mr-8">Courses</button>
                            <button onClick={() => navigate('/#/Profile')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={ProfileIcon} alt="" />Profile</button>
                            <button onClick={() => navigate('/#/Setting')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={SettingIcon} alt="" />Settings</button>
                            <button onClick={() => { logout(); navigate('/'); }} className="text-white hover:text-gray-300 no-underline mr-8">Logout</button>

                        </nav>
                    </div>
        )}
    }
    else if(location.pathname !== "/"){
        if(isAuthenticated){
        return(
                    <div className="flex justify-between items-center p-4 shadow-md m-0 bg-gray-200">

                        <div className="flex items-center space-x-4">
                            <img src="/Logo.png" alt="Re-Zone Logo" className="h-25"/>
                            <h1 className="text-3xl font-bold" style={{ fontFamily: "Plus jakarta sans" }}>Re-Zone</h1>
                        </div>

                        <nav className="flex items-center space-x-4 no-underline">

                            <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="h-6 w-6" src={HomeIcon} alt=""/>Home</button>
                            <button onClick={() => navigate('/#/Course')} className="text-white hover:text-gray-300 no-underline mr-8">Courses</button>
                            <button onClick={() => navigate('/#/Profile')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={ProfileIcon} alt="" />Profile</button>
                            <button onClick={() => navigate('/#/Setting')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={SettingIcon} alt="" />Settings</button>
                            <button onClick={() => { logout(); navigate('/'); }} className="text-white hover:text-gray-300 no-underline mr-8">Logout</button>

                        </nav>
                    </div>
        )
        } else {
            return(
                <div className="flex justify-between items-center p-4 shadow-md m-0 bg-gray-200">

                    <div className="flex items-center space-x-4">
                        <img src="/Logo.png" alt="Re-Zone Logo" className="h-25"/>
                        <h1 className="text-3xl font-bold" style={{ fontFamily: "Plus jakarta sans" }}>Re-Zone</h1>
                    </div>

                    <nav className="flex items-center space-x-4 no-underline">

                        <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="h-6 w-6" src={HomeIcon} alt=""/>Home</button>
                        <button onClick={() => navigate('/SignUp')} className="text-white hover:text-gray-300 no-underline mr-8">Sign Up</button>
                        <button onClick={() => navigate('/logIn')} className="text-white hover:text-gray-300 no-underline mr-8">Log In</button>

                    </nav>
                </div>
            )
        }
    }
}
export default Header;
