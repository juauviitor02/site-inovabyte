import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";

export default function About() {

  
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias e metodologias para entregar o melhor",
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Tecnologia acessível que democratiza oportunidades para todos",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total com os resultados e sucesso dos nossos clientes",
    },
    {
      icon: Shield,
      title: "Ética",
      description: "Transparência e integridade em todas as nossas relações",
    },
    {
      icon: Target,
      title: "Impacto Social",
      description: "Soluções que geram transformação positiva nas comunidades",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #03FA6E 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Sobre a <span className="gradient-text">Inova Byte</span>
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed">
              Nascemos com o propósito de democratizar a tecnologia e fortalecer economias locais
              através de soluções digitais inovadoras e acessíveis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black border border-[#03FA6E]/20 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-black text-white mb-6">Nossa História</h2>
              <div className="space-y-4 text-[#A6A6A6] leading-relaxed">
                <p>
                  A <span className="text-[#03FA6E] font-semibold">Inova Byte Sistemas</span> nasceu de uma iniciativa
                  acadêmica que rapidamente evoluiu para uma empresa dedicada ao desenvolvimento de sistemas
                  e aplicativos voltados à realidade de pequenas e médias empresas.
                </p>
                <p>
                  Reconhecendo as limitações tecnológicas enfrentadas por empreendedores em regiões
                  interioranas, especialmente na <span className="text-white font-semibold">Zona da Mata Norte de Pernambuco</span>,
                  nos dedicamos a criar soluções que aproximam o comércio local do consumidor digital.
                </p>
                <p>
                  Hoje, somos referência em transformação digital regional, combinando tecnologia de ponta
                  com profundo entendimento das necessidades locais, sempre mantendo nosso compromisso com
                  a acessibilidade e o impacto social positivo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-gradient-to-br from-[#03FA6E]/5 to-transparent border border-[#03FA6E]/30 rounded-3xl"
            >
              <div className="w-16 h-16 bg-[#03FA6E]/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#03FA6E]" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Missão</h2>
              <p className="text-[#A6A6A6] leading-relaxed">
                Desenvolver soluções digitais acessíveis que conectem empreendedores e consumidores,
                fortalecendo economias locais e promovendo a inclusão tecnológica em comunidades
                que mais precisam de transformação digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-gradient-to-br from-[#03FA6E]/5 to-transparent border border-[#03FA6E]/30 rounded-3xl"
            >
              <div className="w-16 h-16 bg-[#03FA6E]/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#03FA6E]" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Visão</h2>
              <p className="text-[#A6A6A6] leading-relaxed">
                Ser referência regional em inovação tecnológica e transformação digital de pequenos
                negócios, reconhecida por criar soluções que geram impacto social real e duradouro
                nas comunidades onde atuamos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-black border border-[#03FA6E]/20 rounded-2xl hover:border-[#03FA6E] transition-all hover:shadow-[0_0_30px_rgba(3,250,110,0.15)]"
              >
                <div className="w-14 h-14 bg-[#03FA6E]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#03FA6E]/20 transition-colors">
                  <value.icon className="w-7 h-7 text-[#03FA6E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-[#A6A6A6] leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Tecnologia com <span className="gradient-text">Propósito</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] mb-8 leading-relaxed max-w-2xl mx-auto">
              Nossa equipe é formada por profissionais apaixonados por tecnologia e
              comprometidos com a transformação social através da inovação digital
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm font-semibold">
              <div className="px-6 py-3 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-[#03FA6E]">
                Desenvolvimento Full-Stack
              </div>
              <div className="px-6 py-3 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-[#03FA6E]">
                UI/UX Design
              </div>
              <div className="px-6 py-3 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-[#03FA6E]">
                Gestão de Projetos
              </div>
              <div className="px-6 py-3 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-[#03FA6E]">
                Consultoria Digital
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}