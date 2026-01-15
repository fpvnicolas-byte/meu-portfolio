"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink, Award, TrendingUp } from "lucide-react";

const portfolioCases = [
  {
    id: "rom-concept",
    title: "ROM Concept",
    description: "Audiovisual para o maior salão do mundo",
    category: "Corporate",
    stats: "50+ vídeos produzidos",
    size: "large",
    gradient: "from-blue-400 to-purple-400",
    icon: Award
  },
  {
    id: "record-tv",
    title: "Record TV",
    description: "Produção nacional de escala",
    category: "Broadcast",
    stats: "Via Bronks",
    size: "medium",
    gradient: "from-red-400 to-pink-400",
    icon: TrendingUp
  },
  {
    id: "podporco",
    title: "PodPorco",
    description: "Case viral de 4 milhões de views",
    category: "Content",
    stats: "4M+ visualizações",
    size: "medium",
    gradient: "from-green-400 to-teal-400",
    icon: Play
  },
  {
    id: "tecnohidro",
    title: "Tecnohidro",
    description: "Engenharia e Geologia Ambiental",
    category: "Industrial",
    stats: "Documentário técnico",
    size: "small",
    gradient: "from-cyan-400 to-blue-400",
    icon: ExternalLink
  },
  {
    id: "ethereum-brasil",
    title: "Ethereum Brasil",
    description: "Tecnologia e Inovação",
    category: "Tech",
    stats: "Blockchain & Web3",
    size: "small",
    gradient: "from-purple-400 to-indigo-400",
    icon: TrendingUp
  },
  {
    id: "smc-corporation",
    title: "SMC Corporation",
    description: "Tecnologia e Indústria",
    category: "Corporate",
    stats: "Soluções empresariais",
    size: "small",
    gradient: "from-orange-400 to-red-400",
    icon: Award
  }
];

export function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Portfolio <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cases que demonstram nossa expertise em unir tecnologia de ponta com narrativa visual impactante.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {portfolioCases.map((project, index) => {
            const IconComponent = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative ${getSizeClasses(project.size)}`}
              >
                <div className="glass glass-hover p-6 rounded-3xl h-full flex flex-col justify-between overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-sm text-gray-400 font-medium">
                        {project.stats}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                  {/* Action button */}
                  <div className="relative z-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full glass glass-hover px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-medium group/btn"
                    >
                      <span>Ver Projeto</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass glass-hover p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                Pronto para seu próximo projeto?
              </h3>
              <p className="text-gray-300 text-lg">
                Cada case representa nossa dedicação em entregar excelência técnica aliada à criatividade excepcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass glass-hover px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <span>Iniciar Projeto</span>
                  <Play className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass glass-hover px-8 py-4 rounded-xl text-white font-semibold border border-white/20"
                >
                  Ver Portfólio Completo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
