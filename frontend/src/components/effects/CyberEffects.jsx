import React, { useEffect, useRef } from 'react';

const CyberEffects = () => {
  const matrixRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Matrix Rain Effect
    const canvas = matrixRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ffff';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(drawMatrix, 35);

    // Floating Particles
    const particlesCanvas = particlesRef.current;
    const particlesCtx = particlesCanvas.getContext('2d');
    
    const resizeParticlesCanvas = () => {
      particlesCanvas.width = window.innerWidth;
      particlesCanvas.height = window.innerHeight;
    };
    
    resizeParticlesCanvas();
    window.addEventListener('resize', resizeParticlesCanvas);

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const drawParticles = () => {
      particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > particlesCanvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > particlesCanvas.height) particle.vy *= -1;
        
        particlesCtx.save();
        particlesCtx.globalAlpha = particle.opacity;
        particlesCtx.fillStyle = '#00ffff';
        particlesCtx.shadowBlur = 10;
        particlesCtx.shadowColor = '#00ffff';
        particlesCtx.beginPath();
        particlesCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        particlesCtx.fill();
        particlesCtx.restore();
      });
    };

    const particlesInterval = setInterval(drawParticles, 16);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(particlesInterval);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', resizeParticlesCanvas);
    };
  }, []);

  return (
    <>
      {/* Matrix Rain Background */}
      <canvas
        ref={matrixRef}
        className="fixed inset-0 z-0 opacity-10"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Floating Particles */}
      <canvas
        ref={particlesRef}
        className="fixed inset-0 z-0 opacity-30"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Flying Car Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="flying-car">
          <div className="car-body"></div>
          <div className="car-trail"></div>
        </div>
      </div>

      {/* Scan Lines */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="scan-lines"></div>
      </div>
    </>
  );
};

export default CyberEffects;