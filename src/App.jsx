import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Blog, Newsletter } from "./pages/index";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
