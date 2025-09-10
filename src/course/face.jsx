import { useState } from "react";
import Picture from "./components/Picture";
import "./components/LFace.css";
import "./components/DFace.css";

function Face() {
  // THEME
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // PICTURES
  const [pictures, setPictures] = useState(["", "", ""]);
  const handlePictureChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedPictures = [...pictures];
        updatedPictures[index] = reader.result;
        setPictures(updatedPictures);
      };
      reader.readAsDataURL(file);
    }
  };

  // FORM STEP STATE
  const [step, setStep] = useState(1); // 1 = Basic, 2 = Yes-No, 3 = Lifestyle

  // USER DATA
  const [Name, setName] = useState("guest");
  const [Age, setAge] = useState("Not Given");
  const [Weight, setWeight] = useState("Not given");
  const [Height, setHeight] = useState("Not given");
  const [waterIntake, setWater] = useState("Not given");
  const [SleepHours, setSleep] = useState("Not given");

  // YES-NO CHECKBOXES
  const [breatheMouth, setBreatheMouth] = useState(false);
  const [difficultyNose, setDifficultyNose] = useState(false);
  const [tiltPosture, setTiltPosture] = useState(false);
  const [chewSide, setChewSide] = useState(false);
  const [knowMewing, setKnowMewing] = useState(false);
  const [skinRoutine, setSkinRoutine] = useState(false);
  const [hairRoutine, setHairRoutine] = useState(false);
  const [doubleChin, setDoubleChin] = useState(false);

  // GPT STATES
  const [loading, setLoading] = useState(false);
  const [gptResponse, setGptResponse] = useState("");
  const [Overall, setOverallRating] = useState("ERROR");
  const [AreaStrong, setStrongAreas] = useState({});
  const [AreaWeak, setWeakAreas] = useState({});

  // Prompt builder
  function buildPrompt() {
    return `
You are a world-class facial aesthetics analyst with deep expertise in appearance optimization. 
Your job is to assess the user’s physical features with brutal honesty while also giving uplifting, motivational feedback so the person leaves encouraged, not discouraged. 
Focus ONLY on: Jawline, Hair, Nose, Cheeks, Maxilla bone, Overall facial structure & symmetry, Eyes, Neck.

You MUST return your answer ONLY in the following exact JSON structure (no extra text, no markdown, no explanation):

{
  "OverAllScore": [{ "score": "??" }],
  "StrongAreas": [
    {
      "TotalStrongs": "??",
      "Strong1": "??",
      "ReasonStrong1": "??",
      "Strong2": "??",
      "ReasonStrong2": "??",
      "Strong3": "??",
      "ReasonStrong3": "??",
      "Strong4": "??",
      "ReasonStrong4": "??",
      "Strong5": "??",
      "ReasonStrong5": "??"
    }
  ],
  "WeakAreas": [
    {
      "TotalWeak": "??",
      "Weak1": "??",
      "ReasonWeak1": "??",
      "Weak2": "??",
      "ReasonWeak2": "??",
      "Weak3": "??",
      "ReasonWeak3": "??",
      "Weak4": "??",
      "ReasonWeak4": "??",
      "Weak5": "??",
      "ReasonWeak5": "??"
    }
  ]
}

Rules:
- Replace all "??" with actual data.
- If there are fewer than 5 strong/weak areas, fill remaining with "empty".
- The variable names MUST be exactly as shown above (case-sensitive).
- No extra keys.
- No text outside JSON.

User Data:
Hello my name is ${Name}, and I am ${Age} years old. I want you to analyse my facial structure and give me an honest and trustworthy answer.

Some More Information:
Height: ${Height}
Weight: ${Weight}
Water intake: ${waterIntake} ltr
Sleep in a day: ${SleepHours} hrs
Breathe from mouth: ${breatheMouth ? "Yes" : "No"}
Difficulty breathing from nose: ${difficultyNose ? "Yes" : "No"}
Tilt or posture weakness in pictures: ${tiltPosture ? "Yes" : "No"}
Chew from one side more: ${chewSide ? "Yes" : "No"}
Know and follow mewing: ${knowMewing ? "Yes" : "No"}
Any skin care routine or product use: ${skinRoutine ? "Yes" : "No"}
Any hair care routine or product use: ${hairRoutine ? "Yes" : "No"}
Double chin issue: ${doubleChin ? "Yes" : "No"}
`;
  }

  async function callGPT() {
    setLoading(true);
    setGptResponse("");

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) {
        alert(
          "API Key not found! Please set REACT_APP_OPENAI_API_KEY in your .env"
        );
        setLoading(false);
        return;
      }

      const prompt = buildPrompt();

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        let content = data.choices[0].message.content.trim();

        if (content.startsWith("```")) {
          content = content.replace(/```json|```/g, "").trim();
        }

        setGptResponse(content);

        try {
          const jsonResponse = JSON.parse(content);
          setOverallRating(jsonResponse.OverAllScore[0].score);
          setStrongAreas(jsonResponse.StrongAreas[0]);
          setWeakAreas(jsonResponse.WeakAreas[0]);
        } catch (error) {
          console.error("JSON parsing error:", error);
        }
      } else {
        setGptResponse("Sorry, no response from GPT.");
      }
    } catch (error) {
      console.error("Error calling GPT API:", error);
      setGptResponse("Error calling GPT API. Check console.");
    }

    setLoading(false);
  }

  return (
    <div className={`All-Face-Content ${theme}`}>
      {/* THEME TOGGLE */}
      <button
        type="button"
        className="Button"
        onClick={toggleTheme}
        style={{ marginBottom: "20px" }}
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      {/* STEP 1: BASIC INFO */}
      {step === 1 && (
        <div className="Basic-Info">
          <h1>Basic Information</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={Name === "guest" ? "" : Name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Age"
            value={Age === "Not Given" ? "" : Age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Height (in cm)"
            value={Height.includes("cm") ? Height.replace(" cm", "") : ""}
            onChange={(e) => setHeight(e.target.value + " cm")}
          />
          <br />
          <input
            type="number"
            placeholder="Weight (in Kgs)"
            value={Weight.includes("Kgs") ? Weight.replace(" Kgs", "") : ""}
            onChange={(e) => setWeight(e.target.value + " Kgs")}
          />
          <br />
          <button type="button" className="Button" onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {/* STEP 2: YES-NO SECTION */}
      {step === 2 && (
        <div className="YN-section">
          <h1>Yes-No Section</h1>
          <label>Do you breathe with mouth?</label>
          <input
            type="checkbox"
            checked={breatheMouth}
            onChange={() => setBreatheMouth(!breatheMouth)}
          />
          <br />
          <label>Do you face difficulty breathing through the nose?</label>
          <input
            type="checkbox"
            checked={difficultyNose}
            onChange={() => setDifficultyNose(!difficultyNose)}
          />
          <br />
          <label>Do you see any tilt or posture weakness in your pictures?</label>
          <input
            type="checkbox"
            checked={tiltPosture}
            onChange={() => setTiltPosture(!tiltPosture)}
          />
          <br />
          <label>Do you chew from one side more than the other?</label>
          <input
            type="checkbox"
            checked={chewSide}
            onChange={() => setChewSide(!chewSide)}
          />
          <br />
          <label>Do you know about 'Mewing' and follow it?</label>
          <input
            type="checkbox"
            checked={knowMewing}
            onChange={() => setKnowMewing(!knowMewing)}
          />
          <br />
          <label>Do you have a skincare routine?</label>
          <input
            type="checkbox"
            checked={skinRoutine}
            onChange={() => setSkinRoutine(!skinRoutine)}
          />
          <br />
          <label>Do you have a haircare routine?</label>
          <input
            type="checkbox"
            checked={hairRoutine}
            onChange={() => setHairRoutine(!hairRoutine)}
          />
          <br />
          <label>Do you have a double chin issue?</label>
          <input
            type="checkbox"
            checked={doubleChin}
            onChange={() => setDoubleChin(!doubleChin)}
          />
          <br />
          <button type="button" className="Button" onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {/* STEP 3: LIFESTYLE & PICTURES */}
      {step === 3 && (
        <div>
          <h1>Lifestyle & Pictures</h1>
          <label>Water Intake: {waterIntake}</label>
          <input
            step="0.1"
            value={waterIntake === "Not given" ? 2.0 : waterIntake}
            onChange={(e) => setWater(e.target.value)}
            type="range"
            min="2.0"
            max="5.0"
          />
          <br />
          <label>Sleep Hours</label>
          <input
            type="number"
            value={SleepHours === "Not given" ? "" : SleepHours}
            onChange={(e) => setSleep(e.target.value)}
          />
          <br />
          <div className="sleep-div">
            <h3>Which position do you prefer to sleep in?</h3>
            <img
              className="sleep-img"
              src="https://www.happiesthealth.com/wp-content/uploads/2023/06/Common-Sleep-Positions.jpg"
              alt="1-on back, 2-on sides, 3-on chest"
            />
            <input className="sleep-range" type="range" min="0" max="4" step="1" />
          </div>

          {/* PICTURE UPLOADS */}
          <div className="flex flex-col gap-6 items-center">
            {[0, 1, 2].map(
              (idx) =>
                (idx === 0 || pictures[idx - 1]) && (
                  <div key={idx}>
                    <Picture
                      index={idx}
                      title={`Upload Picture ${idx + 1}`}
                      pic={pictures[idx]}
                      theme={theme}
                    />
                    {!pictures[idx] && (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePictureChange(e, idx)}
                      />
                    )}
                  </div>
                )
            )}
          </div>

          <button
            type="button"
            className="Button"
            onClick={(e) => {
              e.preventDefault();
              callGPT();
            }}
            disabled={loading}
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            {loading ? "Analyzing..." : "Analyze My Face"}
          </button>
        </div>
      )}

      {/* GPT RESPONSE */}
      {gptResponse && (
        <div className="gpt-response" style={{ whiteSpace: "pre-wrap", marginTop: 30 }}>
          <h2>GPT Analysis</h2>
          <h3>Overall Score: {Overall}</h3>
          <h4>Strengths</h4>
          <ul>
            {[1, 2, 3, 4, 5].map(
              (i) =>
                AreaStrong[`Strong${i}`] &&
                AreaStrong[`Strong${i}`] !== "empty" && (
                  <li key={i}>
                    {AreaStrong[`Strong${i}`]} - {AreaStrong[`ReasonStrong${i}`]}
                  </li>
                )
            )}
          </ul>
          <h4>Weaknesses</h4>
          <ul>
            {[1, 2, 3, 4, 5].map(
              (i) =>
                AreaWeak[`Weak${i}`] &&
                AreaWeak[`Weak${i}`] !== "empty" && (
                  <li key={i}>
                    {AreaWeak[`Weak${i}`]} - {AreaWeak[`ReasonWeak${i}`]}
                  </li>
                )
            )}
          </ul>
          <hr />
          <h4>Raw Response</h4>
          <pre>{gptResponse}</pre>
        </div>
      )}
    </div>
  );
}

export default Face;
