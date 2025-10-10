
import axios from "axios";
import { useState } from 'react';

function LogIn(){
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const SendData = async() => {
        try{
            const response = await axios.post('http://localhost:5000/login', {
                Email: Email,
                Password: Password
            });
            console.log('Login successful:', response.data);
        }
        catch(error){
            console.error('Error logging in:', error);
        }
    }
    return(
        <div>
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Log In
                </h1>
                <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={(e) => {
                    e.preventDefault();
                    SendData();
                }}>
                    <div className="mb-4">
                        <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 placeholder:italic placeholder:text-sm" type="email" placeholder="Enter Email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                        <br/>
                        <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 placeholder:italic placeholder:text-sm mt-4" type="password" placeholder="Enter Password" autocomplete="current-password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <br/>
                        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LogIn;
