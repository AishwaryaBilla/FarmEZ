import "./App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Card from "./components/Card";
import TextBlock from "./components/TextBlock";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
import LineGradient from "./components/LineGradient";
import Services from "./scenes/Services";
import Blogs from "./scenes/Blogs";
import { Input, Space } from "antd";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { Carousel } from "antd";
const contentStyle = {
  height: "560px",
  color: "#fff",
  width: "400px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const { Search } = Input;

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <div id="home">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Parallax
          pages={3}
          style={{ top: "0", left: "0" }}
          className="animation"
        >
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="animation_layer parallax" id="logoland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="jungle2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="jungle3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div className="animation_layer parallax" id="jungle4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
          <ParallaxLayer className=" relative ">
            <div className="search flex flex-col items-center">
              <h1 className=" text-8xl pb-[60px] font-bold">FARMEZ</h1>
              <h2 className=" text-[#dba912] font-bold text-3xl pb-8">
                A Plant Disease Detection Pokemon
              </h2>

              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                className=""
                style={{ backgroundColor: "#dba912" }}
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div>
        <TextBlock></TextBlock>
      </div>
      <LineGradient />
      <div className="" id="services">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("services")}
        >
          <div>
            <Services></Services>
            <a href="http://127.0.0.1:8000/">
              <button>Upload</button>
            </a>
          </div>
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto" id="blogs">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("blogs")}
        >
          <Blogs />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto  " id="about">
      </div>
      <div className="w-5/6 mx-auto md:h-full" id="contact">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
