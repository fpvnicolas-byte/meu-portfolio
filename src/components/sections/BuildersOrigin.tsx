"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Camera, Cpu, Zap } from "lucide-react";
import { Cover } from "@/components/ui/cover";

const timelineData = [
  {
    year: "13 anos",
    title: "O Início Autodidata",
    description: "Primeiros passos no mundo digital através de blogs em HTML e Photoshop. A curiosidade técnica que moldaria o futuro.",
    icon: Code,
    color: "text-blue-400"
  },
  {
    year: "18 anos",
    title: "Dualidade Técnica",
    description: "Equilibrando desenvolvimento na Berrini (Direct One) e Ciência da Computação, enquanto cruzava SP com um DJI Phantom no banco traseiro de um Uno Quadrado.",
    icon: Camera,
    color: "text-purple-400"
  },
  {
    year: "Maturidade",
    title: "Trajetória Executiva",
    description: "Passagens por InBrands, NPE e gestão tecnológica milionária no Parque Mirante (Allianz Parque). A consolidação da expertise técnica e criativa.",
    icon: Cpu,
    color: "text-green-400"
  }
];

export function BuildersOrigin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="builders-origin" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Builder's <Cover><span className="gradient-text">Origin</span></Cover>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A jornada que une código e criatividade, forjando a identidade da FVA através de experiências transformadoras.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 opacity-30" />

          <div className="space-y-8 md:space-y-20">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline Node - Mobile: positioned based on index, Desktop: center */}
                  <div className={`relative z-10 mb-6 md:mb-0 ${isEven ? 'md:absolute md:left-1/2 md:transform md:-translate-x-1/2' : 'md:absolute md:left-1/2 md:transform md:-translate-x-1/2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 glass rounded-full flex items-center justify-center border-2 border-white/20"
                    >
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 md:px-12">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass glass-hover p-6 md:p-8 rounded-2xl max-w-md md:max-w-none mx-auto md:mx-0"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                          <span className="font-display text-xl md:text-2xl font-bold text-white">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display text-lg md:text-xl lg:text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout - only visible on md and up */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DNA Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass glass-hover p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                O DNA da FVA
              </h3>
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Esta jornada moldou uma visão única: onde desenvolvimento fullstack encontra narrativa visual,
              criando soluções audiovisuais que transcendem as expectativas convencionais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
