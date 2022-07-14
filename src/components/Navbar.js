import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <div>
      <aside>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon="fa-house" /> Dashboard
              </Link>
            </li>
            <li>
              <a href="formularios.html">
                <FontAwesomeIcon icon={["fa-solid", "fa-list-check"]} />{" "}
                Formulários
              </a>
            </li>
            <li>
              <a href="relatórios.html">
                <FontAwesomeIcon icon={["fa-solid", "fa-file"]} /> Relatórios
              </a>
            </li>
            <li>
              <Link to="/api/users">Professores</Link>
            </li>
            <li>
              <a href="contactos.html">
                <FontAwesomeIcon icon={["fa-solid", "fa-address-book"]} />{" "}
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main>
        <div class="dashboard-header">
          <header>
            <p>Dashboard</p>
            <div>
              <ul>
                <i class="fa-solid fa-magnifying-glass"></i>
                {/* <li> <input type="search" name="search" id="search"></li> */}
              </ul>
            </div>
            <p>
              <i class="fa-solid fa-right-from-bracket"></i>
              <a href="index.html"> Log Out</a>
            </p>
          </header>
        </div>
      </main>
    </div>
  )
}

export default Navbar
