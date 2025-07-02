import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Building, Calendar, Clock, TrendingUp, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/mockData';

const Experience = () => {
  return (
    <div className="min-h-screen relative z-20 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-wider cyber-glow">
            &lt;EXPERIÊNCIA_PROFISSIONAL/&gt;
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jornada através de empresas inovadoras construindo o futuro digital
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 lg:transform lg:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black lg:transform lg:-translate-x-1/2 cyber-glow z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl text-white font-mono cyber-glow">
                            {exp.position}
                          </CardTitle>
                          <p className="text-cyan-400 font-mono flex items-center gap-2">
                            <Building size={16} />
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Badge className="bg-green-400/20 text-green-400 border-green-400/40 font-mono">
                            <Calendar size={14} className="mr-1" />
                            {exp.duration}
                          </Badge>
                          <Badge variant="outline" className="border-blue-400/40 text-blue-400 font-mono">
                            <Clock size={14} className="mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative space-y-6">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                          <TrendingUp size={18} className="text-cyan-400" />
                          PRINCIPAIS CONQUISTAS:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-3">
                              <span className="text-cyan-400 font-mono text-sm mt-1">▶</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white font-mono">
                          TECNOLOGIAS UTILIZADAS:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="outline" 
                              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors font-mono"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button 
                          variant="outline" 
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono cyber-glow"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          VER PROJETOS
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="text-gray-400 hover:text-cyan-400 font-mono"
                        >
                          DETALHES
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white font-mono mb-6 text-center cyber-glow">
              RESUMO DA EXPERIÊNCIA
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  3+
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  ANOS DE EXPERIÊNCIA
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {experienceData.length}
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  EMPRESAS
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  50+
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  PROJETOS ENTREGUES
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  15+
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  TECNOLOGIAS
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">
                "Evolução constante através de desafios tecnológicos complexos"
              </p>
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-mono text-lg px-8 py-3 cyber-glow">
                VER RECOMENDAÇÕES
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills Progress */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white font-mono mb-6 cyber-glow">
              EVOLUÇÃO DE HABILIDADES
            </h3>
            
            <div className="space-y-6">
              {[
                { skill: "Full Stack Development", level: 95 },
                { skill: "Cloud Architecture", level: 90 },
                { skill: "Machine Learning", level: 85 },
                { skill: "DevOps & CI/CD", level: 88 },
                { skill: "Team Leadership", level: 82 },
                { skill: "Cybersecurity", level: 78 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-mono">{item.skill}</span>
                    <span className="text-cyan-400 font-mono">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full cyber-glow transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;