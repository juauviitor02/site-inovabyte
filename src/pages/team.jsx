import React from "react";
import { motion } from "framer-motion";
import { Users, Linkedin, Github, Mail, Code, Palette, TrendingUp, Briefcase, MessageSquare, Zap, icons, Timer } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Thiago Araújo",
      role: "Desenvolvedor Fullstack",
      subtitle: "Desenvolvedor Fullstack",
      description: "Lidera o desenvolvimento técnico e garante a qualidade das soluções entregues",
      image: "src/assets/images/equipe/thiago.png",
      icon: Code,
      skills: ["React", "Node.js", "Python", "DevOps"],
    },
    {
      name: "Guilherme da Silva",
      role: "Desenvolvedor FrontEnd",
      subtitle: "Desenvolvedor FrontEnd",
      description: "Especialista em criar interfaces modernas e experiências de usuário excepcionais",
      image: "src/assets/images/equipe/gui.png",
      icon: Palette,
      skills: ["React", "UI/UX", "TypeScript", "Tailwind"],
      highlight: true,
    },
    {
      name: "Laiza Rayane",
      role: "Gerente de Mídias Sociais",
      subtitle: "",
      description: "Responsável pela estratégia digital e presença da marca nas redes sociais",
      image: "src/assets/images/equipe/laiza.png",
      icon: MessageSquare,
      skills: ["Marketing", "Branding", "Content", "Analytics"],
      highlight: true,
    },
    {
      name: "João Vitor",
      role: "Gerente de Projetos e Dev Web",
      subtitle: "",
      description: "Gerencia projetos e desenvolve soluções web de alta qualidade",
      image: "src/assets/images/equipe/joao.png",
      icon: Briefcase,
      skills: ["Gestão", "Web Dev", "Scrum", "Strategy"],
      highlight: true,
    },
    {
      name: "Maria Clara",
      role: "Desenvolvedora FrontEnd e Especialista em Interface",
      subtitle: "",
      description: "Transforma designs em código com atenção aos detalhes e performance",
      image: "src/assets/images/equipe/clara.png",
      icon: Code,
      skills: ["React", "CSS", "JavaScript", "Responsive"],
    },
    {
      name: "Edmilson",
      role: "Desenvolvedor FrontEnd e Engenheiro de Interface",
      subtitle: "",
      description: "Foca em criar componentes reutilizáveis e código limpo e eficiente",
      image: "src/assets/images/equipe/edmilson.png",
      icon: Code,
      skills: ["React", "Vue.js", "HTML5", "Animation"],
    },
  ];

  const iconsStats = [
    { icon1: Timer },
    { icon2: Zap },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #03FA6E 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#03FA6E]" />
              <span className="text-sm text-[#03FA6E] font-semibold">Conheça Nossa Equipe</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              As Pessoas Por Trás da <span className="gradient-text">Inovação</span>
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed max-w-2xl mx-auto">
              Uma equipe apaixonada por tecnologia e comprometida em criar soluções que
              transformam negócios e impactam vidas
            </p>
          </motion.div>
        </div>
      </section>
      <div className="border-t border-[#03FA6E]/20 mt-8 pt-8 text-center"></div>

      {/* Team Members Grid */}
      <section className="p-10 bg-black">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Nosso <span className="gradient-text">Time</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
              Profissionais dedicados com experiências diversas unidos por um objetivo comum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-[#0a0a0a] rounded-3xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(3,250,110,0.2)] ${member.highlight ? "border-2 border-[#03FA6E]/50" : "border border-[#03FA6E]/20"
                  } hover:border-[#03FA6E]`}
              >
                {/* Founder Badge */}
                {member.highlight && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#03FA6E] rounded-full">
                    <span className="text-xs font-bold text-black uppercase tracking-wide">Fundador</span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-[#03FA6E]/10 to-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#03FA6E]/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#03FA6E] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-[#03FA6E] font-bold text-sm mb-1">{member.role}</div>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed mb-6">{member.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-xs text-[#03FA6E] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                O Que Nos <span className="gradient-text">Une</span>
              </h2>
              <p className="text-lg text-[#A6A6A6]">
                Valores compartilhados que guiam nosso trabalho diário
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Inovação Constante",
                  description: "Buscamos sempre novas tecnologias e soluções criativas",
                },
                {
                  icon: Users,
                  title: "Trabalho em Equipe",
                  description: "Colaboração e comunicação são essenciais para nosso sucesso",
                },
                {
                  icon: TrendingUp,
                  title: "Crescimento Contínuo",
                  description: "Investimos no desenvolvimento pessoal e profissional",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-6 bg-black border border-[#03FA6E]/20 rounded-2xl hover:border-[#03FA6E] transition-all hover:shadow-[0_0_30px_rgba(3,250,110,0.15)]"
                >
                  <div className="w-12 h-12 bg-[#03FA6E]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#03FA6E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-[#03FA6E]/10 to-transparent border border-[#03FA6E]/30 rounded-3xl"
          >
            <div className="w-16 h-16 bg-[#03FA6E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#03FA6E]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Quer Fazer Parte do <span className="gradient-text">Time</span>?
            </h2>
            <p className="text-lg text-[#A6A6A6] mb-8 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos apaixonados por tecnologia e inovação.
              Se você compartilha dos nossos valores, adoraríamos conhecê-lo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:inovabyte.sistemas@gmail.com?subject=Oportunidade de Carreira na Inova Byte"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold rounded-xl glow-border transition-all group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Currículo
              </a>
              <a
                href={window.createPageUrl ? window.createPageUrl("Contact") : "/Contact"}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#03FA6E] text-[#03FA6E] hover:bg-[#03FA6E] hover:text-black font-bold rounded-xl transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}