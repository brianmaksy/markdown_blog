import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Brian Mak
      </a>
      <nav>
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  );
}
