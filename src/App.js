import './App.scss';
import { Routes, Route } from 'react-router-dom';
//main layout of all pages
import Layout from './components/Layout';
//Route pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


// index attribute is used to set it to the default route
// so index is same as setting it to its parent '/'

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
