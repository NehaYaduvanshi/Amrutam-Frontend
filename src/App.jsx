import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Join from './components/Join'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Promotion from './components/Promotion'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
        <Featured/>
        <About/>
        <Join/>
        <Testimonial/>
        <Faq/>
        <Promotion/>
        <Connect/>
        <Footer/>
      </div>
    </>
  )
}

export default App
