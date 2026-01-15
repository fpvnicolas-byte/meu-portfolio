"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Target, Users, Lightbulb, Globe } from "lucide-react";

// Vision 2026 Links Configuration
const visionLinks = {
  joinRevolution: "https://wa.me/5511933604054", // WhatsApp contact
  scheduleMeeting: "https://wa.me/5511933604054" // WhatsApp contact
};

const futureInitiatives = [
  {
    icon: Rocket,
    title: "SaaS Audiovisuais",
    description: "Plataformas de edição colaborativa e automação inteligente para profissionais da indústria.",
    status: "Em Desenvolvimento",
    timeline: "2026"
  },
  {
    icon: Sparkles,
    title: "Centro de Ensino",
    description: "Academia FV: Formação especializada em produção audiovisual integrada com tecnologia.",
    status: "Planejamento",
    timeline: "2026 Q2"
  },
  {
    icon: Globe,
    title: "Expansão Global",
    description: "Parcerias internacionais e expansão para mercados estratégicos na América Latina e Europa.",
    status: "Estratégia",
    timeline: "2026-2027"
  },
  {
    icon: Target,
    title: "Tecnologia Própria",
    description: "Desenvolvimento de ferramentas proprietárias de IA para otimização de workflows criativos.",
    status: "R&D Ativo",
    timeline: "2026 Q1"
  }
];

export function Vision2026() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision-2026" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vision <span className="gradient-text">2026</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            O futuro da produção audiovisual está sendo construído agora. FV lidera esta transformação.
          </p>
        </motion.div>

        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass glass-hover p-12 rounded-3xl max-w-6xl mx-auto text-center">
            <div className="space-y-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center animate-glow">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <blockquote className="font-display text-3xl md:text-4xl font-bold text-white leading-relaxed">
                "A viabilização de um novo SaaS audiovisual e a expansão da FV como uma
                <span className="gradient-text"> central de tecnologia e ensino </span>
                para novos talentos, estabelecendo novos padrões para a indústria criativa."
              </blockquote>
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <Users className="w-5 h-5" />
                <span className="font-medium">Para empreendedores, creators e empresas visionárias</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {futureInitiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass glass-hover p-8 rounded-3xl h-full">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium border border-green-400/30">
                          {initiative.status}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">{initiative.timeline}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progresso</span>
                        <span className="text-white font-medium">
                          {initiative.status === 'Em Desenvolvimento' ? '75%' :
                           initiative.status === 'R&D Ativo' ? '60%' :
                           initiative.status === 'Planejamento' ? '30%' : '15%'}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width:
                            initiative.status === 'Em Desenvolvimento' ? '75%' :
                            initiative.status === 'R&D Ativo' ? '60%' :
                            initiative.status === 'Planejamento' ? '30%' : '15%'
                          } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass glass-hover p-12 rounded-3xl max-w-5xl mx-auto">
            <div className="space-y-8">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
                Faça Parte Desta Visão
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seja você um empreendedor visionário, um creator inovador ou uma empresa que busca transformação,
                FV está construindo o futuro da produção audiovisual. Vamos criar juntos?
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => visionLinks.joinRevolution && window.open(visionLinks.joinRevolution, '_blank')}
                  disabled={!visionLinks.joinRevolution}
                  className={`glass glass-hover px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold text-lg flex items-center justify-center gap-3 group ${
                    !visionLinks.joinRevolution ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Junte-se à Revolução</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => visionLinks.scheduleMeeting && window.open(visionLinks.scheduleMeeting, '_blank')}
                  disabled={!visionLinks.scheduleMeeting}
                  className={`glass glass-hover px-10 py-5 rounded-2xl text-white font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-colors ${
                    !visionLinks.scheduleMeeting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Agendar Reunião
                </motion.button>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  🚀 <strong>Próximos Passos:</strong> Entre em contato para discutir oportunidades de parceria,
                  investimento ou colaboração em nossos projetos futuros.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass glass-hover p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gray-300 font-medium">
              "Onde o código encontra a lente, o futuro é criado."
            </p>
            <p className="text-gray-400 text-sm mt-2">
              — Nícolas - Future Vision Audiovisual
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
