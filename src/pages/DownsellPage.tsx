import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Check, 
  AlertTriangle, 
  BookOpen, 
  Download, 
  Printer, 
  Heart, 
  Eye, 
  Gamepad2,
  X
} from "lucide-react";

interface PreviewItem {
  src: string;
  title: string;
  tag: string;
}

const previews: PreviewItem[] = [
  {
    src: "https://i.ibb.co/mCjXq8wh/Matem-tica-no-Mundo-dos-Blocos.png",
    title: "Capa e Apresentação do Matemática no Mundo dos Blocos",
    tag: "Kit Completo",
  },
  {
    src: "https://i.ibb.co/1t1BnD46/Folha-de-Matem-tica-no-Mundo-dos-Blocos.png",
    title: "Folha de Atividades com Desafios e Operações",
    tag: "Atividades Práticas",
  },
  {
    src: "https://i.ibb.co/1fLJrqtm/Atividades-de-Matem-tica-no-Mundo-dos-Blocos.png",
    title: "Exercícios Visuais e Raciocínio Lógico Infantil",
    tag: "1º ao 5º Ano",
  },
  {
    src: "https://i.ibb.co/k2HgWp19/Matem-tica-no-mundo-dos-blocos-2.png",
    title: "Missões no Universo dos Blocos e Probleminhas",
    tag: "Missões Lúdicas",
  },
  {
    src: "https://i.ibb.co/S74jzhmW/Matem-tica-no-mundo-dos-blocos-1.png",
    title: "Atividades Educativas com Recompensas e Desafios",
    tag: "Pronto para Imprimir",
  },
  {
    src: "https://i.ibb.co/XrK80bh7/Ficha-de-Matem-tica-no-Mundo-dos-Blocos.png",
    title: "Fichas Pedagógicas e Exercícios Passo a Passo",
    tag: "Material em PDF",
  },
];

const includedFeatures = [
  "Mais de 360 atividades de matemática.",
  "Conteúdos organizados do 1º ao 5º ano.",
  "Missões e desafios matemáticos.",
  "Atividades de adição e subtração.",
  "Multiplicação e divisão.",
  "Frações, medidas e gráficos.",
  "Probleminhas matemáticos e raciocínio lógico.",
  "Tabuada Visual.",
  "100 Probleminhas Matemáticos.",
  "Mapa de Progresso Matemático.",
  "Cartões de Recompensas.",
  "Guia Rápido para os Pais.",
];

