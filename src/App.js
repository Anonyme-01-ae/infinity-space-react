import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Members from "./components/Members";
import Events from "./components/Events";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";

import { members, pastEvents, futureEvents } from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Members members={members} />
      <Events title="Activités réalisées" events={pastEvents} bgLight={true} />
      <Events title="Activités à venir" events={futureEvents} bgLight={false} />
      <JoinForm />
      <Footer />
    </>
  );
}

export default App;
