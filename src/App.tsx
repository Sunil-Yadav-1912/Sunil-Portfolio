/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebGLBackground from './components/WebGLBackground';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <WebGLBackground />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Journey />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
