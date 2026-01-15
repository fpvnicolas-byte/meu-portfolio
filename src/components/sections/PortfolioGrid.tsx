"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, ExternalLink, Award, TrendingUp } from "lucide-react";
import { Gallery } from "@/components/gallery/Gallery";
import type { GalleryItem } from "@/components/gallery/types";

const portfolioCases = [
  {
    id: "rom-concept",
    title: "ROM Concept",
    description: "Audiovisual para o maior salão do mundo",
    category: "Corporate",
    stats: "50+ vídeos produzidos",
    size: "large",
    gradient: "from-blue-400 to-purple-400",
    icon: Award,
    link: "" // TODO: Add ROM Concept project link
  },
  {
    id: "record-tv",
    title: "Record TV",
    description: "Produção nacional de escala",
    category: "Broadcast",
    stats: "Via Bronks",
    size: "medium",
    gradient: "from-red-400 to-pink-400",
    icon: TrendingUp,
    link: "" // TODO: Add Record TV project link
  },
  {
    id: "podporco",
    title: "PodPorco",
    description: "Case viral de 4 milhões de views",
    category: "Content",
    stats: "4M+ visualizações",
    size: "medium",
    gradient: "from-green-400 to-teal-400",
    icon: Play,
    link: "" // TODO: Add PodPorco project link
  },
  {
    id: "tecnohidro",
    title: "Tecnohidro",
    description: "Engenharia e Geologia Ambiental",
    category: "Industrial",
    stats: "Documentário técnico",
    size: "small",
    gradient: "from-cyan-400 to-blue-400",
    icon: ExternalLink,
    link: "" // TODO: Add Tecnohidro project link
  },
  {
    id: "ethereum-brasil",
    title: "Ethereum Brasil",
    description: "Tecnologia e Inovação",
    category: "Tech",
    stats: "Blockchain & Web3",
    size: "small",
    gradient: "from-purple-400 to-indigo-400",
    icon: TrendingUp,
    link: "" // TODO: Add Ethereum Brasil project link
  },
  {
    id: "smc-corporation",
    title: "SMC Corporation",
    description: "Tecnologia e Indústria",
    category: "Corporate",
    stats: "Soluções empresariais",
    size: "small",
    gradient: "from-orange-400 to-red-400",
    icon: Award,
    link: "" // TODO: Add SMC Corporation project link
  }
];

// CTA Links Configuration
const portfolioLinks = {
  startProject: "https://wa.me/5511933604054", // WhatsApp contact
  fullPortfolio: "https://www.instagram.com/spdronepilot" // Instagram portfolio
};

