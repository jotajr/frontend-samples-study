import { NavBar, Hero } from "./sections";

function App() {
  return (
    <main className=" bg-black text-white relative">
      <NavBar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
    </main>
  );
}

export default App;
