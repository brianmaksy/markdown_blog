import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <hr/>
      <p>&copy; Brian Mak {new Date().getFullYear()}</p>
    </footer>
  )
}
