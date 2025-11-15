import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Workflow,
  Database,
  LineChart,
  Cloud,
  Lock,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";

export default function Services() {
  const mainServices = [
    {
      icon: Code2,
      title: "Desenvolvimento de Sistemas Personalizados",
      description:
        "Criamos sistemas sob medida que atendem exatamente às necessidades do seu negócio, com arquitetura escalável e tecnologias modernas.",
      features: ["Análise de requisitos", "Desenvolvimento ágil", "Testes integrados", "Suporte contínuo"],
    },
    {
      icon: Smartphone,
      title: "Criação de Aplicativos Móveis e Web",
      description:
        "Aplicativos nativos e híbridos para iOS e Android, além de aplicações web responsivas com experiência de usuário excepcional.",
      features: ["Design responsivo", "Performance otimizada", "Integração com APIs", "Publicação nas lojas"],
    },
    {
      icon: ShoppingCart,
      title: "Consultoria em Digitalização e E-commerce",
      description:
        "Orientação estratégica para transformação digital do seu negócio, incluindo implementação de plataformas de vendas online.",
      features: ["Estratégia digital", "Setup de e-commerce", "Integrações de pagamento", "Marketing digital"],
    },
    {
      icon: Workflow,
      title: "Automação de Processos",
      description:
        "Automatize tarefas repetitivas e otimize fluxos de trabalho com soluções inteligentes que aumentam a produtividade.",
      features: ["Análise de processos", "Robotic Process Automation", "Integração de sistemas", "Dashboards personalizados"],
    },
  ];

  const additionalServices = [
    { icon: Database, title: "Gerenciamento de Dados", description: "Estruturação e otimização de bancos de dados" },
    { icon: Cloud, title: "Cloud Computing", description: "Migração e hospedagem em nuvem" },
    { icon: Lock, title: "Segurança Digital", description: "Proteção de dados e sistemas" },
    { icon: LineChart, title: "Business Intelligence", description: "Análise de dados e relatórios inteligentes" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #03FA6E 25%, transparent 25%, transparent 75%, #03FA6E 75%), 
                              linear-gradient(45deg, #03FA6E 25%, transparent 25%, transparent 75%, #03FA6E 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
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
              <span className="text-sm text-[#03FA6E] font-semibold">Soluções Completas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed">
              Transforme seu negócio com soluções digitais inteligentes e sob medida
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-black border border-[#03FA6E]/20 rounded-3xl p-8 md:p-10 hover:border-[#03FA6E]/50 transition-all hover:shadow-[0_0_40px_rgba(3,250,110,0.1)]"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#03FA6E]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#03FA6E]/20 transition-colors">
                      <service.icon className="w-10 h-10 text-[#03FA6E]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{service.title}</h3>
                    <p className="text-[#A6A6A6] text-lg leading-relaxed mb-6">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#03FA6E] flex-shrink-0" />
                          <span className="text-white text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Serviços <span className="gradient-text">Adicionais</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Soluções complementares para potencializar sua presença digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#0a0a0a] border border-[#03FA6E]/20 rounded-2xl hover:border-[#03FA6E] transition-all hover:shadow-[0_0_30px_rgba(3,250,110,0.15)] group"
              >
                <div className="w-12 h-12 bg-[#03FA6E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#03FA6E]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#03FA6E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-[#A6A6A6] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Como <span className="gradient-text">Trabalhamos</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Metodologia ágil e transparente para garantir o sucesso do seu projeto
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Descoberta", description: "Entendemos profundamente suas necessidades e objetivos" },
              { step: "02", title: "Planejamento", description: "Definimos estratégias, tecnologias e cronograma detalhado" },
              { step: "03", title: "Desenvolvimento", description: "Criamos sua solução com sprints ágeis e entregas incrementais" },
              { step: "04", title: "Lançamento", description: "Implementamos e garantimos a operação perfeita do sistema" },
              { step: "05", title: "Suporte", description: "Acompanhamento contínuo e melhorias baseadas em feedback" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#03FA6E]/10 border-2 border-[#03FA6E]/30 rounded-2xl flex items-center justify-center group-hover:bg-[#03FA6E]/20 group-hover:border-[#03FA6E] transition-all">
                    <span className="text-2xl font-black text-[#03FA6E]">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-[#A6A6A6] leading-relaxed">{phase.description}</p>
                </div>
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
              Pronto para <span className="gradient-text">Começar</span>?
            </h2>
            <p className="text-lg text-[#A6A6A6] mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos transformar suas ideias em soluções digitais de impacto
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold px-10 py-6 text-lg rounded-xl glow-border">
                Solicite uma Consultoria Gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}