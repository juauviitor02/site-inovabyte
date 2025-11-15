import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Gomerce from './pages/gomerce';
import Contact from './pages/contact';
import Team from './pages/team';
import ScrollTop from './components/ScrollTop'
function App() {
  return (
    <BrowserRouter>
      <ScrollTop/>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gomerce" element={<Gomerce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;