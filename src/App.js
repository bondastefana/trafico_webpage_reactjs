import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Howto from './pages/Howto/Howto.js'
import Faqs from './pages/Faqs/Faqs.js'
import Contact from './pages/Contact/Contact.js'
import './App.css'

function App () {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/howto'>
            <Howto />
          </Route>
          <Route exact path='/faqs'>
            <Faqs />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
