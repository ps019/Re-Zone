import axios from "axios";
import { useState } from 'react';

function SignUp(){

    const [signUp, setSignUp] = useState(false);

    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const SendData = async() => {
        const trimmedUserName = UserName.trim();
        const trimmedEmail = Email.trim();
        const trimmedPassword = Password.trim();

        if (!trimmedUserName || !trimmedEmail || !trimmedPassword) {
            alert('All fields are required');
            return;
        }

        try{
            const response = await axios.post('https://re-zone-backend.onrender.com/SignUp', {
                UserName: trimmedUserName,
                Email: trimmedEmail,
                Password: trimmedPassword
            });
            console.log('Signup successful:', response.data);
            setSignUp(!signUp);
            }
        catch(error){
                console.log('Error sending data:', error);
            }
        }
    return(
        <div>
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Create an account
                </h1>
                <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={(e) => {
                    e.preventDefault();
                    SendData();
                }}>
                    <div className="mb-4">
                        <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 placeholder:italic placeholder:text-sm" type="text" placeholder="Create Username" onChange={(e)=>{
                            setUserName(e.target.value);
                        }}/>

                        <br/>
                        <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 placeholder:italic placeholder:text-sm mt-4" type="email" placeholder="Enter Email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>

                        <br/>
                        <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 placeholder:italic placeholder:text-sm mt-4" type="password" placeholder="Create Password" autoComplete="new-password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>

                        <br/>
                        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="submit">
                            Create Account
                        </button>
                        {signUp ? (
                            <div>
                                <h2>You are signed in successfully!!</h2>
                                <p>re-directing to home page in </p>

                                <div>ELSE click here to see your profile
                                    <a href="/Profile"><button>Profile</button></a>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2>Something went wrong</h2>
                                <h3>Try again!!</h3>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
