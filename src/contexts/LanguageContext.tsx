import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { translations } from '../types';

const en: translations = {
  nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education', projects: 'Projects', blog: 'Blog', testimonials: 'Testimonials', contact: 'Contact' },
  hero: { greeting: 'Hello, I\'m Jagdish', prefix: 'I\'m a', roles: ['Full Stack Developer', 'Software Developer'], viewWork: 'View My Work', contactMe: 'Contact Me' },
  about: { title: 'About Me', description1: 'I\'m Jagdish, a passionate Computer Science student at GLA University with a strong focus on full-stack web development. I love building modern, performant, and user-friendly applications that solve real-world problems.', description2: 'My expertise spans across modern JavaScript frameworks, backend technologies, and database systems. I\'m always eager to learn new technologies and contribute to meaningful projects.', techStack: 'Tech Stack' },
  contact: { title: 'Get In Touch', name: 'Name', email: 'Email', phone: 'Phone', location: 'Location', subject: 'Subject', message: 'Message', send: 'Send Message', sending: 'Sending...', success: 'Message sent successfully!', error: 'Failed to send. Please try again.' },
  projects: { title: 'Featured Projects', launchApp: 'Launch App', viewLive: 'View Live' },
  skills: { title: 'Skills & Expertise', frontend: 'Frontend', backend: 'Backend', tools: 'Tools' },
  blog: { title: 'Latest Articles', readMore: 'Read More' },
  experience: { title: 'Experience' },
  education: { title: 'Education' },
  testimonials: { title: 'Testimonials' }
};

const hi: translations = {
  nav: { home: 'होम', about: 'मेरे बारे में', skills: 'स्किल्स', experience: 'अनुभव', education: 'शिक्षा', projects: 'प्रोजेक्ट्स', blog: 'ब्लॉग', testimonials: 'प्रशंसापत्र', contact: 'सम्पर्क' },
  hero: { greeting: 'नमस्ते, मैं जगदीश हूं', prefix: 'मैं एक', roles: ['फुल-स्टैक डेवलपर हूँ', 'सॉफ्टवेयर डेवलपर हूँ'], viewWork: 'मेरा काम देखें', contactMe: 'संपर्क करें' },
  about: { title: 'मेरे बारे में', description1: 'मैं जगदीश हूं, जीएलए यूनिवर्सिटी में कंप्यूटर साइंस का छात्र हूं और फुल-स्टैक वेब डेवलपमेंट में मेरी रुचि है। मुझे आधुनिक तकनीकों से वेब एप्लिकेशन बनाने में बहुत शौक है।', description2: 'मेरी विशेषज्ञता आधुनिक जावास्क्रिप्ट फ्रेमवर्क, बैकएंड तकनीक और डेटाबेस सिस्टम में है। मैं हमेशा नई तकनीकें सीखने और महत्वपूर्ण प्रोजेक्ट्स में योगदान देने के लिए उत्साही हूं।', techStack: 'तकनीक स्टैक' },
  contact: { title: 'संपर्क करें', name: 'नाम', email: 'ईमेल', phone: 'फोन', location: 'स्थान', subject: 'विषय', message: 'संदेश', send: 'संदेश भेजें', sending: 'भेज रहे हैं...', success: 'संदेश सफलतापूर्वक भेजा गया!', error: 'भेजने में विफल। कृपया पुनः प्रयास करें।' },
  projects: { title: 'फीचर्ड प्रोजेक्ट्स', launchApp: 'ऐप लॉन्च करें', viewLive: 'लाइव देखें' },
  skills: { title: 'स्किल्स और विशेषज्ञता', frontend: 'फ्रंटएंड', backend: 'बैकएंड', tools: 'टूल्स' },
  blog: { title: 'नवीनतम लेख', readMore: 'और पढ़ें' },
  experience: { title: 'अनुभव' },
  education: { title: 'शिक्षा' },
  testimonials: { title: 'प्रशंसापत्र' }
};

interface LangContextType {
  lang: 'en' | 'hi';
  t: typeof en;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const t = lang === 'en' ? en : hi;

  const toggleLang = () => setLang((l) => (l === 'en' ? 'hi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
