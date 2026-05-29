export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: 'What is AIHub Malaysia?',
    a: 'AIHub Malaysia is the premier AI community hub in Malaysia, bringing together AI practitioners, founders, researchers, and enthusiasts through events, workshops, networking sessions, and shared resources. It is operated by AITG Sdn Bhd, based in Penang.',
  },
  {
    q: 'Who runs AIHub Malaysia?',
    a: 'AIHub Malaysia is run by AITG Sdn Bhd (202601016521 (1678618-W)), a Malaysian AI company headquartered in George Town, Penang. The team is passionate about building a strong, inclusive AI ecosystem across Malaysia.',
  },
  {
    q: 'What types of events does AIHub Malaysia organise?',
    a: 'AIHub Malaysia organises a variety of events including AI meetups, panel discussions, hands-on workshops, hackathons, and networking sessions. Events are held across Malaysia and cater to all experience levels — from beginners curious about AI to seasoned engineers and founders.',
  },
  {
    q: 'How can I join the AIHub Malaysia community?',
    a: 'You can join the AIHub Malaysia community by signing up on aihub.com.my, connecting with us on Telegram (@aihubmy), or joining the Discord server. Membership is free and open to anyone interested in AI in Malaysia.',
  },
  {
    q: 'Is AIHub Malaysia only based in Penang?',
    a: 'While AIHub Malaysia is headquartered in Penang, the community is active nationwide. Events and meetups are organised across Malaysia, including Kuala Lumpur, Selangor, and other states, welcoming members from all regions.',
  },
  {
    q: 'What resources does AIHub Malaysia provide?',
    a: 'AIHub Malaysia provides curated AI resources including event recordings, guides, industry news, learning materials, and connections to leading AI tools and platforms. Members also gain access to a network of AI professionals across Malaysia.',
  },
  {
    q: 'Is there a fee to attend AIHub Malaysia events?',
    a: 'Most AIHub Malaysia community events are free to attend. Some specialised workshops or training sessions may have a nominal fee. Check the events page on aihub.com.my for details on each event.',
  },
  {
    q: 'How is AIHub Malaysia related to AITG Sdn Bhd and its other platforms?',
    a: 'AIHub Malaysia is one of several platforms operated under AITG Sdn Bhd, a Malaysian AI company. AITG also operates platforms for AI consulting, AI training (trainai.com.my), AI agents, AI chatbots, and more. AIHub Malaysia focuses specifically on community building and events.',
  },
];

export const HOME_FAQ = FAQS.slice(0, 6);
