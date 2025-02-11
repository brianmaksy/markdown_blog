import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Post from "./pages/post";
import NotFound from "./pages/notfound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
