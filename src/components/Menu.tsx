import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuários</Link>
        </li>
        <li>
          <Link to="/not-found">Not Found</Link>
        </li>
      </ul>
    </nav>
  );
}
