import { NavLink } from 'react-router-dom';

function MainCoursePage(){

    const pillarPictures = "pillar.png"
    return(
        <div className="flex flex-col items-center justify-center w-full h-full grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => {
                const heading = (() => {
                    switch (i) {
                        case 0:
                            return "Face";
                        case 1:
                            return "Body";
                        case 2:
                            return "Fashion";
                        case 3:
                            return "Mind";
                        default:
                            return "Unknown";
                    }
                })();
                return (
                    <NavLink key={i} to={`/${heading}`}>
                        <div>
                            <h1 className="text-3xl font-bold mb-4 text-center decoration-none no-underline text-black ">
                                {heading}
                            </h1>
                            <img src={pillarPictures} alt="pillar" className="w-full h-auto"/>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    )
}
export default MainCoursePage;