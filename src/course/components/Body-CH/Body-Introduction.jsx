import { useState } from 'react';

export function IntroBODY() {
  const [expanded, setExpanded] = useState({
    chest: false,
    arms: false,
    shoulders: false,
    abs: false,
    back: false,
    legs: false,
    neck: false,
  });

  const toggleExpand = (part) => {
    setExpanded((prev) => ({ ...prev, [part]: !prev[part] }));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f5f7fa', color: '#333', lineHeight: '1.8', padding: '2rem', borderRadius: '8px' }}>
      <h1 style={{ color: '#2f4f4f', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
        Welcome to Your Body Transformation Journey
      </h1>

      <p style={{ marginBottom: '1.25em', fontSize: '1.2rem' }}>
        Before you dive deeper, let’s take a real moment to appreciate the science behind male attractiveness—a journey backed by hard facts and genuine understanding. Your body is a masterpiece in progress, and knowing exactly which parts matter most can change the whole game. We’re here to walk alongside you humbly, sharing what we know in a way that feels right, without pressure or rush.
      </p>

      <p style={{ marginBottom: '1.25em', fontSize: '1.15rem' }}>
        Attraction isn’t random—it’s deeply wired in biology and psychology. Some muscles shout louder, naturally drawing attention and respect, shaping how you’re perceived whether in a crowded room or a simple day out. But attraction is also about confidence; the strength to walk in your skin with pride, kindness, and steady resolve.
      </p>

      <p style={{ marginBottom: '1.25em', fontSize: '1.15rem' }}>
        Think of this as your roadmap—you don’t need to chase every muscle, but focusing on the right ones, with intention, can awaken your most magnetic self. Let’s get you familiar with each key part, so you understand why it holds power, and how it fits into the bigger picture of who you are becoming.
      </p>

      <p style={{ marginBottom: '1.5em', fontSize: '1.15rem' }}>
        Ready to explore? Click the arrow next to each muscle to see detailed, research-backed insights about their role in attraction and confidence. This isn’t just information—it’s your competitive edge, your secret weapon to creating lasting presence.
      </p>

      {/* Chest */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('chest')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.chest}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('chest'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>CHEST (Pectoral Muscles) ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>30%</span>
        </div>
        {expanded.chest && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            The chest muscles rank highest in male attraction for a reason. They signal raw power and physical health—both critical evolutionary markers of fitness. A strong, well-defined chest boosts your silhouette instantly, making you appear broader and more imposing. This muscle group also aids posture, elevating your overall presence to command respect effortlessly.
          </p>
        )}
      </div>

      {/* Arms */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('arms')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.arms}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('arms'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>ARMS (Biceps / Triceps) ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>20%</span>
        </div>
        {expanded.arms && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            Your arms speak volumes without saying a word. Defined biceps and triceps symbolize not only strength but your ability to take action and protect. This muscle group is heavily involved in daily movements, making it one of the most visible signs of fitness and vitality. Strong arms are a clear indicator of dedication and masculine power.
          </p>
        )}
      </div>

      {/* Shoulders */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('shoulders')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.shoulders}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('shoulders'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>SHOULDERS ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>15%</span>
        </div>
        {expanded.shoulders && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            Broad shoulders amplify your frame and enhance the classic V-shaped torso that has long been regarded as attractive. They project confidence and leadership by creating a balanced, powerful silhouette. Well-developed deltoids also support functional strength for everyday tasks and athletic action.
          </p>
        )}
      </div>

      {/* Abs */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('abs')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.abs}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('abs'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>ABS & STOMACH ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>12%</span>
        </div>
        {expanded.abs && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            Your core strength reflects more than just muscular definition—it represents control, discipline, and endurance. A flat, muscular stomach enhances your posture and balance, and subtly speaks to overall fitness and vitality. Strong abs can also give you better athletic ability and protect your spine.
          </p>
        )}
      </div>

      {/* Back */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('back')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.back}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('back'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>BACK MUSCLES ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>10%</span>
        </div>
        {expanded.back && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            The back is a powerhouse of strength and posture. It shapes your overall presence with a wide, muscular silhouette that balances the front torso. A strong back also reduces injury risk and supports fluid, confident movement—which is a subtle but powerful cue for attractiveness.
          </p>
        )}
      </div>

      {/* Legs */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('legs')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.legs}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('legs'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>LEG MUSCLES ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>8%</span>
        </div>
        {expanded.legs && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            Legs carry you through life’s adventures, and though often hidden beneath clothes, they matter a lot. Strong, shapely legs contribute to overall balance, athletic ability, and a powerful stance. Working on legs improves endurance, coordination, and the aesthetics of your full physique.
          </p>
        )}
      </div>

      {/* Neck */}
      <div style={{ marginBottom: '1rem' }}>
        <div 
          onClick={() => toggleExpand('neck')} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#d0ebe8', padding: '0.75rem 1rem', borderRadius: '6px' }}
          aria-expanded={expanded.neck}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') toggleExpand('neck'); }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>NECK MUSCLES ➔</span>
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>5%</span>
        </div>
        {expanded.neck && (
          <p style={{ fontSize: '0.85rem', padding: '0.75rem 1rem', backgroundColor: '#e0f7fa', borderRadius: '6px', marginTop: '0.25rem', lineHeight: '1.4' }}>
            The neck is a small but mighty player in attraction. Thick, muscular necks suggest resilience and strength, reinforcing the masculinity of your posture and adding a finishing touch to your commanding presence.
          </p>
        )}
      </div>

      {/* Summary Table */}
      <div style={{ marginTop: '3rem', backgroundColor: '#d0f0eb', padding: '1.5rem', borderRadius: '8px' }}>
        <h2 style={{ fontWeight: '700', color: '#2a9d8f', marginBottom: '1rem' }}>Attractiveness Breakdown (Male Body)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #2a9d8f' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Body Part / Muscle Group</th>
              <th style={{ textAlign: 'right', padding: '0.5rem' }}>Attractiveness %</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Chest (Pectoral Muscles)</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>30%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Arms (Biceps / Triceps)</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>20%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Shoulders</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>15%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Abs & Stomach</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>12%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Back Muscles</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>10%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #2a9d8f' }}>
              <td style={{ padding: '0.5rem' }}>Leg Muscles</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>8%</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>Neck Muscles</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '1.15rem' }}>
        Remember, your body is a work in progress, and every effort counts. These percentages show where natural attraction tends to focus, but the real power comes from your dedication to growth, resilience, and confidence. Let this knowledge fuel your journey toward becoming the best version of you.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <button 
          onClick={() => window.location.href = '#next-chapter'}
          style={{
            backgroundColor: '#2a9d8f',
            color: 'white',
            border: 'none',
            padding: '0.85rem 2.5rem',
            fontSize: '1.2rem',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#21867a'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#2a9d8f'}
        >
          Ready for the next chapter? Let’s go.
        </button>
      </div>
    </div>
  );
}
