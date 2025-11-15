import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ExternalLink, Smartphone, Code, Globe, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const featuredProject = {
    title: "GO-Merce",
    subtitle: "Marketplace Regional",
    description:
      "Aplicativo completo de e-commerce e serviços para digitalizar o comércio da Zona da Mata Norte de Pernambuco",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Flutter", "Python", "MariaDB", "E-commerce"],
    impact: "Conectando mais de 50 comerciantes locais",
    link: "GoMerce",
  };

  const projects = [
    {
      title: "Sistema de Gestão Comercial",
      description: "Plataforma completa para controle de vendas, estoque e financeiro",
      icon: Code,
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "App de Delivery Local",
      description: "Aplicativo móvel para pedidos e entregas na região",
      icon: Smartphone,
      tags: ["Flutter", "Firebase", "Maps API"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80",
    },
    {
      title: "Portal Institucional",
      description: "Website responsivo para instituição educacional",
      icon: Globe,
      tags: ["React", "Tailwind", "CMS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    },
    {
      title: "Sistema de Agendamento",
      description: "Plataforma de gestão de horários e atendimentos",
      icon: Code,
      tags: ["Vue.js", "Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    },
    {
      title: "E-commerce de Moda",
      description: "Loja virtual com integração de pagamentos",
      icon: Globe,
      tags: ["Next.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    },
    {
      title: "App de Serviços Locais",
      description: "Conecta prestadores de serviço a clientes",
      icon: Smartphone,
      tags: ["React Native", "Node.js", "Socket.io"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #03FA6E 0, #03FA6E 1px, transparent 0, transparent 50%)`,
            backgroundSize: '10px 10px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#03FA6E]" />
              <span className="text-sm text-[#03FA6E] font-semibold">Nossos Projetos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="gradient-text">Portfólio</span> de Inovação
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed">
              Soluções digitais que transformaram negócios e impactaram comunidades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - GO-Merce */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Projeto em <span className="gradient-text">Destaque</span>
              </h2>
              <p className="text-[#A6A6A6]">Nossa solução de maior impacto social</p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#03FA6E] to-[#00ff88] rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-black border border-[#03FA6E]/30 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                       loading="lazy"
                       decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#03FA6E]/20 border border-[#03FA6E]/50 rounded-full mb-4 self-start">
                      <span className="text-xs text-[#03FA6E] font-bold uppercase tracking-wide">
                        {featuredProject.subtitle}
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">{featuredProject.title}</h3>
                    <p className="text-lg text-[#A6A6A6] mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-lg text-sm text-[#03FA6E] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white font-semibold mb-6">
                      <div className="w-2 h-2 bg-[#03FA6E] rounded-full animate-pulse" />
                      {featuredProject.impact}
                    </div>
                    <Link to={createPageUrl(featuredProject.link)}>
                      <Button className="bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold px-8 py-6 text-lg rounded-xl glow-border group">
                        Ver Projeto Completo
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Outros <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Cada solução desenvolvida com dedicação e foco em resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-[#03FA6E]/20 rounded-2xl overflow-hidden hover:border-[#03FA6E]/50 transition-all hover:shadow-[0_0_40px_rgba(3,250,110,0.15)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                     loading="lazy"
                     decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#03FA6E]/20 backdrop-blur-sm border border-[#03FA6E]/50 rounded-xl flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-[#03FA6E]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#03FA6E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#A6A6A6] text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#03FA6E]/10 border border-[#03FA6E]/20 rounded text-xs text-[#03FA6E] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Projetos Concluídos" },
              { value: "50+", label: "Clientes Atendidos" },
              { value: "100%", label: "Satisfação" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-black border border-[#03FA6E]/20 rounded-2xl"
              >
                <div className="text-4xl font-black text-[#03FA6E] mb-2">{stat.value}</div>
                <div className="text-sm text-[#A6A6A6] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-[#03FA6E]/10 to-transparent border border-[#03FA6E]/30 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Próximo Projeto: <span className="gradient-text">O Seu</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] mb-8 max-w-2xl mx-auto">
              Vamos juntos criar uma solução digital que transforme o seu negócio
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold px-10 py-6 text-lg rounded-xl glow-border">
                Começar Meu Projeto
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}