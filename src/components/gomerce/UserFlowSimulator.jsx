import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AcompanharPedido from '../../assets/images/screens/acompanhar-pedido.png'
import Chat from '../../assets/images/screens/chat.png'
import Checkout from '../../assets/images/screens/checkout.png'
import Descricao from '../../assets/images/screens/descrição.png'
import Feed from '../../assets/images/screens/feed.png'
import Pagamento from '../../assets/images/screens/pagamento.png'
import Perfil from '../../assets/images/screens/perfil.png'

export default function UserFlowSimulator() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [  
  {
    title: "Descobrir no Feed",
    description: "Explore produtos em um feed visual, como no Instagram",
    screen: Feed,
    action: "Rola pelo feed e encontra produtos em posts",
  },
  {
    title: "Ver Detalhes do Produto",
    description: "Abra posts para ver fotos, vídeos, avaliações e preço",
    screen: Descricao,
    action: "Toca no post para acessar informações completas",
  },
  {
    title: "Comprar Agora",
    description: "Adicione ao carrinho direto do feed ou do post",
    screen: Checkout,
    action: "Coloca os itens no carrinho com um toque",
  },
  {
    title: "Chat com Vendedor",
    description: "Converse pelo chat antes de comprar",
    screen: Chat,
    action: "Tira dúvidas sobre tamanhos, cores e entrega",
  },
  {
    title: "Finalizar Pedido",
    description: "Processe sua compra de forma rápida e segura",
    screen: Pagamento,
    action: "Escolhe pagamento e confirma a compra",
  },
  {
    title: "Acompanhar Status",
    description: "Veja atualizações da compra como notificações do app",
    screen: AcompanharPedido,
    action: "Rastreia o pedido até a entrega",
  },
];


  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="relative">
      {/* Background Hexagons */}
      <div className="absolute -top-10 -left-10 opacity-5">
        <Hexagon className="w-32 h-32 text-[#4169E1]" />
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-5">
        <Hexagon className="w-40 h-40 text-[#B8D4FF]" />
      </div>

      <div className="relative">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((_, index) => (
              <Fragment key={index}>
                <button
                   type="button"
                  onClick={() => setCurrentStep(index)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                    index === currentStep
                      ? "bg-[#4169E1] border-[#4169E1] text-white scale-110"
                      : index < currentStep
                      ? "bg-[#4169E1]/20 border-[#4169E1] text-[#4169E1]"
                      : "bg-transparent border-[#4169E1]/30 text-[#A6A6A6]"
                  }`}
                >
                  {index + 1}
                </button>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 bg-[#4169E1]/20">
                    <div
                      className="h-full bg-[#4169E1] transition-all duration-500"
                      style={{
                        width: index < currentStep ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-[300px]">
              {/* Phone Frame */}
              <div className="relative bg-[#1A1A1A] rounded-[3rem] p-3 border-4 border-[#4169E1]/30 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl z-10" />
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={steps[currentStep].screen}
                        alt={steps[currentStep].title}
                         loading="lazy"
                         decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4169E1]/80 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <div className="text-xs font-semibold mb-1 opacity-90">
                            Passo {currentStep + 1}/{steps.length}
                          </div>
                          <div className="text-sm font-bold">{steps[currentStep].title}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Hexagons around phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 text-[#4169E1] opacity-20"
              >
                <Hexagon className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 text-[#B8D4FF] opacity-20"
              >
                <Hexagon className="w-16 h-16" />
              </motion.div>
            </div>
          </div>

          {/* Step Description */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4169E1]/10 border border-[#4169E1]/30 rounded-full mb-4">
                  <Hexagon className="w-3 h-3 text-[#4169E1]" />
                  <span className="text-sm text-[#4169E1] font-semibold">
                    Etapa {currentStep + 1} de {steps.length}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">
                  {steps[currentStep].title}
                </h3>
                <p className="text-lg text-[#A6A6A6] mb-6 leading-relaxed">
                  {steps[currentStep].description}
                </p>

                <div className="bg-[#4169E1]/5 border border-[#4169E1]/30 rounded-2xl p-6 mb-6">
                  <div className="text-sm text-[#B8D4FF] font-semibold mb-2">Ação do Usuário:</div>
                  <div className="text-white">{steps[currentStep].action}</div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white flex-1 h-10 p-5"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Anterior
                  </Button>
                  <Button
                    onClick={nextStep}
                    className="border-2 border-[#4169E1] bg-[#4169E1] hover:bg-[#3157c9] text-white flex-1 h-10 p-5"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-[#A6A6A6]">
            <div className="w-2 h-2 bg-[#4169E1] rounded-full animate-pulse" />
            Use as setas ou clique nos números para navegar
          </div>
        </div>
      </div>
    </div>
  );
}