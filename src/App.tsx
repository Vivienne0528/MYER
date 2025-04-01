import './App.css'
import Banner from './components/Banner'
import Bottom from './components/Bottom'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Top from './components/Top'

function App() {

  return (
    <>
      <main>
        <Top />
        <section className='main-section'>
          <Nav />
          <Banner />
          <p className='stocktake-p'>STOCKTAKE SALE ON NOW</p>
          <Hero />
          <Bottom />
        </section>
      </main>
    </>
  )
}

export default App
