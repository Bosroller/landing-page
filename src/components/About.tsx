import { Target, Heart, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const features = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To revolutionize business operations through AI automation and innovative digital solutions, empowering enterprises to thrive in the digital age.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Built on honesty, responsibility, and Islamic ethics. We believe in transparent business practices and creating value that benefits humanity.',
    },
    {
      icon: TrendingUp,
      title: 'Vision',
      description: 'Establishing a global holding network that spans AI innovation, content creation, and digital transformation across continents.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1a1f35] to-[#0F172A]" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins']">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Kilincarslan Enterprises
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
        </div>

        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed text-center">
            Kilincarslan Enterprises is the personal umbrella for all my business ventures – from AI automation
            to content creation to digital brands.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            Our focus is on innovation, automation, ethics, Islamic values, and building global structures
            that transform how businesses operate in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                          border border-cyan-400/10 backdrop-blur-sm hover:border-cyan-400/30
                          transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,188,212,0.3)]
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20
                                group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white font-['Poppins']">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
