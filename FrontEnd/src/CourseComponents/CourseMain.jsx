import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseBeneath from './CourseBeneath';

function MainCoursePage(){
    const pillarPictures = "pillar.png";
    const pillars = [
        { heading: "Face", link: "/Course/Face" },
        { heading: "Body", link: "/Course/Body" },
        { heading: "Fashion", link: "/Course/Fashion" },
        { heading: "Mind", link: "/Course/Mind" },
    ];
    // Duplicate for seamless loop
    const duplicatedPillars = [...pillars, ...pillars];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000); // 3 seconds interval

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <div className="pillar-carousel">
                <div className="pillar-track" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {duplicatedPillars.map((pillar, i) => {
                        // Calculate position relative to current index
                        const relativeIndex = (i - currentIndex + 4) % 4;
                        const isMiddle = relativeIndex === 1;
                        const isSide = relativeIndex === 0 || relativeIndex === 2;
                        return (
                            <div key={i} className={`pillar-item ${isMiddle ? 'middle' : isSide ? 'side' : ''}`}>
                                <NavLink to={pillar.link} className="pillar-link">
                                    <div className="flex flex-col items-center">
                                        <h1 className="pillar-title text-3xl font-bold mb-4 text-center text-black">
                                            {pillar.heading}
                                        </h1>
                                        <img src={pillarPictures} alt="pillar" className="w-auto h-70"/>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
            <CourseBeneath />
        </div>
    );
}
export default MainCoursePage;
