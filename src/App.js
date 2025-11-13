import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
// import Treatments from "./pages/Treatments";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/language.context";
import Shiatsu from "./pages/Shiatsu";
import Acupuncture from "./pages/Acupuncture";
import CuppingTherapy from "./pages/CuppingTherapy";
import TestimonialSwiper from "./pages/TestimonialSwiper";
// import {HEBROW, LanguageContext} from './utils/language'

// const router = createBrowserRouter([
//   {
//     path: "/about",
//     element: <About/>,
//   },
//   {
//     path: "/treatments",
//     element: <Treatments/>,
//   },
//   {
//     path: "/",
//     element: <Home/>,
//   },
// ]);

function App() {
  return (
    <Router>
      <div style={{ flexGrow: 1, display: "flex" }}>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/lior-shiatsu" element={<Home />} />
              <Route path="/shiatsu" element={<Shiatsu />} />
              <Route path="/acupuncture" element={<Acupuncture />} />
              <Route path="/cuppingTherapy" element={<CuppingTherapy />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="https://www.lior-shahar.com" element={<Home />} />
              <Route path="/testimonial" element={<TestimonialSwiper />} />
              {/* <Redirect to='/' /> */}
            </Routes>
          </Layout>
        </LanguageProvider>
      </div>
    </Router>
  );
}

export default App;
