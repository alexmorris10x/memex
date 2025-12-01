"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ConstellationProps {
  className?: string;
}

export function Constellation({ className = "" }: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const createNodes = () => {
      const rect = canvas.getBoundingClientRect();
      const nodeCount = Math.floor((rect.width * rect.height) / 25000);
      const nodes: Node[] = [];

      for (let i = 0; i < Math.min(nodeCount, 60); i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }

      nodesRef.current = nodes;
    };

    const drawNode = (node: Node, time: number) => {
      const pulse = Math.sin(time * node.pulseSpeed + node.pulseOffset);
      const currentRadius = node.radius * (1 + pulse * 0.3);
      const currentOpacity = node.opacity * (0.7 + pulse * 0.3);

      // Outer glow
      const gradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        currentRadius * 4
      );
      gradient.addColorStop(0, `rgba(124, 58, 237, ${currentOpacity * 0.8})`);
      gradient.addColorStop(0.5, `rgba(124, 58, 237, ${currentOpacity * 0.2})`);
      gradient.addColorStop(1, "rgba(124, 58, 237, 0)");

      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core node
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(237, 237, 237, ${currentOpacity})`;
      ctx.fill();
    };

    const drawConnections = (nodes: Node[], time: number) => {
      const maxDistance = 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            const pulse = Math.sin(time * 0.001 + i + j) * 0.5 + 0.5;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            gradient.addColorStop(
              0,
              `rgba(124, 58, 237, ${opacity * pulse})`
            );
            gradient.addColorStop(
              0.5,
              `rgba(59, 130, 246, ${opacity * pulse * 0.8})`
            );
            gradient.addColorStop(1, `rgba(124, 58, 237, ${opacity * pulse})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const updateNodes = (nodes: Node[]) => {
      const rect = canvas.getBoundingClientRect();

      nodes.forEach((node) => {
        // Mouse interaction
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200;
          node.vx -= (dx / distance) * force * 0.02;
          node.vy -= (dy / distance) * force * 0.02;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Add slight random movement
        node.vx += (Math.random() - 0.5) * 0.02;
        node.vy += (Math.random() - 0.5) * 0.02;

        // Boundary wrapping
        if (node.x < 0) node.x = rect.width;
        if (node.x > rect.width) node.x = 0;
        if (node.y < 0) node.y = rect.height;
        if (node.y > rect.height) node.y = 0;
      });
    };

    const animate = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      updateNodes(nodesRef.current);
      drawConnections(nodesRef.current, time);
      nodesRef.current.forEach((node) => drawNode(node, time));

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    resizeCanvas();
    createNodes();
    animate(0);

    window.addEventListener("resize", () => {
      resizeCanvas();
      createNodes();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
