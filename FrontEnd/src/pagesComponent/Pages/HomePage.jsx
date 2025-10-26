    
import { useAuth } from '../../context/AuthContext';

function HomePage(){
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return(
            <div className='flex bg-[#1a1a1a] text-white'>
                <div className='w-300 h-200 overflow-hidden bg-[#1a1a1a] shadow-lg'>
                    <img src="Home-Page.png" className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                        <nav>
                            <h1 className=''><b><i>" Redefine, redesign and transform your life. "</i></b></h1>
                            <h3>Re-Zone Your life with us.</h3>
                            <button onClick={() => {
                                window.location.href = "/#/SignUp";
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
        );
    } else {
        return(
            <div>
                <h1>Welcome back to Re-Zone!</h1>
                <p>You are logged in. Explore your courses or manage your profile.</p>
            </div>
        );
    }
}
export default HomePage;
