import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Projets from "../components/home/projets";
import AboutUs from "../components/home/aboutUs";
import Team from "../components/home/team";
import Faqs from "../components/home/faqs";

export default function Home() {
    return (
        <>
        <Hero />
        <Services />
        <Projets />
        <AboutUs />
        <Team />
        <Faqs />
        </>
    );
}