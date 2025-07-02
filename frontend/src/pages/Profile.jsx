import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { MapPin, Mail, Download, ExternalLink } from 'lucide-react';
import { profileData } from '../data/mockData';

const Profile = () => {
  return (
    <div className="min-h-screen relative z-20 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5"></div>
          <CardContent className="relative p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-cyan-400/50 cyber-glow">
                  <img 
                    src={profileData.avatar} 
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-black cyber-glow animate-pulse"></div>
              </div>
              
              {/* Info */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-wider cyber-glow">
                    {profileData.name}
                  </h1>
                  <p className="text-xl text-cyan-400 font-mono mt-2">
                    {profileData.title}
                  </p>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  {profileData.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-400" />
                    {profileData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={16} className="text-cyan-400" />
                    {profileData.email}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-mono cyber-glow">
                    <Download size={16} className="mr-2" />
                    DOWNLOAD CV
                  </Button>
                  <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono">
                    <ExternalLink size={16} className="mr-2" />
                    PORTFOLIO
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5"></div>
          <CardContent className="relative p-8">
            <h2 className="text-3xl font-bold text-white font-mono mb-6 cyber-glow">
              &lt;COMPETÊNCIAS/&gt;
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {profileData.skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="
                    p-3 text-center border-cyan-400/40 text-cyan-400 
                    hover:bg-cyan-400/10 transition-all duration-300
                    font-mono cyber-glow hover:scale-105
                  "
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                3+
              </div>
              <div className="text-gray-300 font-mono mt-2">
                ANOS DE EXPERIÊNCIA
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                50+
              </div>
              <div className="text-gray-300 font-mono mt-2">
                PROJETOS CONCLUÍDOS
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                100%
              </div>
              <div className="text-gray-300 font-mono mt-2">
                SATISFAÇÃO CLIENT
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white font-mono mb-4">
              VAMOS CONSTRUIR O FUTURO JUNTOS?
            </h3>
            <p className="text-gray-300 mb-6">
              Sempre aberto para discutir projetos inovadores e oportunidades cyberpunk.
            </p>
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-mono text-lg px-8 py-3 cyber-glow">
              ENTRAR EM CONTATO
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;