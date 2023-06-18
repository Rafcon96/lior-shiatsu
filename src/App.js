import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import { LanguageProvider } from "./context/language.context";
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
      <div
        style={{ height: "calc(100vh - 16px)", display: "grid", padding: 0 }}
      >
        <LanguageProvider>
          <Layout>
            <Routes>
            <Route path="lior-shiatsu/" element={<Home />} />
              <Route path="lior-shiatsu/about" element={<About />} />
              <Route path="lior-shiatsu/treatments" element={<Treatments />} />
              <Route path="lior-shiatsu/prices" element={<Prices />} />
              
            </Routes>
          </Layout>
        </LanguageProvider>
      </div>
    </Router>
  );
}

export default App;
