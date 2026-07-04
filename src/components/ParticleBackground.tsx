import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  color: string;
  opacity: number;
  wave: number;
  waveSpeed: number;
}

interface BlurBlob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speed: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Use ResizeObserver to safely adjust canvas size to the containing div
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Run the canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with high DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((dimensions.width * dimensions.height) / 30000));

    // Create floating particles
    for (let i = 0; i < particleCount; i++) {
      const isWhite = Math.random() > 0.5;
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.15),
        color: isWhite ? '#ffffff' : '#9ca3af', // white or gray
        opacity: Math.random() * 0.5 + 0.1,
        wave: Math.random() * 100,
        waveSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Blurred drifting background blobs
    const blobs: BlurBlob[] = [
      {
        x: dimensions.width * 0.25,
        y: dimensions.height * 0.3,
        targetX: dimensions.width * 0.25,
        targetY: dimensions.height * 0.3,
        radius: Math.min(280, dimensions.width * 0.4),
        color: 'rgba(212, 175, 55, 0.05)', // gold tint
        speed: 0.002,
      },
      {
        x: dimensions.width * 0.75,
        y: dimensions.height * 0.7,
        targetX: dimensions.width * 0.75,
        targetY: dimensions.height * 0.7,
        radius: Math.min(320, dimensions.width * 0.45),
        color: 'rgba(156, 163, 175, 0.04)', // gray tint
        speed: 0.0015,
      },
      {
        x: dimensions.width * 0.5,
        y: dimensions.height * 0.5,
        targetX: dimensions.width * 0.5,
        targetY: dimensions.height * 0.5,
        radius: Math.min(240, dimensions.width * 0.35),
        color: 'rgba(212, 175, 55, 0.03)', // subtle gold tint
        speed: 0.001,
      },
    ];

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // 1. Draw Technical Blueprint Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 70;

      // Vertical lines
      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }

      // 2. Draw and update blurred gradient blobs
      blobs.forEach((blob) => {
        // Move slowly towards target
        if (Math.abs(blob.x - blob.targetX) < 10) {
          blob.targetX = Math.random() * dimensions.width;
        }
        if (Math.abs(blob.y - blob.targetY) < 10) {
          blob.targetY = Math.random() * dimensions.height;
        }

        blob.x += (blob.targetX - blob.x) * blob.speed;
        blob.y += (blob.targetY - blob.y) * blob.speed;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw and update particles floating upward
      particles.forEach((p) => {
        p.y += p.speedY;
        p.wave += p.waveSpeed;
        const currentX = p.x + Math.sin(p.wave) * 8; // Gentle side-to-side sway

        // If particle floats off the top, reset to bottom
        if (p.y < -10) {
          p.y = dimensions.height + 10;
          p.x = Math.random() * dimensions.width;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(currentX, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset alpha
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10 bg-[#0a0a0b] overflow-hidden pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
