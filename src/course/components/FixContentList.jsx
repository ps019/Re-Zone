import './Content.css';
import { useRef, useState } from 'react';


export default function ContentList(){

    const MenuRef = useRef();
    const [Menustatus, setStatus] = useState(true);

    const HandleMenu = () => {
        if(Menustatus === false){
            setStatus(true)
        }
        else{
            setStatus(false)
        }
    }

    return(
        <div>
            <div className="Pallete">
                <div className={Menustatus ? "Inactive-Pallete" : "Active-Pallete"}>
                    <ul className='list'>
                        <li><a>Introduction</a></li>
                        <li><a>Sleep</a></li>
                        <li><a>Nutrition</a></li>
                        <li><a>Height</a></li>
                        <li><a>Bone & Structure</a></li>
                    </ul>
                </div>
                
                <button className = {Menustatus ? "Active-Menu-Button" : "Inactive-Menu-Button"} ref={MenuRef} onClick={() => { HandleMenu() }}>=</button>
            </div>
            <div className="open-Menu">

            </div>
        </div>
    );
}