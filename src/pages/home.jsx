import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Code, Globe, Smartphone, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: Code,
      title: "Desenvolvimento Ágil",
      description: "Metodologias modernas para entregas rápidas e eficientes",
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Aplicativos e sistemas que funcionam em qualquer dispositivo",
    },
    {
      icon: Globe,
      title: "Alcance Regional",
      description: "Soluções com impacto real na economia local",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #03FA6E 1px, transparent 1px),
              linear-gradient(0deg, #03FA6E 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }} />
        </div>
        
        <style>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(3, 250, 110, 0.3); }
            50% { box-shadow: 0 0 40px rgba(3, 250, 110, 0.6); }
          }
        `}</style>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-[#03FA6E]" />
                <span className="text-sm text-[#03FA6E] font-semibold">Inovação & Tecnologia</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="gradient-text">Soluções Digitais</span>
              <br />
              <span className="text-white">que Transformam</span>
              <br />
              <span className="text-white">Realidades</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#A6A6A6] mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Desenvolvemos sistemas e aplicativos inteligentes que conectam empreendedores
              e consumidores, fortalecendo economias locais através da tecnologia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to={createPageUrl("GoMerce")}>
                <Button className="bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold px-8 py-6 text-lg rounded-xl glow-border group">
                  Conheça o GO-Merce
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button variant="outline" className="border-2 border-[#03FA6E] text-[#03FA6E] hover:bg-[#03FA6E] hover:text-black font-bold px-8 py-6 text-lg rounded-xl">
                  Fale Conosco
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Por Que Escolher a <span className="gradient-text">Inova Byte</span>?
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Conectamos tecnologia e propósito para criar soluções que fazem a diferença
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group p-8 bg-black border border-[#03FA6E]/20 rounded-2xl hover:border-[#03FA6E] transition-all hover:shadow-[0_0_30px_rgba(3,250,110,0.2)]"
              >
                <div className="w-16 h-16 bg-[#03FA6E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#03FA6E]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#03FA6E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#A6A6A6] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-[#03FA6E]/10 to-black border border-[#03FA6E]/30 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Transforme Seu Negócio com <span className="gradient-text">Soluções Digitais</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] mb-8 max-w-2xl mx-auto">
              Estamos prontos para desenvolver a solução perfeita para o seu projeto
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold px-10 py-6 text-lg rounded-xl glow-border">
                Inicie Seu Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}