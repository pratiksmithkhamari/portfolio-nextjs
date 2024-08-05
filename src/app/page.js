import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Main from "@/components/main";
import SkillSection from "@/components/Skills";




export default function Home() {
  return (
    <main className="text-white">
        <section className="bg-black h-screen justify-center items-center">
          <Main />
          <Details />
          <SkillSection />
          <Footer />
        </section>
    </main>
  );
}
