import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 188, 212, 0.15), transparent 50%)`,
          }} />
        </div>

        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center gap-2 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm animate-fade-in">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider">INNOVATION POWERED BY AI</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up font-['Poppins']">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Kilincarslan Enterprises
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto animate-slide-up-delay-1 leading-relaxed">
          The Future of AI, Media & Digital Innovation
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up-delay-2">
          A modern corporate group led by Hüseyin Züfer Kilincarslan – comprising AI agencies,
          content creation, social media empire, and digital products
        </p>

        <button
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg
                   hover:shadow-[0_0_40px_rgba(0,188,212,0.6)] transition-all duration-300 animate-slide-up-delay-3
                   hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Explore Divisions</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-0
                        group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-slow"
           style={{ animationDelay: '1s' }} />
    </section>
  );
}
