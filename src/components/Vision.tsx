import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Vision() {
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

  const timeline = [
    {
      year: '2024',
      title: 'Foundation',
      items: ['Launch ZK.AI', 'Establish core infrastructure', 'Build initial AI automation systems'],
      color: 'cyan',
    },
    {
      year: '2025',
      title: 'Expansion',
      items: ['Expand DMK Creations', 'Launch LYRA ecosystem', 'Scale content production'],
      color: 'purple',
    },
    {
      year: '2026+',
      title: 'Global Vision',
      items: ['Global Content Network', 'AI Media Companies', 'Virtual Influencers', 'International Holding Network'],
      color: 'cyan',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1a1f35] to-[#0F172A]" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins']">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Vision
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A roadmap to building the future of AI-powered enterprise
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400" />

          <div className="space-y-16">
            {timeline.map((phase, index) => (
              <div
                key={phase.year}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl
                                    border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30
                                    transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,188,212,0.3)]">
                        <h3 className={`text-3xl font-bold mb-2 font-['Poppins'] ${phase.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                          {phase.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{phase.year}</p>
                        <ul className="space-y-2 text-left">
                          {phase.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${phase.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color === 'cyan' ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'}
                                  flex items-center justify-center text-2xl font-bold border-4 border-[#0F172A]
                                  shadow-[0_0_30px_var(--glow)] animate-pulse-slow`}
                         style={{ '--glow': phase.color === 'cyan' ? 'rgba(0, 188, 212, 0.5)' : 'rgba(124, 58, 237, 0.5)' } as React.CSSProperties}>
                      {phase.year.slice(-2)}
                    </div>
                  </div>

                  <div className="flex-1 md:text-left">
                    {index % 2 !== 0 && (
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl
                                    border border-slate-700/50 backdrop-blur-sm hover:border-purple-400/30
                                    transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                        <h3 className={`text-3xl font-bold mb-2 font-['Poppins'] ${phase.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                          {phase.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{phase.year}</p>
                        <ul className="space-y-2">
                          {phase.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${phase.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
