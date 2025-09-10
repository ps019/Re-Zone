import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components/LFix.css";
import './components/DFix.css';


export default function Fix() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Apply .active a tick later so CSS transitions trigger
    const timer = setTimeout(() => setActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="all-Fix">
      <div className={`parent-pillar ${active ? "active" : ""}`}>
        <div className="pillar">
          <div className="pillar-img"><h2>FACE</h2><img src="/pillar.png" alt="ERROR 404_" /></div>
          <div className="pillar-img" onClick={() => navigate("/Course/Improve/body-intro")} ><h2>BODY</h2><img src="/pillar.png" alt="ERROR 404_" /></div>
          <div className="pillar-img"><h2>FASHION</h2><img src="/pillar.png" alt="ERROR 404_" /></div>
          <div className="pillar-img"><h2>Attractive</h2><img src="/pillar.png" alt="ERROR 404_" /></div>
        </div>
      </div>
    </div>
  );
}
