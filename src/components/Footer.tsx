import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@kilincarslan.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] to-[#0F172A]" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 188, 212, 0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Poppins']">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Kilincarslan Enterprises
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Building the future of AI, media, and digital innovation. One division at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-block
                             hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative p-3 rounded-lg bg-slate-800/50 border border-slate-700/50
                             hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              Kilincarslan Enterprises © {currentYear}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Led by <span className="text-cyan-400 font-semibold">Hüseyin Züfer Kilincarslan</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
    </footer>
  );
}
