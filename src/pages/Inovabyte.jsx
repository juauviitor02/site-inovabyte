import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        from_name: "Site Inova Byte",
        to: "contato@inovabyte.com",
        subject: `Nova mensagem de ${formData.name}`,
        body: `
          Nome: ${formData.name}
          Email: ${formData.email}
          
          Mensagem:
          ${formData.message}
        `,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "inovabyte.sistemas@gmail.com",
      link: "mailto:contato@inovabyte.com",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Zona da Mata Norte - PE, Brasil",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(81) 9 9999-9999",
      link: "tel:+5581999999999",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #03FA6E 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, #03FA6E 0%, transparent 50%)`,
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
              <span className="text-sm text-[#03FA6E] font-semibold">Vamos Conversar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed">
              Estamos prontos para transformar suas ideias em soluções digitais de impacto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">Informações de Contato</h2>
              <p className="text-[#A6A6A6] text-lg leading-relaxed mb-10">
                Tem uma ideia? Um projeto? Ou apenas quer conversar sobre tecnologia? 
                Estamos aqui para ajudar a transformar sua visão em realidade.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-black border border-[#03FA6E]/20 rounded-2xl hover:border-[#03FA6E]/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#03FA6E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#03FA6E]/20 transition-colors">
                      <info.icon className="w-6 h-6 text-[#03FA6E]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#A6A6A6] mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-semibold hover:text-[#03FA6E] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-gradient-to-br from-[#03FA6E]/5 to-transparent border border-[#03FA6E]/30 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-[#A6A6A6]">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p className="text-sm text-[#03FA6E] font-semibold mt-4">
                    Respondemos em até 24 horas úteis
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-black border border-[#03FA6E]/30 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-black text-white mb-6">Envie sua Mensagem</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[#03FA6E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#03FA6E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Mensagem Enviada!</h3>
                    <p className="text-[#A6A6A6]">
                      Obrigado pelo contato. Responderemos em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        required
                        className="bg-[#0a0a0a] border-[#03FA6E]/30 text-white placeholder:text-[#A6A6A6] focus:border-[#03FA6E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        required
                        className="bg-[#0a0a0a] border-[#03FA6E]/30 text-white placeholder:text-[#A6A6A6] focus:border-[#03FA6E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Conte-nos sobre seu projeto ou dúvida..."
                        required
                        rows={6}
                        className="bg-[#0a0a0a] border-[#03FA6E]/30 text-white placeholder:text-[#A6A6A6] focus:border-[#03FA6E] transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#03FA6E] hover:bg-[#02e661] text-black font-bold py-6 text-lg rounded-xl glow-border group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Conectamos <span className="gradient-text">Tecnologia e Propósito</span>
            </h2>
            <p className="text-lg text-[#A6A6A6] leading-relaxed mb-8">
              Atuamos principalmente na Zona da Mata Norte de Pernambuco, mas nossos projetos alcançam
              todo o Brasil. Entre em contato e vamos conversar sobre como podemos ajudar sua empresa
              a crescer no mundo digital.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Consultoria Gratuita", "Orçamento Sem Compromisso", "Suporte Dedicado"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-[#03FA6E]/10 border border-[#03FA6E]/30 rounded-full text-[#03FA6E] font-semibold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}