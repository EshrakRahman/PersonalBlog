import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Blog, Newsletter, BlogPost } from "./pages/index";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />

          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blogpost" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
