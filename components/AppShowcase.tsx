"use client";

import { useState } from "react";
import Image from "next/image";

interface SlideData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: "s1",
    number: "01 / 08",
    title: "Cadastro de Propriedade",
    description:
      "Cadastre sua propriedade no app para gerir talhões, safras e atividades. Fique de olho na previsão do tempo diretamente na página inicial.",
    image: "/assets/appHome-3.jpeg",
  },
  {
    id: "s2",
    number: "02 / 08",
    title: "Cotação do Café",
    description:
      "Fique por dentro do preço do café em tempo real pelo tipo de café e por saca.",
    image: "/assets/appHome-2.jpeg",
  },
  {
    id: "s3",
    number: "03 / 08",
    title: "Agende Atividades no Calendário",
    description:
      "Cadastre as atividades que planeja realizar em um talhão no calendário e salve todas as informações que precisa.",
    image: "/assets/appEvento-1.jpeg",
  },
  {
    id: "s4",
    number: "04 / 08",
    title: "Atividades a Realizar",
    description:
      "Encontre todas as atividades que devem ser feitas em determinado dia em um só lugar. Você receberá notificações para lembrar delas.",
    image: "/assets/appEvento-2.jpeg",
  },
  {
    id: "s5",
    number: "05 / 08",
    title: "Talhões",
    description:
      "Gerencie cada talhão de forma simples, rápida e prática.",
    image: "/assets/appTalhao.jpeg",
  },
  {
    id: "s6",
    number: "06 / 08",
    title: "Controle Financeiro",
    description:
      "No aplicativo Sysgrano você pode organizar suas despesas por meio do Relatório Financeiro. Controle seus gastos como pagamento de funcionários e compra de insumos de forma rápida e acessível.",
    image: "/assets/appFinanceiro-1.jpeg",
  },
  {
    id: "s7",
    number: "07 / 08",
    title: "Armazém Digital",
    description:
      "Armazene no app os insumos e o café que possui, juntamente com a quantidade de cada um. Registre compras e tenha controle sobre tudo o que possui fácilmente.",
    image: "/assets/appArmazem-2.jpeg",
  },
  {
    id: "s8",
    number: "08 / 08",
    title: "Cadastro de Funcionários e Fornecedores",
    description:
      "Cadastre seus funcionários e fornecedores para facilitar pagamentos e manter resgistrado com quem comprou insumos e muito mais.",
    image: "/assets/appFornecedor.jpeg",
  },
];

export default function AppShowcase() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[current];

  return (
    <section id="destaques" className="py-20 sm:py-28 bg-[#E1D3C1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight">
            Algumas Telas do Aplicativo
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="bg-[#FBF8F3] rounded-[24px] shadow-xl p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#4B2E1B]/5 transition-all">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-center gap-8 lg:gap-14">
            {/* Phone Image with offset border */}
            <div className="flex justify-center">
              <div className="relative w-[220px] sm:w-[280px] aspect-[763/1600]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] border-[3px] border-[#C97C7C] -z-0"
                />
                <div className="relative z-12 w-full h-full rounded-[18px] overflow-hidden bg-[#E1D3C1] shadow-md">
                  <Image
                    src={activeSlide.image}
                    alt={`Print da tela: ${activeSlide.title}`}
                    fill
                    className="object-contain transition-opacity duration-300"
                    sizes="(max-width: 768px) 240px, 280px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content & Navigation */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-bold text-[#7D9773] tracking-widest uppercase mb-3">
                {activeSlide.number}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B2E1B] mb-4 leading-tight">
                {activeSlide.title}
              </h3>
              <p className="text-base sm:text-lg text-[#3E3B37] leading-relaxed mb-8 opacity-90 max-w-xl">
                {activeSlide.description}
              </p>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-13 h-13 rounded-full border-2 border-[#4B2E1B] text-[#4B2E1B] flex items-center justify-center hover:bg-[#C97C7C] hover:border-[#C97C7C] hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  aria-label="Slide anterior"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-13 h-13 rounded-full bg-[#4B2E1B] border-2 border-[#4B2E1B] text-[#E1D3C1] flex items-center justify-center hover:bg-[#C97C7C] hover:border-[#C97C7C] hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  aria-label="Próximo slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-9 bg-[#C97C7C]"
                    : "w-3 bg-[#4B2E1B]/30 hover:bg-[#4B2E1B]/60"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

