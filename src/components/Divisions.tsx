import { Bot, Video, Sparkles, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Divisions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const divisions = [
    {
      icon: Bot,
      name: 'ZK.AI',
      tagline: 'AI Automation Agency',
      description: 'AI automation for businesses – chatbots, outreach, websites, email processes and business automation',
      url: 'https://www.zk-ai.agency',
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(0, 188, 212, 0.4)',
    },
    {
      icon: Video,
      name: 'DMK Creations',
      tagline: 'Content Studio',
      description: 'Full-service AI & real content creation studio – for brands, creators and enterprises',
      url: '#',
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(124, 58, 237, 0.4)',
    },
    {
      icon: Sparkles,
      name: 'LYRA',
      tagline: 'AI Social Media Ecosystem',
      description: 'AI assistant, AI character & complete social media production automation',
      url: '#',
      gradient: 'from-cyan-400 to-purple-500',
      glowColor: 'rgba(147, 51, 234, 0.4)',
    },
    {
      icon: Clock,
      name: 'Coming Soon',
      tagline: 'Future Innovation',
      description: 'More brands launching soon...',
      url: '#',
      gradient: 'from-slate-600 to-slate-800',
      glowColor: 'rgba(100, 116, 139, 0.4)',
      comingSoon: true,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 188, 212, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins']">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Divisions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A portfolio of cutting-edge ventures pushing the boundaries of AI and digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <div
                key={division.name}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80
                              border border-slate-700/50 backdrop-blur-sm overflow-hidden
                              transition-all duration-500 hover:scale-[1.02] hover:border-slate-600
                              ${!division.comingSoon ? 'hover:shadow-[0_0_60px_var(--glow)]' : ''}`}
                     style={{ '--glow': division.glowColor } as React.CSSProperties}>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-5`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,188,212,0.1),transparent_70%)]" />
                  </div>

                  <div className="relative">
                    <div className={`mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${division.gradient}
                                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                                     bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent
                                     border border-current/20`}>
                        {division.tagline}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white font-['Poppins'] group-hover:text-cyan-400
                                 transition-colors duration-300">
                      {division.name}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed min-h-[4rem]">
                      {division.description}
                    </p>

                    {!division.comingSoon ? (
                      <a
                        href={division.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-6 py-3 rounded-full font-semibold
                                 bg-gradient-to-r ${division.gradient}
                                 hover:shadow-[0_0_30px_var(--glow)] transition-all duration-300
                                 hover:scale-105 active:scale-95`}
                        style={{ '--glow': division.glowColor } as React.CSSProperties}
                      >
                        Visit Division
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                                    bg-slate-700/50 text-slate-400 border border-slate-600">
                        <Clock className="w-4 h-4 animate-spin-slow" />
                        <span className="font-semibold">Launching Soon</span>
                      </div>
                    )}
                  </div>

                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${division.gradient}
                                rounded-full blur-[100px] opacity-0 group-hover:opacity-20
                                transition-opacity duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
