import { Server, Cloud, Cpu, Workflow, Network } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Infrastructure() {
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

  const infrastructure = [
    {
      icon: Server,
      name: 'Raspberry Pi Automations',
      description: 'Edge computing infrastructure for real-time processing',
    },
    {
      icon: Cloud,
      name: 'Cloudflare Tunnels',
      description: 'Secure, scalable global network routing',
    },
    {
      icon: Workflow,
      name: 'Multi-n8n System',
      description: 'Advanced workflow automation architecture',
    },
    {
      icon: Cpu,
      name: 'AI Pipelines',
      description: 'Intelligent data processing and model orchestration',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1a1f35] to-[#0F172A]" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 188, 212, 0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 188, 212, 0.5) 2px, transparent 2px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">POWERING EVERYTHING</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Poppins']">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Eternal Workspace
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The infrastructure behind every division – a sophisticated tech stack built for scale
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 animate-pulse-slow" />
          </div>

          <div className={`relative flex items-center justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative p-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600
                          shadow-[0_0_80px_rgba(0,188,212,0.5)] animate-pulse-slow">
              <Network className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {infrastructure.map((item, index) => {
              const Icon = item.icon;
              const angle = (index * 90) - 45;
              const distance = 200;

              return (
                <div
                  key={item.name}
                  className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl
                                  blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80
                                  border border-cyan-400/10 backdrop-blur-sm hover:border-cyan-400/30
                                  transition-all duration-500 hover:scale-105">

                      <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20
                                    group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Icon className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-white font-['Poppins'] group-hover:text-cyan-400
                                   transition-colors duration-300">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent
                                    -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                          border border-cyan-400/20 backdrop-blur-sm text-center
                          transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <span className="text-cyan-400 font-semibold">Built for resilience and scalability.</span> Every component
              works in harmony to power our AI-driven operations, ensuring 24/7 availability and lightning-fast performance
              across all divisions.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
    </section>
  );
}
