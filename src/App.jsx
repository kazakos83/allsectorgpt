import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CmsPage from "./pages/CmsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CmsPage slug="home" />} />
          <Route path="/services" element={<CmsPage slug="services" />} />
          <Route path="/industries" element={<CmsPage slug="industries" />} />
          <Route path="/contact" element={<CmsPage slug="contact" />} />
          <Route path="/terms" element={<CmsPage slug="terms" />} />
          <Route path="*" element={<CmsPage slug="home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