export function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showGallery, setShowGallery] = useState(false);
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);
  const [showYoutubeModalTecnohidro, setShowYoutubeModalTecnohidro] = useState(false);
  const [showYoutubeModalSMC, setShowYoutubeModalSMC] = useState(false);
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [showInstagramModalEthereum, setShowInstagramModalEthereum] = useState(false);

  // ROM Concept Gallery Videos - Simplified for vertical mobile videos
  const romConceptVideos: GalleryItem[] = [
    {
      id: 'rom-video-1',
      title: 'Vídeo 1',
      thumbnail: '/placeholder.jpg', // Not used in simplified modal
      videoUrl: 'AgXLv3eBasDgVaVPe2CCU4ZvirjiDJUo1fOlQR00oGG4', // TODO: Replace with actual MUX playback ID
      size: 'small', // Not used in simplified modal
    },
    {
      id: 'rom-video-2',
      title: 'Vídeo 2',
      thumbnail: '/placeholder.jpg', // Not used in simplified modal
      videoUrl: '3lUgNiCvPtVz6sK6G4GCBhEH64ClxRYMcJ3l7edAVLE', // TODO: Replace with actual MUX playback ID
      size: 'small', // Not used in simplified modal
    },
    {
      id: 'rom-video-3',
      title: 'Vídeo 3',
      thumbnail: '/placeholder.jpg', // Not used in simplified modal
      videoUrl: 'D1JvK026JglwTHBWECs4SNnUeHnVqa00mFA01LSONQ802gc', // TODO: Replace with actual MUX playback ID
      size: 'small', // Not used in simplified modal
    },
    {
      id: 'rom-video-4',
      title: 'Vídeo 4',
      thumbnail: '/placeholder.jpg', // Not used in simplified modal
      videoUrl: '01a6i0161wzUB5P3C75zLFqYZQO01dBKLXULmnDZ00mYwE8', // TODO: Replace with actual MUX playback ID
      size: 'small', // Not used in simplified modal
    }
  ];

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

  const handleRomConceptClick = () => {
    setShowGallery(true);
  };

  const handleGalleryClose = () => {
    setShowGallery(false);
  };

  const handleRecordTVClick = () => {
    setShowYoutubeModal(true);
  };

  const handleYoutubeModalClose = () => {
    setShowYoutubeModal(false);
  };

  const handlePodPorcoClick = () => {
    setShowInstagramModal(true);
  };

  const handleInstagramModalClose = () => {
    setShowInstagramModal(false);
  };

  const handleTecnohidroClick = () => {
    setShowYoutubeModalTecnohidro(true);
  };

  const handleYoutubeModalTecnohidroClose = () => {
    setShowYoutubeModalTecnohidro(false);
  };

  const handleSMCClick = () => {
    setShowYoutubeModalSMC(true);
  };

  const handleYoutubeModalSMCClose = () => {
    setShowYoutubeModalSMC(false);
  };

  const handleEthereumClick = () => {
    setShowInstagramModalEthereum(true);
  };

  const handleInstagramModalEthereumClose = () => {
    setShowInstagramModalEthereum(false);
  };

  // Load Instagram embed script when modal opens
  useEffect(() => {
    if ((showInstagramModal || showInstagramModalEthereum) && !document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showInstagramModal, showInstagramModalEthereum]);

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
                      onClick={() => {
                        if (project.id === 'rom-concept') {
                          handleRomConceptClick();
                        } else if (project.id === 'record-tv') {
                          handleRecordTVClick();
                        } else if (project.id === 'podporco') {
                          handlePodPorcoClick();
                        } else if (project.id === 'tecnohidro') {
                          handleTecnohidroClick();
                        } else if (project.id === 'smc-corporation') {
                          handleSMCClick();
                        } else if (project.id === 'ethereum-brasil') {
                          handleEthereumClick();
                        } else if (project.link) {
                          window.open(project.link, '_blank');
                        }
                      }}
                      disabled={project.id !== 'rom-concept' && project.id !== 'record-tv' && project.id !== 'podporco' && project.id !== 'tecnohidro' && project.id !== 'smc-corporation' && project.id !== 'ethereum-brasil' && !project.link}
                      className={`w-full glass glass-hover px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-medium group/btn ${
                        (project.id !== 'rom-concept' && !project.link) ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <span>Ver Projeto</span>
                      <Play className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
                  onClick={() => portfolioLinks.startProject && window.open(portfolioLinks.startProject, '_blank')}
                  disabled={!portfolioLinks.startProject}
                  className={`glass glass-hover px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold flex items-center justify-center gap-2 ${
                    !portfolioLinks.startProject ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Iniciar Projeto</span>
                  <Play className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => portfolioLinks.fullPortfolio && window.open(portfolioLinks.fullPortfolio, '_blank')}
                  disabled={!portfolioLinks.fullPortfolio}
                  className={`glass glass-hover px-8 py-4 rounded-xl text-white font-semibold border border-white/20 ${
                    !portfolioLinks.fullPortfolio ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Ver Portfólio Completo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROM Concept Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-7xl mx-auto">
              <button
                onClick={handleGalleryClose}
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <Gallery
                items={romConceptVideos}
                className="max-h-[90vh] overflow-y-auto"
              />
            </div>
          </div>
        )}

        {/* YouTube Modal for Record TV */}
        {showYoutubeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={handleYoutubeModalClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/Sz0gcILVN6w?autoplay=1&rel=0"
                    title="Record TV - Produção Nacional de Escala"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Record TV - Produção Nacional de Escala
                  </h3>
                  <p className="text-gray-300">
                    Case de produção audiovisual para emissora nacional, demonstrando nossa expertise em projetos de grande escala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Modal for PodPorco */}
        {showInstagramModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleInstagramModalClose}
          >
            <div
              className="relative w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleInstagramModalClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-4 text-center">
                    PodPorco - Case Viral
                  </h3>

                  {/* Instagram Embed */}
                  <div className="flex justify-center">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/reel/DPATb3JDuNU/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: '0',
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: '0',
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/reel/DPATb3JDuNU/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: '0',
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                          }}>
                            <div style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '50%',
                              flexGrow: '0',
                              height: '40px',
                              marginRight: '14px',
                              width: '40px'
                            }}></div>
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              flexGrow: '1',
                              justifyContent: 'center'
                            }}>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '4px',
                                flexGrow: '0',
                                height: '14px',
                                marginBottom: '6px',
                                width: '100px'
                              }}></div>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '4px',
                                flexGrow: '0',
                                height: '14px',
                                width: '60px'
                              }}></div>
                            </div>
                          </div>
                          <div style={{
                            padding: '19% 0'
                          }}></div>
                          <div style={{
                            display: 'block',
                            height: '50px',
                            margin: '0 auto 12px',
                            width: '50px'
                          }}>
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                  <g>
                                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.893 C516.755,34.972 517.244,33.388 517.654,32.331 C518.197,30.933 518.846,29.936 519.894,28.887 C520.942,27.839 521.94,27.191 523.338,26.647 C524.393,26.237 525.979,25.75 528.898,25.616 C532.057,25.473 533.004,25.443 541,25.443 C548.996,25.443 549.943,25.473 553.102,25.616 C556.021,25.75 557.607,26.237 558.662,26.647 C560.06,27.191 561.058,27.839 562.106,28.887 C563.154,29.936 563.803,30.933 564.346,32.331 C564.756,33.388 565.244,34.972 565.378,37.893 C565.522,41.052 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div style={{
                            paddingTop: '8px'
                          }}>
                            <div style={{
                              color: '#3897f0',
                              fontFamily: 'Arial,sans-serif',
                              fontSize: '14px',
                              fontStyle: 'normal',
                              fontWeight: '550',
                              lineHeight: '18px'
                            }}>
                              View this post on Instagram
                            </div>
                          </div>
                          <div style={{
                            padding: '12.5% 0'
                          }}></div>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '14px',
                            alignItems: 'center'
                          }}>
                            <div>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                height: '12.5px',
                                width: '12.5px',
                                transform: 'translateX(0px) translateY(7px)'
                              }}></div>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                height: '12.5px',
                                transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                                width: '12.5px',
                                flexGrow: '0',
                                marginRight: '14px',
                                marginLeft: '2px'
                              }}></div>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                height: '12.5px',
                                width: '12.5px',
                                transform: 'translateX(9px) translateY(-18px)'
                              }}></div>
                            </div>
                            <div style={{
                              marginLeft: '8px'
                            }}>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                flexGrow: '0',
                                height: '20px',
                                width: '20px'
                              }}></div>
                              <div style={{
                                width: '0',
                                height: '0',
                                borderTop: '2px solid transparent',
                                borderLeft: '6px solid #f4f4f4',
                                borderBottom: '2px solid transparent',
                                transform: 'translateX(16px) translateY(-4px) rotate(30deg)'
                              }}></div>
                            </div>
                            <div style={{
                              marginLeft: 'auto'
                            }}>
                              <div style={{
                                width: '0px',
                                borderTop: '8px solid #F4F4F4',
                                borderRight: '8px solid transparent',
                                transform: 'translateY(16px)'
                              }}></div>
                              <div style={{
                                backgroundColor: '#F4F4F4',
                                flexGrow: '0',
                                height: '12px',
                                width: '16px',
                                transform: 'translateY(-4px)'
                              }}></div>
                              <div style={{
                                width: '0',
                                height: '0',
                                borderTop: '8px solid #F4F4F4',
                                borderLeft: '8px solid transparent',
                                transform: 'translateY(-4px) translateX(8px)'
                              }}></div>
                            </div>
                          </div>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: '1',
                            justifyContent: 'center',
                            marginBottom: '24px'
                          }}>
                            <div style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '4px',
                              flexGrow: '0',
                              height: '14px',
                              marginBottom: '6px',
                              width: '224px'
                            }}></div>
                            <div style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '4px',
                              flexGrow: '0',
                              height: '14px',
                              width: '144px'
                            }}></div>
                          </div>
                        </a>
                        <p style={{
                          color: '#c9c8cd',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          lineHeight: '17px',
                          marginBottom: '0',
                          marginTop: '8px',
                          overflow: 'hidden',
                          padding: '8px 0 7px',
                          textAlign: 'center',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          <a
                            href="https://www.instagram.com/reel/DPATb3JDuNU/?utm_source=ig_embed&utm_campaign=loading"
                            style={{
                              color: '#c9c8cd',
                              fontFamily: 'Arial,sans-serif',
                              fontSize: '14px',
                              fontStyle: 'normal',
                              fontWeight: 'normal',
                              lineHeight: '17px',
                              textDecoration: 'none',
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            A post shared by Pod Porco (@podporco)
                          </a>
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>


            </div>
          </div>
        )}

        {/* Instagram Modal for Ethereum Brasil */}
        {showInstagramModalEthereum && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleInstagramModalEthereumClose}
          >
            <div
              className="relative w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleInstagramModalEthereumClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-4 text-center">
                    Ethereum Brasil - Tecnologia e Inovação
                  </h3>

                  {/* Instagram Embed */}
                  <div className="flex justify-center">
                    <div dangerouslySetInnerHTML={{
                      __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DO9Yi87Ec5T/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DO9Yi87Ec5T/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.893 C516.755,34.972 517.244,33.388 517.654,32.331 C518.197,30.933 518.846,29.936 519.894,28.887 C520.942,27.839 521.94,27.191 523.338,26.647 C524.393,26.237 525.979,25.75 528.898,25.616 C532.057,25.473 533.004,25.443 541,25.443 C548.996,25.443 549.943,25.473 553.102,25.616 C556.021,25.75 557.607,26.237 558.662,26.647 C560.06,27.191 561.058,27.839 562.106,28.887 C563.154,29.936 563.803,30.933 564.346,32.331 C564.756,33.388 565.244,34.972 565.378,37.893 C565.522,41.052 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DO9Yi87Ec5T/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Ethereum Brasil (@ethereum.brasil)</a></p></div></blockquote>`
                    }} />
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-white text-sm opacity-90">
                      Conteúdo sobre tecnologia Blockchain e Web3.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        )}

        {/* YouTube Modal for Tecnohidro */}
        {showYoutubeModalTecnohidro && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={handleYoutubeModalTecnohidroClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/2qTPO9Wz6uw?autoplay=1&rel=0"
                    title="Tecnohidro - Engenharia e Geologia Ambiental"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Tecnohidro - Engenharia e Geologia Ambiental
                  </h3>
                  <p className="text-gray-300">
                    Documentário técnico apresentando soluções avançadas em engenharia ambiental e geologia, demonstrando nossa expertise em projetos técnicos especializados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Modal for SMC Corporation */}
        {showYoutubeModalSMC && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={handleYoutubeModalSMCClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/MvSnkYY7WPM?autoplay=1&rel=0"
                    title="SMC Corporation - Tecnologia e Indústria"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-bold mb-2">
                    SMC Corporation - Tecnologia e Indústria
                  </h3>
                  <p className="text-gray-300">
                    Case de soluções empresariais demonstrando nossa expertise em tecnologia industrial e transformação digital para grandes corporações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
