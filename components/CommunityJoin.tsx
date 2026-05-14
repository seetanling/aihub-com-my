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
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm font-display
                     transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
          style={{ backgroundColor: '#5865F2', color: 'white' }}
        >
          <DiscordIcon className="w-5 h-5 flex-shrink-0" />
          Join Discord
        </a>
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm font-display
                     transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
          style={{ backgroundColor: '#26A5E4', color: 'white' }}
        >
          <TelegramIcon className="w-5 h-5 flex-shrink-0" />
          Join Telegram
        </a>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl"
             style={{ backgroundColor: 'var(--color-forest)' }}>
      {/* Decorative circle */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
           style={{ backgroundColor: 'var(--color-terracotta)' }} />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-8"
           style={{ backgroundColor: 'var(--color-cream)' }} />

      <div className="relative z-10 p-8 sm:p-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-display"
              style={{ backgroundColor: 'rgba(224,120,86,0.2)', color: 'var(--color-terracotta)' }}>
          Community
        </span>

        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-3 leading-tight">
          The conversation doesn't<br />stop after the event.
        </h2>

        <p className="text-lg mb-8 leading-relaxed max-w-xl"
           style={{ color: 'rgba(244,237,228,0.75)' }}>
          Join our Discord and Telegram to keep the energy going — share what you're building,
          ask questions, find collaborators, and get early access to every event.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Discord */}
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold font-display
                       transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            style={{ backgroundColor: '#5865F2', color: 'white' }}
          >
            <DiscordIcon className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm">Join on Discord</p>
              <p className="text-xs opacity-70 font-normal">Discussions, resources, memes</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold font-display
                       transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            style={{ backgroundColor: '#26A5E4', color: 'white' }}
          >
            <TelegramIcon className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm">Join on Telegram</p>
              <p className="text-xs opacity-70 font-normal">Event updates + announcements</p>
            </div>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-2">
            {[
              'https://api.dicebear.com/9.x/thumbs/svg?seed=comm1&backgroundColor=E07856',
              'https://api.dicebear.com/9.x/thumbs/svg?seed=comm2&backgroundColor=264E36',
              'https://api.dicebear.com/9.x/thumbs/svg?seed=comm3&backgroundColor=C96840',
              'https://api.dicebear.com/9.x/thumbs/svg?seed=comm4&backgroundColor=3D7152',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-forest-500" />
            ))}
          </div>
          <p className="text-sm" style={{ color: 'rgba(244,237,228,0.65)' }}>
            Join 400+ AI builders, founders, and researchers in Malaysia
          </p>
        </div>
      </div>
    </section>
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
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}
