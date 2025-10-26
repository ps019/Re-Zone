import { useState } from 'react';
function FashionSidePanel(){

    const [ IsOpen, setIsOpen ] = useState(false);

    return !IsOpen ? (
        <button className=""
        onClick={() => {
            setIsOpen(!IsOpen);
        }}>
            <img src="Menu-Icon.png" alt="" />
        </button>
    ) : (
        <div>
            <div>
                <h1>Contents</h1>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
export default FashionSidePanel;