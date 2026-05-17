import Link from 'next/link';
import CommunityJoin from '@/components/CommunityJoin';
import { orgJsonLd } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden hex-bg" style={{ minHeight: '92vh' }}>

        {/* Radial gold glow */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 65%)' }} />

        {/* Circuit node dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            { x: '12%', y: '18%', size: 3, delay: '0s'   },
            { x: '88%', y: '22%', size: 2, delay: '0.8s' },
            { x: '75%', y: '55%', size: 4, delay: '1.5s' },
            { x: '8%',  y: '65%', size: 2, delay: '2.1s' },
            { x: '55%', y: '80%', size: 3, delay: '0.4s' },
            { x: '92%', y: '78%', size: 2, delay: '1.2s' },
          ].map((dot, i) => (
            <div key={i} className="absolute rounded-full pulse-gold"
                 style={{ left: dot.x, top: dot.y, width: dot.size + 'px', height: dot.size + 'px',
                          backgroundColor: '#C9A84C', animationDelay: dot.delay, boxShadow: '0 0 8px #C9A84C' }} />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
            <line x1="12%" y1="18%" x2="55%" y2="80%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="88%" y1="22%" x2="75%" y2="55%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="75%" y1="55%" x2="55%" y2="80%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="8%"  y1="65%" x2="12%" y2="18%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="92%" y1="78%" x2="75%" y2="55%" stroke="#C9A84C" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* KL Skyline */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
          <svg viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg"
               className="w-full" preserveAspectRatio="xMidYMax slice">
            <g fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5">
              <rect x="0"   y="110" width="60"  height="70" />
              <rect x="50"  y="95"  width="45"  height="85" />
              <rect x="90"  y="120" width="35"  height="60" />
              <rect x="120" y="85"  width="50"  height="95" />
              <rect x="165" y="105" width="40"  height="75" />
              <rect x="900" y="100" width="55"  height="80" />
              <rect x="945" y="90"  width="40"  height="90" />
              <rect x="980" y="115" width="45"  height="65" />
              <rect x="1020" y="85" width="60"  height="95" />
              <rect x="1075" y="105" width="50" height="75" />
              <rect x="1120" y="95"  width="80" height="85" />
            </g>
            <g fill="rgba(201,168,76,0.09)" stroke="rgba(201,168,76,0.22)" strokeWidth="0.6">
              <rect x="510" y="10" width="44" height="170" />
              <polygon points="532,0 522,16 542,16" />
              <rect x="510" y="80" width="44" height="6" />
              <rect x="646" y="10" width="44" height="170" />
              <polygon points="668,0 658,16 678,16" />
              <rect x="646" y="80" width="44" height="6" />
              <rect x="554" y="76" width="92" height="14" rx="2" />
              <rect x="560" y="80" width="80" height="6" />
            </g>
            <g fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.18)" strokeWidth="0.5">
              <rect x="592" y="28" width="16" height="152" />
              <rect x="584" y="28" width="32" height="22" rx="3" />
              <line x1="600" y1="0" x2="600" y2="28" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5"/>
            </g>
            <g fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.4">
              <rect x="200" y="70"  width="65"  height="110" />
              <rect x="260" y="90"  width="50"  height="90"  />
              <rect x="305" y="60"  width="75"  height="120" />
              <rect x="375" y="80"  width="55"  height="100" />
              <rect x="425" y="100" width="40"  height="80"  />
              <rect x="460" y="75"  width="55"  height="105" />
              <rect x="700" y="75"  width="55"  height="105" />
              <rect x="750" y="90"  width="45"  height="90"  />
              <rect x="790" y="65"  width="65"  height="115" />
              <rect x="850" y="85"  width="55"  height="95"  />
            </g>
            <rect x="0" y="178" width="1200" height="2" fill="rgba(201,168,76,0.15)" />
            <circle cx="532" cy="2"  r="2" fill="#C9A84C" opacity="0.5" />
            <circle cx="668" cy="2"  r="2" fill="#C9A84C" opacity="0.5" />
            <circle cx="600" cy="0"  r="1.5" fill="#C9A84C" opacity="0.6" />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-16"
               style={{ background: 'linear-gradient(to top, rgba(6,14,28,0.6), transparent)' }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-52 sm:pb-56">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ backgroundColor: '#C9A84C' }} />
            <span className="section-label">Malaysia's AI Community — Launching Soon</span>
            <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ backgroundColor: '#C9A84C', animationDelay: '0.5s' }} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.05] max-w-3xl">
            Where AI builders<br />
            <span className="gold-text">come together.</span>
          </h1>

          <p className="text-xl mb-10 leading-relaxed max-w-xl" style={{ color: '#B8CCE0' }}>
            AI Hub Malaysia is building the premier community for AI practitioners,
            founders, and researchers across Malaysia. Be among the first to join.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/community" className="btn-primary text-base py-3.5 px-7">
              Join the Community
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/about" className="btn-outline text-base py-3.5 px-7">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE BUILDING ─────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span style={{ color: '#C9A84C' }}>★</span>
            <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>What we&apos;re building</span>
            <span style={{ color: '#C9A84C' }}>★</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            A home for AI in Malaysia
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8DA4BE' }}>
            We&apos;re bringing together the people, ideas, and energy to make Malaysia
            a serious player in the global AI landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <polygon points="20,2 37,11 37,29 20,38 3,29 3,11"
                    fill="rgba(201,168,76,0.10)" stroke="#C9A84C" strokeWidth="1.2" />
                  <circle cx="20" cy="20" r="4" fill="#C9A84C" opacity="0.8" />
                  <line x1="20" y1="2"  x2="20" y2="14" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
                  <line x1="37" y1="11" x2="26" y2="16" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
                  <line x1="37" y1="29" x2="26" y2="24" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
                </svg>
              ),
              title: 'Meetups & Events',
              desc: 'Regular gatherings across Penang, KL, and beyond — from casual coffee chats to structured workshops and hackathons.',
              badge: 'Coming Soon',
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <rect x="4" y="8" width="32" height="24" rx="3"
                    fill="rgba(201,168,76,0.10)" stroke="#C9A84C" strokeWidth="1.2" />
                  <line x1="4"  y1="16" x2="36" y2="16" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4"/>
                  <circle cx="12" cy="12" r="1.5" fill="#C9A84C" opacity="0.6"/>
                  <circle cx="18" cy="12" r="1.5" fill="#C9A84C" opacity="0.4"/>
                  <circle cx="24" cy="12" r="1.5" fill="#C9A84C" opacity="0.4"/>
                  <rect x="10" y="22" width="20" height="2" rx="1" fill="#C9A84C" opacity="0.4"/>
                  <rect x="10" y="27" width="14" height="2" rx="1" fill="#C9A84C" opacity="0.25"/>
                </svg>
              ),
              title: 'Knowledge Sharing',
              desc: 'Talks, panels, and workshops led by practitioners — real experience, not vendor pitches. From ML fundamentals to agentic AI.',
              badge: 'Coming Soon',
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="16"
                    fill="rgba(201,168,76,0.10)" stroke="#C9A84C" strokeWidth="1.2" />
                  <circle cx="20" cy="14" r="4" fill="#C9A84C" opacity="0.7"/>
                  <path d="M10 30 Q10 24 20 24 Q30 24 30 30" fill="#C9A84C" opacity="0.4"/>
                  <circle cx="10" cy="20" r="2.5" fill="#C9A84C" opacity="0.4"/>
                  <circle cx="30" cy="20" r="2.5" fill="#C9A84C" opacity="0.4"/>
                  <line x1="14" y1="14" x2="10" y2="20" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3"/>
                  <line x1="26" y1="14" x2="30" y2="20" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3"/>
                </svg>
              ),
              title: 'Network & Collaborate',
              desc: 'Find co-founders, collaborators, early adopters, and mentors. The people building AI in Malaysia, all in one place.',
              badge: 'Join Now',
            },
          ].map(({ icon, title, desc, badge }) => (
            <div key={title} className="card p-7 flex flex-col gap-5">
              <div>{icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-white text-lg">{title}</h3>
                  <span
                    className="text-[10px] font-semibold font-display uppercase px-2 py-0.5 rounded-full"
                    style={badge === 'Join Now'
                      ? { backgroundColor: 'rgba(201,168,76,0.20)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.35)' }
                      : { backgroundColor: 'rgba(141,164,190,0.10)', color: '#8DA4BE', border: '1px solid rgba(141,164,190,0.20)' }}
                  >
                    {badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#8DA4BE' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#0C1C35' }}>
        <div className="gold-rule mb-16" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: '#C9A84C' }}>★</span>
                <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Who it&apos;s for</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-5 leading-tight">
                Built for everyone<br/>shaping AI in Malaysia
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#8DA4BE' }}>
                Whether you&apos;re writing models, shipping products, running a team,
                or just starting to explore — you belong here.
              </p>
              <Link href="/community" className="btn-primary text-base py-3.5 px-7">
                Join AI Hub Malaysia
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ML Engineers',      desc: 'Building and training models'          },
                { label: 'Founders & CTOs',   desc: 'Embedding AI into products'            },
                { label: 'Product Managers',  desc: 'Shipping AI-powered features'          },
                { label: 'Researchers',        desc: 'Advancing the state of the art'       },
                { label: 'Data Scientists',   desc: 'Turning data into decisions'           },
                { label: 'AI Curious',        desc: 'Learning and exploring what\'s possible' },
              ].map(({ label, desc }) => (
                <div key={label}
                     className="p-4 rounded-xl flex flex-col gap-1"
                     style={{ backgroundColor: '#112040', border: '1px solid rgba(201,168,76,0.12)' }}>
                  <p className="font-display font-semibold text-sm text-white">{label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#8DA4BE' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gold-rule mt-16" />
      </section>

      {/* ── LOCATION ─────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden hex-bg"
             style={{ border: '1px solid rgba(201,168,76,0.20)' }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span style={{ color: '#C9A84C' }}>★</span>
              <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Based in Penang, growing nationwide</span>
              <span style={{ color: '#C9A84C' }}>★</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Starting in Penang.<br/>Building for Malaysia.
            </h2>
            <p className="text-lg max-w-lg mx-auto mb-8" style={{ color: '#8DA4BE' }}>
              AI Hub Malaysia is headquartered in Penang — the Silicon Valley of Malaysia —
              with plans to expand to KL, Johor, and every city where AI builders gather.
            </p>

            {/* City pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { city: 'Penang',  active: true  },
                { city: 'Kuala Lumpur', active: false },
                { city: 'Johor Bahru',  active: false },
                { city: 'Kota Kinabalu',active: false },
                { city: 'Kuching',      active: false },
              ].map(({ city, active }) => (
                <span key={city}
                      className="px-4 py-2 rounded-full text-sm font-display font-semibold"
                      style={active
                        ? { backgroundColor: 'rgba(201,168,76,0.20)', color: '#E2CA7D', border: '1px solid rgba(201,168,76,0.40)' }
                        : { backgroundColor: 'rgba(141,164,190,0.06)', color: '#8DA4BE', border: '1px solid rgba(141,164,190,0.15)' }}>
                  {active ? '★ ' : ''}{city}{!active ? ' — soon' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY CTA ──────────────────────────────── */}
      <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        <CommunityJoin />
      </section>
    </>
  );
}
