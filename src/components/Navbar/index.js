import { Link } from "react-router-dom";
import "./styleNav.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        Post
      </Link>
      <Link className="link" to="/create-post">
        Create Post
      </Link>
    </nav>
  );
}
