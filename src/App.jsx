import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="text-center bg-gray-900 text-white h-500 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Bienvenue dans mon portfolio !</h1>
      </div>
    </div>
  );
}

export default App;
