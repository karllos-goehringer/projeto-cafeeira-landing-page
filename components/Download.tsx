import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      className="py-24 sm:py-32 bg-[#9cc299] text-[#3E3B37] flex items-center justify-center"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-[1.2] mb-6">
          Tudo o que você precisa para gerenciar a sua fazenda, desde o plantio até a venda do seu café.
          <br className="hidden md:inline" />{" "}
          <span className="text-[#C97C7C] font-bold block sm:inline mt-2 sm:mt-0">
            Isso tudo você só encontra em nosso app.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-[#3E3B37] leading-relaxed max-w-3xl mx-auto mb-10 opacity-95">
          Não perca mais tempo com cadernos e planilhas. Baixe o Sysgrano agora, cadastre sua fazenda de forma rápida e simples e tenha acesso imediato aos inúmeros benefícios de nosso app.
        </p>

        {/* Download action with 'Em breve' */}
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="inline-block text-base font-bold text-[#4B2E1B] tracking-wide uppercase bg-white/40 px-4 py-1 rounded-full backdrop-blur-xs mb-1">
            Em breve
          </span>
          <a
            href="#download"
            className="inline-block transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Disponível em breve no Google Play"
          >
            <Image
              src="/assets/disponivel-google-play-badge.png"
              alt="Disponível no Google Play"
              width={240}
              height={80}
              className="h-16 sm:h-20 w-auto object-contain rounded-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

