"use client";
import About from "@/components/Landing/About";
import Banners from "@/components/Landing/Banners";
import Category from "@/components/Landing/Category";
import Customer from "@/components/Landing/Customer";
import LatestHandiCraft from "@/components/Landing/LatestHandicraft";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";
import BoilerPlate from "./BoilerPlate";

export default function Home() {
  return (
    <div className="w-full h-full min-w-[80vw] min-h-[80vh] max-w-screen overflow-hidden">
      <BoilerPlate>
        <Banners />
        <Specials />
        <LatestHandiCraft />
        <About />
        <Category />
        <Menu />
        <Customer />
      </BoilerPlate>
    </div>
  );
}
