import React, { useState } from 'react';

// Accent color and basic styles
const ACCENT = '#3B82F6';
const BG = '#F6FAFF';

const features = [
  '24/7 Online Afspraakboeken',
  'Minder Administratiekosten',
  'Professionele Patiëntinteractie',
  'Uitgebreide Behandelingsuitleg',
];

const techStack = [
  {
    icon: '💬',
    title: 'AI Conversation Engine',
    desc: 'Natuurlijke, medische AI-gesprekken, getraind voor cosmetische klinieken.'
  },
  {
    icon: '🎤',
    title: 'Real-time Voice Processing',
    desc: 'Directe spraakherkenning en natuurlijke taalverwerking voor vloeiende gesprekken.'
  },
  {
    icon: '⚙️',
    title: 'Custom Integration',
    desc: 'Naadloze koppeling met uw praktijksoftware en behandelprotocollen.'
  },
];

export default function CosmeticClinicLandingPage() {
  const [demo, setDemo] = useState('voice');

  return (
    <div style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', background: BG, minHeight: '100vh', color: '#222' }}>
      {/* Header */}
      <header style={{ background: '#fff', boxShadow: '0 2px 8px #e5eaf3', padding: '24px 0 0 0', borderRadius: '0 0 24px 24px', marginBottom: 32 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 22, color: ACCENT, letterSpacing: 0.5 }}>Cosmetic Clinic AI</span>
          </div>
          <nav>
            <a href="#demo" style={{ color: ACCENT, fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>Live Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px 0 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Your AI Cosmetic Clinic Assistant</h1>
        <h2 style={{ fontSize: 20, fontWeight: 400, color: '#555', marginBottom: 32 }}>Experience Robin – Your 24/7 AI Receptionist for Cosmetic Clinics</h2>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', marginTop: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {[{
            icon: '📞',
            title: 'Patient Calls',
            desc: 'Patiënten bellen uw kliniek en worden begroet door Robin, uw AI-assistent.'
          }, {
            icon: '🤖',
            title: 'AI Conversation',
            desc: 'Robin voert een natuurlijk gesprek, begrijpt wensen en legt behandelingen uit.'
          }, {
            icon: '📅',
            title: 'Appointment Booked',
            desc: 'Robin plant direct een afspraak in en bevestigt alle details professioneel.'
          }].map((step, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e5eaf3', flex: '1 1 220px', minWidth: 220, maxWidth: 270, padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{step.title}</div>
              <div style={{ color: '#666', fontSize: 15 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ maxWidth: 900, margin: '40px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e5eaf3', flex: '1 1 340px', minWidth: 280, maxWidth: 420, padding: 28 }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: ACCENT, marginBottom: 12 }}>Voordelen voor uw kliniek</div>
            <ul style={{ paddingLeft: 20, color: '#444', fontSize: 16, margin: 0 }}>
              {features.map((f, i) => <li key={i} style={{ marginBottom: 8 }}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Demo Switch Section */}
      <section id="demo" style={{ maxWidth: 900, margin: '48px auto 0 auto', padding: '0 24px' }}>
        <div style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)', borderRadius: 22, boxShadow: '0 4px 24px #dbeafe', padding: 32, color: '#fff', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 18 }}>Live Demo – Probeer Robin Nu</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <button
              onClick={() => setDemo('voice')}
              style={{
                background: demo === 'voice' ? '#fff' : 'rgba(255,255,255,0.15)',
                color: demo === 'voice' ? ACCENT : '#fff',
                border: 'none',
                borderRadius: 16,
                padding: '10px 28px',
                fontWeight: 600,
                fontSize: 16,
                boxShadow: demo === 'voice' ? '0 2px 8px #dbeafe' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Voice Agent Demo
            </button>
            <button
              onClick={() => setDemo('chat')}
              style={{
                background: demo === 'chat' ? '#fff' : 'rgba(255,255,255,0.15)',
                color: demo === 'chat' ? ACCENT : '#fff',
                border: 'none',
                borderRadius: 16,
                padding: '10px 28px',
                fontWeight: 600,
                fontSize: 16,
                boxShadow: demo === 'chat' ? '0 2px 8px #dbeafe' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Chat Agent Demo
            </button>
          </div>
          <div style={{ minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
            {demo === 'voice' ? (
              <div style={{ textAlign: 'center', width: '100%' }}>
                <button
                  style={{
                    background: '#fff',
                    color: ACCENT,
                    border: 'none',
                    borderRadius: '50%',
                    width: 72,
                    height: 72,
                    fontSize: 36,
                    boxShadow: '0 2px 12px #dbeafe',
                    marginBottom: 18,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                  }}
                  aria-label="Start voice conversation"
                >
                  <span role="img" aria-label="microphone">🎤</span>
                </button>
                <div style={{ fontSize: 18, marginTop: 8 }}>Click to start a voice conversation with Robin.</div>
              </div>
            ) : (
              <div style={{ width: 340, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #dbeafe', padding: 0, overflow: 'hidden', textAlign: 'left' }}>
                <div style={{ background: '#EFF6FF', padding: '14px 20px', borderBottom: '1px solid #e0e7ef', fontWeight: 600, color: ACCENT }}>Smith Aesthetics Clinic – Chat met Robin</div>
                <div style={{ padding: '20px 20px 12px 20px', minHeight: 80, color: '#333', fontSize: 16 }}>
                  <div style={{ marginBottom: 8 }}><span style={{ color: ACCENT, fontWeight: 700 }}>Robin:</span> Thank you for contacting our clinic. I can help you schedule an appointment or answer any questions.</div>
                </div>
                <div style={{ borderTop: '1px solid #e0e7ef', padding: '10px 20px', background: '#F9FAFB' }}>
                  <input type="text" placeholder="Message Robin..." style={{ width: '80%', border: 'none', outline: 'none', fontSize: 15, background: 'transparent' }} disabled />
                  <button style={{ background: ACCENT, color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 600, marginLeft: 8, cursor: 'not-allowed', opacity: 0.7 }}>Send</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Implementation section */}
      <section style={{ maxWidth: 900, margin: '48px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e5eaf3', flex: '1 1 320px', minWidth: 260, maxWidth: 380, padding: 28 }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: ACCENT, marginBottom: 10 }}>Demo Experience (Website)</div>
            <ul style={{ color: '#444', fontSize: 15, paddingLeft: 20, margin: 0 }}>
              <li>Interactieve demo via webbrowser</li>
              <li>Test voice- en chatfunctionaliteit</li>
              <li>Ervaar Robin’s mogelijkheden</li>
            </ul>
          </div>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e5eaf3', flex: '1 1 320px', minWidth: 260, maxWidth: 380, padding: 28 }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: ACCENT, marginBottom: 10 }}>Live Implementation (Kliniek)</div>
            <ul style={{ color: '#444', fontSize: 15, paddingLeft: 20, margin: 0 }}>
              <li>Direct op uw praktijklijn geïnstalleerd</li>
              <li>Patiënten bellen uw nummer rechtstreeks</li>
              <li>24/7 automatische afspraakplanning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ maxWidth: 900, margin: '48px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 20 }}>
          🚀 Advanced AI Technology Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {techStack.map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e5eaf3', flex: '1 1 220px', minWidth: 220, maxWidth: 270, padding: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{t.title}</div>
              <div style={{ color: '#666', fontSize: 15 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 56, background: '#fff', borderRadius: '24px 24px 0 0', boxShadow: '0 -2px 8px #e5eaf3', padding: '32px 0 18px 0', textAlign: 'center', color: '#888', fontSize: 15 }}>
        <div>Smith Aesthetics Clinic AI Voice Agent Demo – Experience the Future of Cosmetic Clinic Scheduling</div>
        <div style={{ marginTop: 6 }}>123 Main Street, Amsterdam · Powered by AI Technology</div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          header > div, section > div, footer > div { max-width: 100% !important; }
        }
        @media (max-width: 700px) {
          section > div, footer > div { flex-direction: column !important; gap: 16px !important; }
          section > div > div { max-width: 100% !important; min-width: 0 !important; }
        }
        @media (max-width: 500px) {
          h1 { font-size: 26px !important; }
          h2 { font-size: 16px !important; }
        }
      `}</style>
    </div>
  );
} 