export default function DownsellPage() {
  const [timeLeft, setTimeLeft] = useState(295); // 04:55
  const [selectedImage, setSelectedImage] = useState<PreviewItem | null>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Back-redirect behavior: Push state to retain visitor on exit intent
  useEffect(() => {
    window.history.pushState({ page: "special-offer" }, "", window.location.href);

    const handlePopState = (e: PopStateEvent) => {
      // Re-anchor user to discount offer
      window.history.pushState({ page: "special-offer" }, "", window.location.href);
      const alertElem = document.getElementById("top-alert");
      if (alertElem) {
        alertElem.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const checkoutUrl = "https://pay.wiapy.com/odKQZkb8Q3Lj";

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* --- TOP ALERT BANNER --- */}
      <div 
        id="top-alert"
        className="bg-red-600 text-white py-3 px-4 text-center font-black text-xs md:text-sm uppercase tracking-wider sticky top-0 z-50 shadow-xl flex items-center justify-center gap-2 border-b border-red-700"
      >
        <AlertTriangle className="w-4 h-4 animate-bounce shrink-0" />
        <span>🛑 ATENÇÃO! Não saia desta página ainda...</span>
        <AlertTriangle className="w-4 h-4 animate-bounce shrink-0" />
      </div>

      <main className="flex-grow container max-w-3xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-10">
        
        {/* --- HERO / HEADERS --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 max-w-2xl"
        >
          {/* Badge */}
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-black text-xs md:text-sm px-5 py-2 rounded-full inline-flex items-center gap-2 uppercase tracking-wider shadow-lg shadow-amber-500/20 animate-pulse border border-yellow-300">
            <Sparkles className="w-4 h-4 fill-current" />
            🔥 DESCONTO ESPECIAL DE SAÍDA ATIVADO!
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase text-neutral-50 drop-shadow-md">
            ESPERE! Não vá embora sem garantir uma forma mais divertida de seu filho <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">aprender matemática!</span>
          </h1>

          {/* Paragraphs */}
          <div className="space-y-3 text-neutral-300 text-sm md:text-base leading-relaxed text-left md:text-center max-w-xl mx-auto">
            <p>
              Sabemos que ajudar as crianças a praticar matemática pode ser um desafio, principalmente quando os exercícios tradicionais parecem cansativos, repetitivos ou difíceis.
            </p>
            <p className="font-semibold text-emerald-400">
              Por isso, liberamos uma última oportunidade para você adquirir o <strong className="text-white underline decoration-emerald-500 decoration-2 underline-offset-4">Matemática no Mundo dos Blocos</strong> com uma condição especial de saída!
            </p>
            <p className="text-neutral-400 text-xs md:text-sm bg-neutral-900/80 p-3.5 rounded-xl border border-neutral-800">
              Um material educativo com mais de <strong>360 atividades de matemática</strong>, desenvolvido para crianças do <strong>1º ao 5º ano</strong>, com missões, desafios e exercícios visuais inspirados no universo dos jogos de blocos.
            </p>
          </div>
        </motion.div>

        {/* --- PRICING CARD --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-md bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl border-2 border-emerald-500/50 p-6 md:p-8 space-y-6 shadow-2xl shadow-emerald-950/40 relative overflow-hidden"
        >
          {/* Discount Ribbon */}
          <div className="absolute top-0 right-0 bg-red-600 text-white font-black px-5 py-1 text-xs transform translate-x-5 translate-y-3 rotate-45 shadow-md uppercase tracking-wider">
            67% OFF
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1">
              🔥 OFERTA ESPECIAL DE SAÍDA
            </span>

            {/* Price anchors */}
            <p className="text-neutral-500 text-lg font-semibold line-through decoration-red-500 decoration-2">
              De R$ 59,90
            </p>

            <div className="flex items-baseline justify-center gap-2">
              <span className="text-neutral-300 text-lg font-bold">Por apenas</span>
              <span className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter">
                R$ 7,00
              </span>
            </div>

            <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider pt-1 flex items-center justify-center gap-1.5">
              <span>👉 Pagamento único</span>
              <span>•</span>
              <span>Acesso imediato</span>
              <span>•</span>
              <span className="text-emerald-400 font-black">Material em PDF</span>
            </p>
          </div>

          {/* Checkout Button */}
          <div className="space-y-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.4)", 
                  "0 0 0 12px rgba(16, 185, 129, 0)"
                ],
              }}
              transition={{ 
                boxShadow: {
                  repeat: Infinity, 
                  duration: 1.6 
                } 
              }}
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full h-15 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-neutral-950 font-black text-base md:text-lg rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-green-900/50 transition-all uppercase cursor-pointer tracking-wider"
            >
              <span>QUERO APROVEITAR ESSE DESCONTO!</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
            </motion.a>
            
            {/* Countdown timer */}
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 py-2.5 px-3 rounded-lg border border-amber-500/20">
              <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
              <span>⏳ Essa condição especial ficará disponível por tempo limitado: <strong className="font-mono text-white text-sm bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">{formatTime(timeLeft)}</strong></span>
            </div>
          </div>
        </motion.div>

        {/* --- SECTION: VEJA UM POUCO DO QUE SEU FILHO VAI RECEBER --- */}
        <section className="w-full space-y-6 pt-6 border-t border-neutral-900">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
              <Gamepad2 className="w-4 h-4" />
              Prévia Visual Exclusiva
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-100">
              🎮 Veja um pouco do que seu filho vai receber!
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Mais de 360 atividades educativas para praticar matemática de uma maneira visual, divertida e envolvente.
            </p>
          </div>

          {/* Interactive Carousel for continuous excitement */}
          <div className="relative w-full overflow-hidden py-3 bg-neutral-950/60 rounded-2xl border border-neutral-900">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 w-max cursor-grab active:cursor-grabbing px-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[...previews, ...previews].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(item)}
                  className="w-64 sm:w-72 md:w-80 h-[380px] md:h-[430px] shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 shadow-2xl relative group cursor-pointer flex flex-col p-2"
                >
                  <div className="w-full h-full relative overflow-hidden rounded-lg bg-neutral-950 flex items-center justify-center p-2">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-neutral-900/80 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


        </section>

        {/* --- SECTION: O QUE VOCÊ VAI RECEBER --- */}
        <section className="w-full max-w-xl text-left space-y-6 pt-6 border-t border-neutral-900">
          <div className="text-center space-y-1">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-100 flex items-center justify-center gap-2">
              📦 O que você vai receber nesta oferta especial?
            </h2>
            <p className="text-xs text-neutral-400">
              Kit pedagógico completo, estruturado e pronto para imprimir
            </p>
          </div>

          <div className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-5 md:p-6 shadow-xl">
            <ul className="grid grid-cols-1 gap-3">
              {includedFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral-200">
                  <div className="bg-emerald-500/20 p-1 rounded-full shrink-0 text-emerald-400 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-neutral-800 text-center bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
              <p className="text-xs md:text-sm font-black text-emerald-400 uppercase tracking-wide flex items-center justify-center gap-2">
                <Printer className="w-4 h-4 shrink-0" />
                Tudo organizado em arquivos PDF, prontos para baixar e imprimir!
              </p>
            </div>
          </div>
        </section>



      </main>

      {/* --- MODAL FOR ENLARGING PREVIEW IMAGES --- */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-3.5 px-4 border-b border-neutral-800">
                <span className="text-xs font-bold text-neutral-300">
                  Visualização do Material
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 bg-neutral-950 flex items-center justify-center max-h-[82vh] overflow-y-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[78vh] w-auto object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-neutral-900 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  📄 Arquivo em alta resolução pronto para impressão em folha A4.
                </span>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase rounded-lg transition-colors"
                >
                  Garantir Material
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8 text-center text-xs text-neutral-500 space-y-2 mt-auto">
        <p className="font-medium">
          &copy; 2026 Matemática no Mundo dos Blocos. Todos os direitos reservados.
        </p>
        <p className="text-[11px] text-neutral-600 max-w-md mx-auto">
          Este material educativo é um recurso pedagógico independente para auxílio no ensino da matemática fundamental. Não possui afiliação oficial com Mojang ou marcas registradas.
        </p>
        <div className="flex justify-center gap-4 text-neutral-500 text-[11px] pt-1">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:underline">Suporte</a>
        </div>
      </footer>
    </div>
  );
}
