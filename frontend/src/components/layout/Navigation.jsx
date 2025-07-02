import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { profileData } from '../../data/mockData';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'PERFIL', icon: '👤' },
    { path: '/cursos', label: 'CURSOS', icon: '🎓' },
    { path: '/experiencias', label: 'EXPERIÊNCIAS', icon: '💼' },
    { path: '/projetos', label: 'PROJETOS', icon: '🚀' }
  ];

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ item, mobile = false }) => (
    <Link
      to={item.path}
      className={`
        relative group px-4 py-2 transition-all duration-300
        ${isActive(item.path) 
          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
          : 'text-gray-300 hover:text-cyan-400'
        }
        ${mobile ? 'block w-full text-left rounded-lg mb-2' : 'rounded-lg'}
        cyber-glow
      `}
      onClick={() => mobile && setIsOpen(false)}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{item.icon}</span>
        <span className="font-mono font-medium tracking-wider">{item.label}</span>
      </span>
      {!mobile && (
        <div className={`
          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500
          transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
        `} />
      )}
    </Link>
  );

  const SocialLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'justify-center' : ''} gap-4`}>
      <a 
        href={profileData.socialMedia.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-cyan-400 transition-colors cyber-glow"
      >
        <Github size={20} />
      </a>
      <a 
        href={profileData.socialMedia.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-cyan-400 transition-colors cyber-glow"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href={profileData.socialMedia.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-cyan-400 transition-colors cyber-glow"
      >
        <Instagram size={20} />
      </a>
      <a 
        href={`mailto:${profileData.email}`}
        className="p-2 text-gray-400 hover:text-cyan-400 transition-colors cyber-glow"
      >
        <Mail size={20} />
      </a>
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-cyan-400 font-mono tracking-wider cyber-glow">
              &lt;ALEX_CYBER/&gt;
            </Link>
            <div className="flex gap-2">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </div>
          </div>
          <SocialLinks />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-400/30">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-cyan-400 font-mono tracking-wider cyber-glow">
            &lt;ALEX_CYBER/&gt;
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-cyan-400 hover:text-cyan-300">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-cyan-400/30 backdrop-blur-md">
              <div className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.path} item={item} mobile />
                ))}
                <div className="pt-6 border-t border-cyan-400/30">
                  <SocialLinks mobile />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;