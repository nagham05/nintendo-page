import './App.css'
import Header from './components/Header'
import LandingItems from './components/LandingItems'
import About from './components/About'
import AboutItem from './components/AboutItem'
import MoreLikeThis from './components/MoreLikeThis'
import Footer from './components/Footer'
import ScrollingHeader from './components/ScrollingHeader'

function App() {


  return (
    <div className="overflow-x-hidden">
        <ScrollingHeader />
        <Header />
        <LandingItems />
        <About />
        <AboutItem />
        <MoreLikeThis />
        <Footer />
    </div>
  )
}

export default App
