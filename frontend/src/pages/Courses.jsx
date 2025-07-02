import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Award, ExternalLink, Calendar } from 'lucide-react';
import { coursesData } from '../data/mockData';

const Courses = () => {
  return (
    <div className="min-h-screen relative z-20 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-wider cyber-glow">
            &lt;CURSOS_ESPECIALIZAÇÃO/&gt;
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certificações avançadas em tecnologias emergentes e habilidades futurísticas
          </p>
        </div>

        {/* Courses Grid */}
        <div className="space-y-8">
          {coursesData.map((course) => (
            <Card key={course.id} className="bg-black/80 border-cyan-400/30 backdrop-blur-md overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-white font-mono cyber-glow">
                      {course.title}
                    </CardTitle>
                    <p className="text-cyan-400 font-mono">
                      {course.institution}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/40 font-mono">
                      <Award size={14} className="mr-1" />
                      {course.certificate}
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/40 text-blue-400 font-mono">
                      <Clock size={14} className="mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="outline" className="border-green-400/40 text-green-400 font-mono">
                      <Calendar size={14} className="mr-1" />
                      {course.completedAt}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white font-mono">
                    TECNOLOGIAS DOMINADAS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors font-mono"
                      >
                        {skill}
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
                    VER CERTIFICADO
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-gray-400 hover:text-cyan-400 font-mono"
                  >
                    DETALHES DO CURSO
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white font-mono mb-6 text-center cyber-glow">
              ESTATÍSTICAS DE APRENDIZADO
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {coursesData.reduce((total, course) => total + parseInt(course.duration), 0)}h
                </div>
                <div className="text-gray-300 font-mono">
                  TOTAL DE HORAS
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {coursesData.length}
                </div>
                <div className="text-gray-300 font-mono">
                  CERTIFICAÇÕES
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {coursesData.reduce((total, course) => total + course.skills.length, 0)}
                </div>
                <div className="text-gray-300 font-mono">
                  SKILLS ADQUIRIDAS
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-cyan-400/10 to-blue-600/10 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white font-mono mb-4">
              SEMPRE APRENDENDO NOVAS TECNOLOGIAS
            </h3>
            <p className="text-gray-300 mb-6">
              O futuro da tecnologia evolui rapidamente. Mantenho-me atualizado com as últimas inovações.
            </p>
            <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-lg px-8 py-3 cyber-glow">
              VER PRÓXIMOS CURSOS
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;