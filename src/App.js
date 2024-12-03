import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
import VideoSection from "./VideoSection";
import CallToAction from "./CallToAction";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Introduction />
      <VideoSection />
      <CallToAction />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
