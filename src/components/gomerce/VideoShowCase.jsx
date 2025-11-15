import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Hexagon, Volume2, VolumeX, Maximize, X } from "lucide-react";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const features = [
  "Feed de produtos estilo rede social",
  "Interface visual moderna e intuitiva",
  "Navegação por abas semelhante as redes sociais",
  "Exploração de produtos por posts e stories",
  "Sistema de curtidas ecomentários ",
  "Chat direto com vendedores",
  "Carrinho integrado ao feed",
  "Compras rápidas direto do post",
  "Sistema completo de pagamentos",
  "Avaliações, reviews e interações sociais",
];


  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const videoContent = (
    <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
      <iframe
        ref={videoRef}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/zzsktGodAng?si=uq0xDbZxaQq5LCxM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full object-cover"
      ></iframe>
      <div className="absolute top-4 right-4 text-[#B8D4FF] opacity-20">
        <Hexagon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-4 left-4 text-[#B8D4FF] opacity-20">
        <Hexagon className="w-6 h-6" />
      </div>
    </div>
  );

  return (
    <div className="relative bg-black min-h-screen flex items-center p-10">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20"
        >
          <Hexagon className="w-64 h-64 text-[#4169E1]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20"
        >
          <Hexagon className="w-80 h-80 text-[#B8D4FF]" />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video border-4 border-[#4169E1]/30 shadow-2xl">
              {videoContent}
            </div>
          </motion.div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4169E1]/10 border border-[#4169E1]/30 rounded-full mb-6">
              <Hexagon className="w-3 h-3 text-[#4169E1]" />
              <span className="text-sm text-[#4169E1] font-semibold">Vídeo Explicativo</span>
            </div>

            <h3 className="text-4xl font-black text-white mb-6">
              Veja o GO-Merce <span className="text-[#4169E1]">em Ação</span>
            </h3>

            <p className="text-lg text-[#A6A6A6] leading-relaxed mb-8">
              Assista a uma demonstração completa das funcionalidades do aplicativo e descubra
              como o GO-Merce pode transformar o seu negócio digital.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold text-[#B8D4FF] uppercase tracking-wide mb-4">
                O que você verá:
              </h4>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Hexagon className="w-full h-full text-[#4169E1] opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#4169E1] rounded-full" />
                    </div>
                  </div>
                  <span className="text-white font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePlay}
                className="bg-[#4169E1] hover:bg-[#3157c9] text-white font-bold px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(65,105,225,0.3)] group transition-all"
              >
                <Play className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                Assistir Agora
              </button>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

//https://chatgpt.com/s/t_691676c39f5481919fea75904d9ffd95