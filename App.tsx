import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

// Pages as Sections
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Articles from './pages/Articles';
import Profiles from './pages/Profiles';
import Contact from './pages/Contact';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Testimonials from './pages/Testimonials';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="flex flex-col">
          <section id="home">
            <Home />
          </section>
          
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          {/*<section id="achievements">
            <Achievements />
          </section>*/}
          
          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>
          
          {/*<section id="articles">
            <Articles />
          </section>
          
          <section id="profiles">
            <Profiles />
          </section>*/}
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </Layout>
    </Router>
  );
};

export default App;