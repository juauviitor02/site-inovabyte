import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hexagon, Send, CheckCircle, User, Mail, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WEB3FORMS_KEY = "a3a5bf3f-cd16-4e8b-ac93-c57290549e10";

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Solicitação de Demo - ${formData.name}`);

    // Campos do formulário
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("businessType", formData.businessType);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Erro Web3Forms:", result);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }

    setIsSubmitting(false);
  };

  const businessTypes = [
    "Comércio Varejista",
    "Restaurante/Lanchonete",
    "Serviços em Geral",
    "Supermercado/Mercearia",
    "Moda e Vestuário",
    "Eletrônicos",
    "Artesanato",
    "Outros",
  ];

  return (
    <div className="relative">
      {/* Decor */}
      <div className="absolute -top-20 -right-20 opacity-5 hidden lg:block">
        <Hexagon className="w-64 h-64 text-[#4169E1]" />
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-5 hidden lg:block">
        <Hexagon className="w-48 h-48 text-[#B8D4FF]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#4169E1]/10 to-transparent border-2 border-[#4169E1]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%234169E1' fill-opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4169E1]/20 border border-[#4169E1]/50 rounded-full mb-4">
                <Hexagon className="w-4 h-4 text-[#4169E1]" />
                <span className="text-sm text-[#4169E1] font-bold uppercase tracking-wide">
                  Solicite uma Demonstração
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Teste o <span className="go-merce-gradient">GO-Merce</span>
              </h2>
              <p className="text-lg text-[#A6A6A6] max-w-2xl mx-auto">
                Preencha o formulário e nossa equipe entrará em contato para agendar uma
                demonstração personalizada do aplicativo
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-[#4169E1]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Hexagon className="absolute inset-0 w-full h-full text-[#4169E1] opacity-20" />
                  <CheckCircle className="w-12 h-12 text-[#4169E1] relative z-10" />
                </div>
                <h3 className="text-3xl font-black text-white mb-3">
                  Solicitação Enviada!
                </h3>
                <p className="text-lg text-[#B8D4FF] mb-2">
                  Obrigado pelo interesse no GO-Merce
                </p>
                <p className="text-[#A6A6A6]">
                  Nossa equipe entrará em contato em até 24 horas úteis.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <User className="w-4 h-4 text-[#4169E1]" />
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Seu nome"
                      required
                      className="bg-[#1A1A1A] border-[#4169E1]/30 text-white h-12"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <Mail className="w-4 h-4 text-[#4169E1]" />
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      required
                      className="bg-[#1A1A1A] border-[#4169E1]/30 text-white h-12"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <Phone className="w-4 h-4 text-[#4169E1]" />
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-[#1A1A1A] border-[#4169E1]/30 text-white h-12"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                      <Briefcase className="w-4 h-4 text-[#4169E1]" />
                      Tipo de Negócio
                    </label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                      required
                    >
                      <SelectTrigger className="bg-[#1A1A1A] border-[#4169E1]/30 text-white h-12">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-[#4169E1]/30">
                        {businessTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="text-white focus:bg-[#4169E1]/20"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Conte-nos sobre seu negócio (opcional)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Descreva brevemente seu negócio..."
                    rows={5}
                    className="bg-[#1A1A1A] border-[#4169E1]/30 text-white resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4169E1] hover:bg-[#3157c9] text-white font-bold py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(65,105,225,0.3)] hover:shadow-[0_0_40px_rgba(65,105,225,0.5)] transition-all group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando Solicitação...
                      </>
                    ) : (
                      <>
                        Solicitar Demonstração
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#A6A6A6]">
                    Ao enviar, você concorda em ser contatado por nossa equipe sobre o GO-Merce
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
