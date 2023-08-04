
import React from 'react'
import Navbar from './components/Navbar'
import Messenger from './components/Messenger'
import Skill from './components/Skill'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto ">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      {/* <Footer /> */}
      <Messenger />
    </div>
  );
}

export default App