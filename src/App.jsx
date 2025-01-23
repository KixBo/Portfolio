import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <div className="text-center bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Bienvenue dans mon portfolio !</h1>
        <p className="text-lg mt-4">React et Tailwind CSS sont configurés 🎉</p>
      </div>
    </>
  );
}

export default App;
