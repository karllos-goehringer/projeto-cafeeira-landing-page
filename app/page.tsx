import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recursos from "@/components/Recursos";
import AppShowcase from "@/components/AppShowcase";
import PorQueSysgrano from "@/components/PorQueSysgrano";
import Parcerias from "@/components/Parcerias";
import Download from "@/components/Download";
import Manual from "@/components/Manual";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf9] text-[#3E3B37]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Recursos />
        <AppShowcase />
        <PorQueSysgrano />
        <Parcerias />
        <Download />
        <Manual />
      </main>
      <Footer />
    </div>
  );
}
