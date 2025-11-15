import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Star,
  Users,
  TrendingUp,
  Hexagon,
  CheckCircle,
  Code,
  Database,
  Palette,
  Target,
} from "lucide-react";
import UserFlowSimulator from "../components/gomerce/UserFlowSimulator";
import VideoShowcase from "../components/gomerce/VideoShowcase";
import DemoRequestForm from "../components/gomerce/DemoRequestForm";

export default function GoMerce() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Marketplace Local",
      description: "Plataforma integrada conectando comerciantes e consumidores da região",
    },
    {
      icon: Users,
      title: "Cadastro de Comerciantes",
      description: "Sistema completo de gestão de produtos, serviços e perfis",
    },
    {
      icon: MapPin,
      title: "Busca por Localização",
      description: "Encontre estabelecimentos próximos com precisão geográfica",
    },
    {
      icon: MessageCircle,
      title: "Chat Integrado",
      description: "Comunicação direta entre clientes e vendedores em tempo real",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento de Pedidos",
      description: "Rastreamento completo desde a compra até a entrega",
    },
    {
      icon: Star,
      title: "Sistema de Avaliação",
      description: "Reputação transparente através de reviews e ratings",
    },
  ];

  const techStack = [
    { name: "React Native", description: "Framework multiplataforma para desenvolvimento mobile", icon: Code },
    { name: "JavaScript", description: "Backend robusto e escalável com Node.js", icon: Code },
    { name: "MongoDB", description: "Banco de dados em nuvem de alta performance", icon: Database },
  ];

  const designPrinciples = [
    "Interface hexagonal moderna e única",
    "Design responsivo para todos os dispositivos",
    "Paleta de cores acessível e profissional",
    "Experiência de usuário intuitiva",
    "Animações suaves e microinterações",
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <style>{`
        .go-merce-gradient {
          background: linear-gradient(135deg, #4169E1 0%, #B8D4FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%234169E1' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4169E1]/10 border border-[#4169E1]/30 rounded-full mb-6">
              <Hexagon className="w-4 h-4 text-[#4169E1]" />
              <span className="text-sm text-[#4169E1] font-semibold">Projeto em Destaque</span>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
                GO<span className="go-merce-gradient">-Merce</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-[#4169E1] to-[#B8D4FF] mx-auto rounded-full mb-6" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-[#B8D4FF] font-semibold mb-6"
            >
              Incentivando o Comércio Digital na Zona da Mata Norte de Pernambuco
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[#A6A6A6] max-w-3xl mx-auto leading-relaxed"
            >
              Um aplicativo criado para digitalizar o comércio e os serviços em cidades interioranas,
              oferecendo uma plataforma integrada de e-commerce e prestação de serviços para pequenos
              empreendedores.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-10 bg-[#0a0a0a]">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Conheça o <span className="go-merce-gradient">Aplicativo</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Uma experiência visual completa das funcionalidades e design do GO-Merce
            </p>
          </motion.div>
          <VideoShowcase />
        </div>
      </section>

      {/* User Flow Simulator Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Jornada do <span className="go-merce-gradient">Usuário</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Explore passo a passo como funciona a experiência de compra no GO-Merce
            </p>
          </motion.div>

          <UserFlowSimulator />
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-[#4169E1]" />
              <h2 className="text-4xl font-black text-white">Objetivo</h2>
            </div>
            <div className="bg-gradient-to-br from-[#4169E1]/5 to-transparent border border-[#4169E1]/30 rounded-3xl p-10">
              <p className="text-xl text-[#A6A6A6] leading-relaxed mb-6">
                O GO-Merce nasceu com a missão de{" "}
                <span className="text-[#B8D4FF] font-semibold">promover a inclusão digital</span> e{" "}
                <span className="text-[#B8D4FF] font-semibold">fortalecer a economia regional</span> por meio da
                tecnologia.
              </p>
              <p className="text-lg text-[#A6A6A6] leading-relaxed">
                Conectamos pequenos comerciantes da Zona da Mata Norte de Pernambuco ao mundo digital,
                proporcionando ferramentas acessíveis e eficientes para expandir seus negócios e alcançar
                novos clientes de forma simples e moderna.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Principais <span className="go-merce-gradient">Funcionalidades</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Uma plataforma completa para impulsionar o comércio local
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-[#0a0a0a] border border-[#4169E1]/20 rounded-2xl hover:border-[#4169E1] transition-all hover:shadow-[0_0_30px_rgba(65,105,225,0.2)]"
              >
                <div className="w-16 h-16 bg-[#4169E1]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4169E1]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#4169E1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#A6A6A6] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Tecnologias <span className="go-merce-gradient">Utilizadas</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Stack moderno e confiável para performance e escalabilidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-gradient-to-br from-[#4169E1]/10 to-transparent border border-[#4169E1]/30 rounded-2xl text-center"
              >
                <div className="w-20 h-20 bg-[#4169E1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-[#4169E1]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{tech.name}</h3>
                <p className="text-[#A6A6A6]">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-8 h-8 text-[#4169E1]" />
                  <h2 className="text-4xl font-black text-white">Design & UX</h2>
                </div>
                <p className="text-lg text-[#A6A6A6] leading-relaxed mb-8">
                  Interface hexagonal moderna, acessível e responsiva, com identidade visual única que
                  reflete inovação e profissionalismo.
                </p>

                <div className="space-y-4">
                  {designPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                      <span className="text-white font-semibold">{principle}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1] to-[#B8D4FF] rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-[#0a0a0a] border border-[#4169E1]/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-black text-white mb-6">Paleta de Cores</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl" style={{ backgroundColor: '#4169E1' }} />
                      <div>
                        <div className="text-white font-bold">#4169E1</div>
                        <div className="text-sm text-[#A6A6A6]">Royal Blue - Principal</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl" style={{ backgroundColor: '#B8D4FF' }} />
                      <div>
                        <div className="text-white font-bold">#B8D4FF</div>
                        <div className="text-sm text-[#A6A6A6]">Light Blue - Secundária</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-[#4169E1]/30" style={{ backgroundColor: '#1A1A1A' }} />
                      <div>
                        <div className="text-white font-bold">#1A1A1A</div>
                        <div className="text-sm text-[#A6A6A6]">Dark - Contraste</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-[#4169E1]/30" style={{ backgroundColor: '#FFFFFF' }} />
                      <div>
                        <div className="text-white font-bold">#FFFFFF</div>
                        <div className="text-sm text-[#A6A6A6]">White - Base</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="go-merce-gradient">Impacto Social</span>
            </h2>
            <div className="bg-gradient-to-br from-[#4169E1]/10 to-transparent border border-[#4169E1]/30 rounded-3xl p-10">
              <p className="text-xl text-[#A6A6A6] leading-relaxed mb-6">
                O GO-Merce nasceu como um{" "}
                <span className="text-white font-semibold">projeto acadêmico</span> e hoje representa uma
                ferramenta concreta para modernizar o comércio da{" "}
                <span className="text-[#B8D4FF] font-semibold">Zona da Mata Norte de Pernambuco</span>.
              </p>
              <p className="text-lg text-[#A6A6A6] leading-relaxed mb-8">
                Mais do que um aplicativo, o GO-Merce é um{" "}
                <span className="text-white font-semibold">catalisador de transformação econômica e social</span>,
                democratizando o acesso à tecnologia e empoderando empreendedores locais a competir no
                mercado digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <DemoRequestForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Hexagon className="w-16 h-16 text-[#4169E1] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              O Futuro do Comércio Local <span className="go-merce-gradient">Começa Aqui</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] leading-relaxed">
              GO-Merce: conectando comunidades, impulsionando negócios, transformando vidas.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}