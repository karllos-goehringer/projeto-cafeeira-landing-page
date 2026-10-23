import Image from "next/image";

interface PartnerItem {
  name: string;
  description: string;
  url: string;
  logo: string;
  logoAlt: string;
  logoFrameClassName?: string;
}

const partners: PartnerItem[] = [
  {
    name: "AGIFES",
    description: "Agência de Inovação do Ifes",
    url: "https://ifes.edu.br/",
    logo: "/assets/apoiadoras/AGIFES.png",
    logoAlt: "Logo da AGIFES",
    logoFrameClassName: "bg-[#278041]",
  },
  {
    name: "CNPq",
    description: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    url: "https://www.gov.br/cnpq/",
    logo: "/assets/apoiadoras/cnpq-logo-png_seeklogo-32726.png",
    logoAlt: "Logo do CNPq",
  },
  {
    name: "FAPES",
    description: "Fundação de Amparo à Pesquisa e Inovação do Espírito Santo",
    url: "https://fapes.es.gov.br/",
    logo: "/assets/apoiadoras/fapesLogo.png",
    logoAlt: "Logo da FAPES",
  },
  {
    name: "IFES — Campus Santa Teresa",
    description: "Instituto Federal do Espírito Santo",
    url: "https://santateresa.ifes.edu.br/",
    logo: "/assets/apoiadoras/IFES-ST.png",
    logoAlt: "Logo do IFES Campus Santa Teresa",
  },
  {
    name: "Incubadora do Ifes",
    description: "Núcleo Incubador do Campus Santa Teresa",
    url: "https://santateresa.ifes.edu.br/index.php/noticias/18052-nucleos-do-campus",
    logo: "/assets/apoiadoras/incubadoraIFES.png",
    logoAlt: "Logo da Incubadora do Ifes",
  },
  {
    name: "MCTI",
    description: "Ministério da Ciência, Tecnologia e Inovação",
    url: "https://www.gov.br/mcti/",
    logo: "/assets/apoiadoras/MCTI.avif",
    logoAlt: "Logo do MCTI",
  },
  {
    name: "MEMP",
    description:
      "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte",
    url: "https://www.gov.br/memp/",
    logo: "/assets/apoiadoras/MEMP.jpg",
    logoAlt: "Logo do MEMP",
  },
];

function PartnerCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="partners-marquee-group flex shrink-0 gap-5 pr-5 sm:gap-7 sm:pr-7"
      aria-hidden={duplicate || undefined}
    >
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          className="group flex w-[230px] shrink-0 flex-col items-center rounded-[20px] border-b-4 border-[#E1D3C1] bg-[#FBF8F3] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7D9773] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c7753] sm:w-[260px] sm:p-7"
          aria-label={`Visitar site de ${partner.name}`}
        >
          <div
            className={`relative mb-5 flex h-28 w-full items-center justify-center overflow-hidden rounded-2xl p-4 ${
              partner.logoFrameClassName ?? "bg-white"
            }`}
          >
            <Image
              src={partner.logo}
              alt={partner.logoAlt}
              fill
              sizes="(max-width: 640px) 190px, 212px"
              className="object-contain p-4"
            />
          </div>
          <h3 className="mb-2 text-lg font-bold leading-snug text-[#4B2E1B] transition-colors group-hover:text-[#5c7753]">
            {partner.name}
          </h3>
          <p className="text-sm leading-relaxed text-[#3E3B37]/85">
            {partner.description}
          </p>
        </a>
      ))}
    </div>
  );
}

export default function Parcerias() {
  return (
    <section id="parcerias" className="overflow-hidden bg-[#F5EFE6] py-20 sm:py-28">
      <div className="mx-auto mb-14 max-w-2xl px-4 text-center sm:mb-18 sm:px-6 lg:px-8">
        <span className="mb-4 inline-block rounded-full bg-[#C97C7C] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm sm:text-sm">
          Parcerias
        </span>
        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#4B2E1B] sm:text-4xl lg:text-5xl">
          Quem caminha com a gente
        </h2>
        <p className="mx-auto max-w-xl text-base text-[#3E3B37] opacity-85 sm:text-lg">
          Conheça as organizações que acreditam no projeto e ajudam a torná-lo
          possível.
        </p>
      </div>

      <div
        className="partners-marquee"
        aria-label="Apoiadoras do projeto"
        role="region"
      >
        <div className="partners-marquee-track">
          <PartnerCards />
          <PartnerCards duplicate />
        </div>
      </div>
    </section>
  );
}
