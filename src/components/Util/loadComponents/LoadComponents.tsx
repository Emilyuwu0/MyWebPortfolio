// Page.jsx
import React, { useState, useEffect } from 'react';
import Layout from "../../../layouts/Layout.astro";
import Hero from "../../Hero/hero";
import Aboute from "../../About/aboute";
import Skills from "../../Skills/skills";
import TimelineMe from "../../Timeline/timeline";
import ProjectsCv from "../../Projects/projects";
import ContactForm from "../../Contact/contact";
import Footer from "../../Footer/footer";
import Loading from "../loading/Loading"; // Asegúrate de que la ruta sea correcta

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      // Simula la carga de componentes
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 segundos de carga
      setLoading(false);
    };

    loadComponents();
  }, []);

  return (
    
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Hero  />
            <Aboute  />
            <Skills />
            <TimelineMe  />
            <ProjectsCv />
            <ContactForm />
            <Footer  />
          </>
        )}
      </>
   
  );
};

export default Page;
