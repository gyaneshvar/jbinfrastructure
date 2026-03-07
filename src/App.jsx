import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Quality from './components/Quality'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Projects />
        <Gallery />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
