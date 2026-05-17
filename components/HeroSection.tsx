'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden hex-bg" style={{ minHeight: '100vh' }}>
      {/* Radial gold glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 60% at 65% 45%, rgba(201,168,76,0.10) 0%, transparent 65%)' }} />

      {/* Floating particle dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x:'5%',  y:'12%', d:'0s',   dur:'9s'  },
          { x:'90%', y:'10%', d:'1.5s', dur:'11s' },
          { x:'78%', y:'72%', d:'3s',   dur:'8s'  },
          { x:'12%', y:'78%', d:'2s',   dur:'12s' },
          { x:'48%', y:'6%',  d:'4s',   dur:'7s'  },
          { x:'28%', y:'90%', d:'0.5s', dur:'10s' },
          { x:'65%', y:'28%', d:'5s',   dur:'9s'  },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full"
               style={{
                 left: p.x, top: p.y,
                 width: '3px', height: '3px',
                 backgroundColor: '#C9A84C', opacity: 0.4,
                 animation: `float ${p.dur} ease-in-out ${p.d} infinite`,
               }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6
                      min-h-screen flex flex-col lg:flex-row items-center
                      justify-between gap-10 py-20 lg:py-16">

        {/* ── Text ──────────────────────────────────── */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ backgroundColor: '#C9A84C' }} />
            <span className="section-label">Launching Soon — Be First</span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-[1.05]">
            Where AI builders<br />
            <span className="gold-text">come together.</span>
          </h1>

          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#B8CCE0' }}>
            AI Hub Malaysia is building the premier community for AI practitioners,
            founders, and researchers. Be among the first to join.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <Link href="/community" className="btn-primary text-base py-3.5 px-8">
              Join the Community
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/about" className="btn-outline text-base py-3.5 px-8">
              Our Mission
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-10 pt-6"
               style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
            {[
              { value: 'Penang',  label: 'Headquartered' },
              { value: 'MY',      label: 'Nationwide'    },
              { value: '2025',    label: 'Est.'          },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-display font-bold gold-text">{value}</p>
                <p className="text-xs mt-0.5" style={{ color: '#8DA4BE' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Animated Badge ────────────────────────── */}
        <div className="flex-shrink-0 order-1 lg:order-2 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
          <AnimatedBadge />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, rgba(6,14,28,0.5))' }} />
    </section>
  );
}

/* ── Tick mark helper ──────────────────────────── */
function ticks(n: number, r1: number, r2: number, cx = 250, cy = 250) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i * (360 / n) * Math.PI) / 180;
    return (
      <line key={i}
        x1={cx + r1 * Math.cos(a)} y1={cy + r1 * Math.sin(a)}
        x2={cx + r2 * Math.cos(a)} y2={cy + r2 * Math.sin(a)}
        stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    );
  });
}

/* ── Hex points helper ─────────────────────────── */
function hex(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}

