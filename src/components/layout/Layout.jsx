import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { path } from "framer-motion/client";
import logo from "./logo-nav.png"
import "./layout.css"
import home from "../../pages/home"

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > -20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Início", path: "Home" },
    { name: "Sobre", path: "About" },
    { name: "Equipe", path: "Team " },
    { name: "Serviços", path: "Services" },
    { name: "Portfólio", path: "Portfolio" },
    { name: "GO-Merce", path: "GoMerce", highlight: true },
    { name: "Contato", path: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
        
        :root {
          --neon-green: #03FA6E;
          --black: #000000;
          --gray: #A6A6A6;
        }
        
        * {
          font-family: 'Montserrat', sans-serif;
        }
        
        .glow-text {
          text-shadow: 0 0 10px var(--neon-green), 0 0 20px var(--neon-green);
        }
        
        .glow-border {
          box-shadow: 0 0 15px rgba(3, 250, 110, 0.3);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--neon-green) 0%, #00ff88 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${"bg-black/100 bg-opacity border-b border-[#03FA6E]/20"
          }`}
      >
        <nav id="divNav" className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between ">
            {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center gap-2 group w-24"> <img src={logo} alt="Inova Byte Logo" loading="eager" decoding="async" /></Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`relative text-s font-semibold transition-colors group ${item.highlight
                      ? "text-[#03FA6E] glow-text"
                      : location.pathname === createPageUrl(item.path)
                        ? "text-white"
                        : "text-[#A6A6A6] hover:text-white"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#03FA6E] transition-all duration-300 ${location.pathname === createPageUrl(item.path) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#03FA6E] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 1, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 1, height: 0 }}
                className="md:hidden mt-4 border-t border-[#03FA6E]/20 pt-4"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`block py-3 text-sm font-semibold transition-colors ${item.highlight
                        ? "text-[#03FA6E] glow-text"
                        : location.pathname === createPageUrl(item.path)
                          ? "text-white"
                          : "text-[#A6A6A6] hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#03FA6E]/20 mt-20">
        <div className="container mx-auto px-10 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div>
                </div>
                  <Link to={createPageUrl("Home")} className="flex items-center gap-2 group w-24"> <img src={logo} alt="Inova Byte Logo" loading="eager" decoding="async" /></Link>
              </div>
              <p className="text-sm text-[#A6A6A6] mb-4 max-w-md">
                Soluções digitais que transformam realidades. Conectamos tecnologia e propósito para
                fortalecer economias locais.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-4">Navegação</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className="block text-sm text-[#A6A6A6] hover:text-[#03FA6E] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-[#A6A6A6]">
                <p><span className="text-white">E-mail: </span>inovabyte.sistemas@gmail.com</p>
                <p><span className="text-white">Telefone: </span>(81) 9 3631-5266</p>
                <p><span className="text-white">Endereço: </span>BR-408 - Sapucaia, Timbaúba - PE, CEP: 55871-665
                </p>
                <p><span className="text-white">Horário de funcionamento: </span>Segunda a Sexta: 8h às 18h <br/>Sábado: 9h às 13h</p>
                <p>Brasil</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#03FA6E]/20 mt-8 pt-8 text-center">
            <p className="text-sm text-[#A6A6A6]">
              © 2025 Inova Byte Sistemas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}