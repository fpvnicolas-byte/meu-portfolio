"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Zap, Cpu, Eye, Database, Code2, Camera, Bot } from "lucide-react";

const techStackData = [
  {
    icon: Code2,
    title: "Fullstack Development",
    description: "Criação de SaaS e aplicações web de alta performance, desde o conceito até o deploy.",
    color: "from-blue-400 to-cyan-400",
    items: ["React", "Next.js", "Node.js", "TypeScript", "Python"]
  },
  {
    icon: Cpu,
    title: "Hardware Maker",
    description: "Montagem de estações de edição customizadas e drones FPV para produção audiovisual profissional.",
    color: "from-purple-400 to-pink-400",
    items: ["Custom PCs", "Drones FPV", "Workstations", "Storage Solutions"]
  },
  {
    icon: Bot,
    title: "IA-First Workflow",
    description: "Pós-produção otimizada por inteligência artificial para eficiência máxima e qualidade superior.",
    color: "from-green-400 to-emerald-400",
    items: ["Auto-Editing", "Color Grading AI", "Sound Design AI", "Content Analysis"]
  }
];

export function TechStackDNA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tech Stack & <span className="gradient-text">DNA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A FVA é movida por uma combinação única de tecnologias e metodologias que revolucionam a produção audiovisual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techStackData.map((tech, index) => {
            const IconComponent = tech.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass glass-hover p-8 rounded-3xl h-full">
                  <div className="space-y-6">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-white">
                      {tech.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {tech.description}
                    </p>

                    {/* Tech items */}
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Zap,
              title: "Performance",
              description: "Soluções otimizadas para máxima eficiência"
            },
            {
              icon: Eye,
              title: "Visão",
              description: "Narrativas visuais que impactam e inspiram"
            },
            {
              icon: Database,
              title: "Dados",
              description: "Decisões baseadas em analytics e insights"
            },
            {
              icon: Smartphone,
              title: "Inovação",
              description: "Tecnologias emergentes aplicadas criativamente"
            }
          ].map((value, index) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass glass-hover p-6 rounded-2xl text-center"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass glass-hover p-12 rounded-3xl max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center animate-glow">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                "Revolucionando a produção audiovisual através da fusão perfeita entre
                <span className="gradient-text"> engenharia de software </span>
                e
                <span className="gradient-text"> narrativa visual</span>,
                criando experiências que transcendem as fronteiras tradicionais do mercado."
              </blockquote>
              <cite className="text-gray-400 font-medium">
                — Nícolas - Future Vision Audiovisual
              </cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
