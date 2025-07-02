import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, ExternalLink, Star, Code, Zap } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        filter === 'featured' ? project.featured : project.status === filter
      );

  const filters = [
    { id: 'all', label: 'TODOS', count: projectsData.length },
    { id: 'featured', label: 'DESTACADOS', count: projectsData.filter(p => p.featured).length },
    { id: 'Concluído', label: 'CONCLUÍDOS', count: projectsData.filter(p => p.status === 'Concluído').length },
    { id: 'Em desenvolvimento', label: 'EM DESENVOLVIMENTO', count: projectsData.filter(p => p.status === 'Em desenvolvimento').length }
  ];

  return (
    <div className="min-h-screen relative z-20 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-wider cyber-glow">
            &lt;PROJETOS_INOVADORES/&gt;
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Criações que demonstram expertise em tecnologias emergentes e design futurístico
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filterItem) => (
                <Button
                  key={filterItem.id}
                  variant={filter === filterItem.id ? "default" : "outline"}
                  className={`
                    font-mono transition-all duration-300
                    ${filter === filterItem.id 
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300 cyber-glow' 
                      : 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10'
                    }
                  `}
                  onClick={() => setFilter(filterItem.id)}
                >
                  {filterItem.label} ({filterItem.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-black/80 border-cyan-400/30 backdrop-blur-md overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/40 font-mono">
                      <Star size={14} className="mr-1" />
                      DESTAQUE
                    </Badge>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`font-mono ${
                      project.status === 'Concluído' 
                        ? 'bg-green-400/20 text-green-400 border-green-400/40' 
                        : 'bg-blue-400/20 text-blue-400 border-blue-400/40'
                    }`}
                  >
                    <Zap size={14} className="mr-1" />
                    {project.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="relative">
                <CardTitle className="text-xl text-white font-mono cyber-glow">
                  {project.title}
                </CardTitle>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                    <Code size={16} className="text-cyan-400" />
                    STACK TECNOLÓGICO:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono cyber-glow flex-1 min-w-[120px]"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    CÓDIGO
                  </Button>
                  <Button 
                    className="bg-cyan-400 hover:bg-cyan-300 text-black font-mono flex-1 min-w-[120px] cyber-glow"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    DEMO LIVE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white font-mono mb-6 text-center cyber-glow">
              ESTATÍSTICAS DOS PROJETOS
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {projectsData.length}
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  PROJETOS TOTAIS
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {projectsData.filter(p => p.featured).length}
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  EM DESTAQUE
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {projectsData.filter(p => p.status === 'Concluído').length}
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  CONCLUÍDOS
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400 font-mono cyber-glow">
                  {new Set(projectsData.flatMap(p => p.technologies)).size}
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  TECNOLOGIAS
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Projects Showcase */}
        <Card className="bg-gradient-to-r from-cyan-400/10 to-blue-600/10 border-cyan-400/30 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white font-mono mb-4">
              PRÓXIMOS LANÇAMENTOS
            </h3>
            <p className="text-gray-300 mb-6">
              Sempre trabalhando em projetos inovadores que empurram os limites da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-mono cyber-glow">
                VER ROADMAP
              </Button>
              <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono">
                CONTRIBUIR
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;