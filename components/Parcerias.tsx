import Image from "next/image";

interface PartnerItem {
  name: string;
  description: string;
  url: string;
  logo: string;
  logoAlt: string;
}

const partners: PartnerItem[] = [
  {
    name: "IFES - Campus Santa Teresa",
    description:
      "O aplicativo foi desenvolvido por estudantes do curso de graduação Tecnologia em Sistemas para Internet.",
    url: "https://santateresa.ifes.edu.br/",
    logo: "/assets/santa-teresa-horizontal-cor.png",
    logoAlt: "Logo do IFES Campus Santa Teresa",
  },
  {
    name: "NIE-ST",
    description:
      "Núcleo Incubador de Empreendimentos do Ifes Campus Santa Teresa",
    url: "https://santateresa.ifes.edu.br/index.php/noticias/18052-nucleos-do-campus",
    logo: "/assets/incubadoraLogo.jpeg",
    logoAlt: "Logo da Incubadora do IFES Campus Santa Teresa",
  },
];

export default function Parcerias() {
  return (
    <section id="parcerias" className="py-20 sm:py-28 bg-[#F5EFE6]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C97C7C] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-sm">
            Parcerias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight mb-4">
            Quem caminha com a gente
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B37] opacity-85 max-w-xl mx-auto">
            Conheça as organizações que acreditam no projeto e ajudam a torná-lo possível.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-[#FBF8F3] rounded-[20px] border-b-4 border-[#E1D3C1] shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-[#7D9773] transition-all duration-300"
              aria-label={`Visitar site de ${partner.name}`}
            >
              {/* Logo container */}
              <div className="w-full max-w-[200px] h-28 bg-white border-2 border-dashed border-[#E1D3C1] group-hover:border-[#7D9773] rounded-2xl p-3 flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#4B2E1B] mb-2 group-hover:text-[#5c7753] transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm sm:text-base text-[#3E3B37] opacity-85 leading-relaxed">
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

