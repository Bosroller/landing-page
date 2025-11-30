import { Brain, MessageSquare, Settings } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Advisory() {
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

  const services = [
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Strategic implementation of AI systems to transform your business operations and unlock exponential growth',
    },
    {
      icon: MessageSquare,
      title: 'Content Strategy',
      description: 'Data-driven content frameworks that amplify your brand presence and drive measurable engagement',
    },
    {
      icon: Settings,
      title: 'Business Systems',
      description: 'Comprehensive system design and optimization to streamline workflows and maximize efficiency',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(124, 58, 237, 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-purple-400/30 rounded-full bg-purple-400/5 backdrop-blur-sm">
            <span className="text-purple-400 text-sm font-semibold tracking-wider">EXCLUSIVE ADVISORY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Poppins']">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Personal Advisory & AI Consulting
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">by H.Z. Kilincarslan</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 mx-auto" />
        </div>

        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            Direct access to strategic guidance and technical expertise from the founder.
            Tailored consulting for enterprises and visionaries ready to leverage AI and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                              border border-purple-400/10 backdrop-blur-sm hover:border-purple-400/30
                              transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]
                              overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative text-center">
                    <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white font-['Poppins'] group-hover:text-purple-400
                                 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400
                                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-semibold text-lg
                           hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300
                           hover:scale-105 active:scale-95">
            <span className="relative z-10">Request Consultation</span>
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
                    bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-[120px]" />
    </section>
  );
}
