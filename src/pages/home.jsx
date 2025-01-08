import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Projets from "../components/home/projets";
import aboutUs from "../components/home/aboutUs.jsx";

export default function Home() {
    return (
        <div>
        <Hero />
        <Services />
        <Projets />
        </div>
    );
}