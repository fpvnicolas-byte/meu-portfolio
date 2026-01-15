"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeamsWithCollision className="min-h-screen bg-black">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20 z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-bg z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            >
              <span className="block">Onde o código</span>
              <span className="block gradient-text">encontra a lente</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              FVA: A convergência entre engenharia de software, inteligência artificial e narrativa visual de alta performance.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-8"
            >
              <Button
                onClick={() => scrollToSection('builders-origin')}
                className="glass glass-hover px-8 py-4 text-lg font-medium rounded-full border-0 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-300 group"
              >
                Conheça a Jornada
                <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('builders-origin')}
            >
              <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-full glass opacity-30" />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