function AnimatedBadge() {
  return (
    <div className="relative float">
      {/* Glow halo behind badge */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
           style={{
             background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)',
             filter: 'blur(32px)',
             transform: 'scale(0.9)',
           }} />

      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
           className="w-full h-auto relative z-10" aria-label="AI Hub Malaysia">
        <defs>
          <radialGradient id="bgG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#162A50" />
            <stop offset="100%" stopColor="#060E1C" />
          </radialGradient>
          <radialGradient id="cGlow" cx="50%" cy="65%" r="45%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D8E8F4" />
            <stop offset="50%" stopColor="#8DA4BE" />
            <stop offset="100%" stopColor="#4A6A88" />
          </linearGradient>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="sglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Arc paths for text */}
          <path id="tArc" d="M 58,250 A 192,192 0 0,0 442,250" />
          <path id="bArc" d="M 58,250 A 192,192 0 0,1 442,250" />
        </defs>

        {/* ── Outer badge ring ────────────────────── */}
        <circle cx="250" cy="250" r="240" fill="url(#bgG)" />
        <circle cx="250" cy="250" r="240" fill="none" stroke="url(#ringG)" strokeWidth="22" />
        <circle cx="250" cy="250" r="229" fill="none" stroke="#D8E8F4" strokeWidth="1" opacity="0.55" />
        <circle cx="250" cy="250" r="219" fill="none" stroke="#3A5680" strokeWidth="0.8" />

        {/* Rotating gold dashed ring */}
        <circle cx="250" cy="250" r="235" fill="none" stroke="#C9A84C"
                strokeWidth="1.2" strokeDasharray="6 20" opacity="0.40">
          <animateTransform attributeName="transform" type="rotate"
            from="0 250 250" to="360 250 250" dur="22s" repeatCount="indefinite"/>
        </circle>
        {/* Counter-rotating micro dashes */}
        <circle cx="250" cy="250" r="223" fill="none" stroke="#C9A84C"
                strokeWidth="0.7" strokeDasharray="2 36" opacity="0.25">
          <animateTransform attributeName="transform" type="rotate"
            from="360 250 250" to="0 250 250" dur="16s" repeatCount="indefinite"/>
        </circle>

        {/* Tick marks */}
        {ticks(36, 215, 220)}

        {/* Inner separator */}
        <circle cx="250" cy="250" r="207" fill="none" stroke="#2A4468" strokeWidth="2.5" />
        <circle cx="250" cy="250" r="203" fill="none" stroke="#B8CCE0" strokeWidth="0.4" opacity="0.3" />

        {/* Inner fill */}
        <circle cx="250" cy="250" r="201" fill="url(#bgG)" />
        <circle cx="250" cy="250" r="201" fill="url(#cGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite"/>
        </circle>

        {/* ── Arc text ────────────────────────────── */}
        <text fontFamily="'Arial Black', Impact, sans-serif" fontSize="40"
              fontWeight="900" fill="#0C1C35" letterSpacing="14">
          <textPath href="#tArc" startOffset="50%" textAnchor="middle">AI HUB</textPath>
        </text>
        <text fontFamily="'Arial Black', Impact, sans-serif" fontSize="29"
              fontWeight="900" fill="#0C1C35" letterSpacing="7" dy="-6">
          <textPath href="#bArc" startOffset="50%" textAnchor="middle">MALAYSIA</textPath>
        </text>

        {/* ── Gold stars ──────────────────────────── */}
        <text x="45" y="258" textAnchor="middle" fontSize="24" fill="#C9A84C"
              filter="url(#glow)" style={{ animation: 'pulse-gold 2.8s ease-in-out infinite' }}>★</text>
        <text x="455" y="258" textAnchor="middle" fontSize="24" fill="#C9A84C"
              filter="url(#glow)" style={{ animation: 'pulse-gold 2.8s ease-in-out 1.4s infinite' }}>★</text>

        {/* Star dashes */}
        <line x1="62" y1="250" x2="92" y2="250" stroke="#2A4468" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="408" y1="250" x2="438" y2="250" stroke="#2A4468" strokeWidth="2.5" strokeLinecap="round"/>

        {/* ── Network nodes ───────────────────────── */}
        {([[148,108],[193,88],[250,76],[307,88],[352,108]] as [number,number][]).map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="7" fill="#060E1C" stroke="#C9A84C" strokeWidth="1.2">
              <animate attributeName="r" values="5;8;5" dur={`${2.5+i*0.3}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={cx} cy={cy} r="3" fill="#C9A84C">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2.5+i*0.3}s`} repeatCount="indefinite"/>
            </circle>
          </g>
        ))}
        {([[148,108,193,88],[193,88,250,76],[250,76,307,88],[307,88,352,108],[148,108,213,82],[352,108,287,82]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8DA4BE" strokeWidth="0.8">
            <animate attributeName="opacity" values="0.1;0.45;0.1" dur={`${3+i*0.5}s`} begin={`${i*0.4}s`} repeatCount="indefinite"/>
          </line>
        ))}
        {/* Travelling dot */}
        <circle r="3" fill="#C9A84C" filter="url(#glow)">
          <animateMotion dur="5s" repeatCount="indefinite"
            path="M148,108 L193,88 L250,76 L307,88 L352,108 L307,88 L250,76 L193,88 Z"/>
        </circle>

        {/* ── KL Skyline ──────────────────────────── */}
        <g fill="#0D1E3A" stroke="#1E3560" strokeWidth="0.5">
          <rect x="94"  y="165" width="18" height="50"/><rect x="107" y="155" width="16" height="60"/>
          <rect x="120" y="168" width="20" height="47"/><rect x="138" y="158" width="22" height="57"/>
          <rect x="158" y="145" width="24" height="70"/>
          <rect x="318" y="145" width="24" height="70"/><rect x="340" y="158" width="22" height="57"/>
          <rect x="360" y="168" width="20" height="47"/><rect x="373" y="155" width="16" height="60"/>
          <rect x="388" y="165" width="18" height="50"/>
        </g>

        {/* Left Petronas tower */}
        <g filter="url(#sglow)">
          <rect x="196" y="92" width="34" height="123" fill="#162A50" stroke="#C9A84C" strokeWidth="0.9"/>
          <polygon points="213,80 199,98 227,98" fill="#162A50" stroke="#C9A84C" strokeWidth="0.9"/>
          <rect x="196" y="135" width="34" height="5" fill="#C9A84C" opacity="0.4"/>
          <g fill="#C9A84C" opacity="0.25">
            <rect x="201" y="102" width="5" height="4"/><rect x="210" y="102" width="5" height="4"/>
            <rect x="219" y="102" width="5" height="4"/><rect x="201" y="110" width="5" height="4"/>
            <rect x="219" y="110" width="5" height="4"/>
          </g>
          <animate attributeName="opacity" values="0.85;1;0.85" dur="5s" repeatCount="indefinite"/>
        </g>

        {/* Right Petronas tower */}
        <g filter="url(#sglow)">
          <rect x="270" y="92" width="34" height="123" fill="#162A50" stroke="#C9A84C" strokeWidth="0.9"/>
          <polygon points="287,80 273,98 301,98" fill="#162A50" stroke="#C9A84C" strokeWidth="0.9"/>
          <rect x="270" y="135" width="34" height="5" fill="#C9A84C" opacity="0.4"/>
          <g fill="#C9A84C" opacity="0.25">
            <rect x="275" y="102" width="5" height="4"/><rect x="284" y="102" width="5" height="4"/>
            <rect x="293" y="102" width="5" height="4"/><rect x="275" y="110" width="5" height="4"/>
            <rect x="293" y="110" width="5" height="4"/>
          </g>
          <animate attributeName="opacity" values="0.85;1;0.85" dur="5s" begin="0.5s" repeatCount="indefinite"/>
        </g>

        {/* Skybridge */}
        <rect x="230" y="130" width="40" height="10" rx="2"
              fill="#162A50" stroke="#C9A84C" strokeWidth="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
        </rect>

        {/* KL Tower */}
        <g opacity="0.65">
          <rect x="246" y="106" width="8" height="109" fill="#112040" stroke="#8DA4BE" strokeWidth="0.5"/>
          <rect x="240" y="106" width="20" height="14" rx="2" fill="#112040" stroke="#8DA4BE" strokeWidth="0.5"/>
          <line x1="250" y1="88" x2="250" y2="106" stroke="#8DA4BE" strokeWidth="1.2" opacity="0.5"/>
          <circle cx="250" cy="87" r="2.5" fill="#C9A84C">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* Ground line */}
        <line x1="90" y1="215" x2="410" y2="215" stroke="#C9A84C" strokeWidth="0.8" opacity="0.30"/>

        {/* ── Hex cluster ─────────────────────────── */}
        {/* Hex 1 top-left */}
        <polygon points={hex(217, 255, 38)} fill="#0D1E3A" stroke="#8DA4BE" strokeWidth="1.2">
          <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="0s" repeatCount="indefinite"/>
        </polygon>
        <g stroke="#8DA4BE" strokeWidth="0.7" fill="none" opacity="0.5">
          <circle cx="208" cy="248" r="4"/>
          <circle cx="208" cy="248" r="2" fill="#8DA4BE" opacity="0.5"/>
          <line x1="208" y1="248" x2="224" y2="255"><animate attributeName="opacity" values="0.1;0.9;0.1" dur="2s" repeatCount="indefinite"/></line>
          <line x1="208" y1="248" x2="212" y2="238"><animate attributeName="opacity" values="0.1;0.9;0.1" dur="2s" begin="0.4s" repeatCount="indefinite"/></line>
        </g>

        {/* Hex 2 top-right */}
        <polygon points={hex(283, 255, 38)} fill="#0D1E3A" stroke="#8DA4BE" strokeWidth="1.2">
          <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="1.2s" repeatCount="indefinite"/>
        </polygon>
        <g stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.5">
          <circle cx="292" cy="248" r="4"/>
          <circle cx="292" cy="248" r="2" fill="#C9A84C" opacity="0.5"/>
          <line x1="292" y1="248" x2="276" y2="255"><animate attributeName="opacity" values="0.1;0.9;0.1" dur="2.2s" begin="0.6s" repeatCount="indefinite"/></line>
        </g>

        {/* Hex 3 center — gold "AI" hex */}
        <polygon points={hex(250, 312, 40)} fill="#08142A" stroke="#C9A84C" strokeWidth="2">
          <animate attributeName="opacity" values="0.82;1;0.82" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
        </polygon>
        <polygon points={hex(250, 312, 34)} fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
        </polygon>
        <text x="250" y="319" textAnchor="middle" dominantBaseline="middle"
              fontFamily="'Arial Black', Arial, sans-serif" fontSize="26" fontWeight="900"
              fill="#C9A84C" filter="url(#glow)">AI
          <animate attributeName="opacity" values="0.65;1;0.65" dur="2s" repeatCount="indefinite"/>
        </text>

        {/* Circuit lines around center hex */}
        <g stroke="#C9A84C" strokeWidth="0.9" opacity="0.35">
          <line x1="250" y1="272" x2="250" y2="258">
            <animate attributeName="strokeDasharray" values="0,20;14,6" dur="1.8s" repeatCount="indefinite"/>
          </line>
          <line x1="216" y1="293" x2="200" y2="284"><animate attributeName="opacity" values="0.1;0.7;0.1" dur="2.4s" begin="0.4s" repeatCount="indefinite"/></line>
          <line x1="284" y1="293" x2="300" y2="284"><animate attributeName="opacity" values="0.1;0.7;0.1" dur="2.4s" begin="0.9s" repeatCount="indefinite"/></line>
        </g>
        <circle r="2.5" fill="#C9A84C" filter="url(#glow)" opacity="0.9">
          <animateMotion dur="4s" repeatCount="indefinite"
            path="M216,293 L250,272 L284,293 L284,331 L250,352 L216,331 Z"/>
        </circle>

        {/* Hex 4 small bottom */}
        <polygon points={hex(250, 378, 30)} fill="#0D1E3A" stroke="#C9A84C" strokeWidth="1">
          <animate attributeName="opacity" values="0.45;0.85;0.45" dur="4s" begin="2s" repeatCount="indefinite"/>
        </polygon>
        <circle cx="250" cy="378" r="5" fill="#C9A84C">
          <animate attributeName="r" values="4;7;4" dur="3s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.25;0.65;0.25" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>

        {/* ── Pulse ring ──────────────────────────── */}
        <circle cx="250" cy="250" r="200" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <animate attributeName="r" values="200;238;200" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.25;0;0.25" dur="5s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  );
}
