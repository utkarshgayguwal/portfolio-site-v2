import Cursor  from './components/Cursor'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import Ticker  from './components/Ticker'
import Work    from './components/Work'
import Skills  from './components/Skills'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
