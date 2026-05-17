import Link from 'next/link';

type Props = {
  compact?: boolean;
};

export default function CommunityJoin({ compact = false }: Props) {
  const discordUrl  = process.env.NEXT_PUBLIC_DISCORD_URL  || '#';
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || '#';

  if (compact) {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={discordUrl} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm font-display
                      transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
           style={{ backgroundColor: '#5865F2', color: 'white' }}>
          <DiscordIcon className="w-5 h-5 flex-shrink-0" />
          Join Discord
        </a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm font-display
                      transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
           style={{ backgroundColor: '#26A5E4', color: 'white' }}>
          <TelegramIcon className="w-5 h-5 flex-shrink-0" />
          Join Telegram
        </a>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl hex-bg"
         style={{ border: '1px solid rgba(201,168,76,0.25)' }}>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

      {/* Corner hex decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,5 190,52 190,148 100,195 10,148 10,52"
            fill="none" stroke="#C9A84C" strokeWidth="1" />
          <polygon points="100,30 165,67 165,133 100,170 35,133 35,67"
            fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" />
          <circle cx="100" cy="100" r="6" fill="#C9A84C" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 p-8 sm:p-12">

        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs" style={{ color: '#C9A84C' }}>★</span>
          <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Community</span>
          <span className="text-xs" style={{ color: '#C9A84C' }}>★</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
          The conversation doesn&apos;t<br />stop after the event.
        </h2>

        <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: '#8DA4BE' }}>
          Join our Discord and Telegram to keep the energy going — share what you&apos;re building,
          find collaborators, and get early access to every event.
        </p>

        {/* Channel buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={discordUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-6 py-4 rounded-xl font-semibold font-display
                        transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
             style={{ backgroundColor: '#5865F2', color: 'white' }}>
            <DiscordIcon className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm">Join on Discord</p>
              <p className="text-xs opacity-70 font-normal">Discussions, resources, memes</p>
            </div>
          </a>

          <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-6 py-4 rounded-xl font-semibold font-display
                        transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
             style={{ backgroundColor: '#26A5E4', color: 'white' }}>
            <TelegramIcon className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm">Join on Telegram</p>
              <p className="text-xs opacity-70 font-normal">Event updates + announcements</p>
            </div>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div className="flex -space-x-2">
            {[
              ['comm1', 'C9A84C'],
              ['comm2', '162A50'],
              ['comm3', 'B8902A'],
              ['comm4', '1E3A5F'],
            ].map(([seed, bg], i) => (
              <img
                key={i}
                src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${seed}&backgroundColor=${bg}`}
                alt=""
                className="w-8 h-8 rounded-full border-2"
                style={{ borderColor: '#112040' }}
              />
            ))}
          </div>
          <p className="text-sm" style={{ color: '#8DA4BE' }}>
            Join <span style={{ color: '#E2CA7D', fontWeight: 600 }}>400+</span> AI builders, founders &amp; researchers in Malaysia
          </p>
        </div>
      </div>
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032