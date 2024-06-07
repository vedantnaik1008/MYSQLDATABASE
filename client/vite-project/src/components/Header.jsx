import { Link } from "react-router-dom";


const Header = () => {
  return (
      <header>
          <nav>
              <ul>
                  <li>
                      <Link to='/'>Books</Link>
                  </li>
                  <li>
                      <Link to='/add'>Add</Link>
                  </li>
                  <li>
                      <Link to='/update'>Update</Link>
                  </li>
              </ul>
          </nav>
      </header>
  );
}

export default Header
