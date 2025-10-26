import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header(){

    const addpersonIcon = "/add-user.png"
    const HomeIcon = "/home.png"
    const SettingIcon = "/settings.png"
    const ProfileIcon = 'account.png'

    const [IsAuthorized, setIsAuthorized] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();


    if(location.pathname === "/" && !IsAuthorized){
        return(<div className='flex bg-[#1a1a1a] text-white'>
                <div className='w-300 h-200 overflow-hidden bg-[#1a1a1a] shadow-lg'>
                    <img src="Home-Page.png" className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                        <nav>
                            <h1 className=''><b><i>" Redefine, redesign and transform your life. "</i></b></h1>
                            <h3>Re-Zone Your life with us.</h3>
                            <button onClick={() => {
                                navigate("/SignUp")
                            }}
                            className='w-60 h-20 rounded-[75px] text-[1.5rem] mt-10 mb-20 justify-center'
                            >Get Started</button>

                            <div>
                                <h2>Check out our courses.</h2>
                                <div>
                                    <div>
                                        <ul className='flex'>
                                            <li>Face</li>
                                            <li>Body</li>
                                            <li>Fashion</li>
                                            <li>Mentality</li>
                                        </ul>
                                    </div>
                                    <div>
                                        picture section
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                 )}
    else if(location.pathname === "/" && IsAuthorized){
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

                        </nav>
                    </div>
        )}
    else if(location.pathname !== "/"){
        if(IsAuthorized){
        return(
                    <div className="flex justify-between items-center p-4 shadow-md m-0 bg-gray-200">

                        <div className="flex items-center space-x-4">
                            <img src="/Logo.png" alt="Re-Zone Logo" className="h-25"/>
                            <h1 className="text-3xl font-bold" style={{ fontFamily: "Plus jakarta sans" }}>Re-Zone</h1>
                        </div>

                        <nav className="flex items-center space-x-4 no-underline">

                            <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="h-6 w-6" src={HomeIcon} alt=""/>Home</button>
                            <button onClick={() => navigate('/#/Course')} className="text-white hover:text-gray-300 no-underline mr-8">Courses</button>
                            <button onClick={() => navigate('/#/SignUp')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={ProfileIcon} alt="" />Profile</button>
                            <button onClick={() => navigate('/#/Setting')} className="text-white hover:text-gray-300 no-underline mr-8"><img className="w-6 h-6" src={SettingIcon} alt="" />Settings</button>

                        </nav>
                    </div>
        )
        }
    }
}
export default Header;
