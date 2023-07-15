import search from './assets/search.png';
import user from './assets/user.png';
import './css/NavBar.css'

const NavBar = () => {
  return (
    <div className="App">
        <nav className="navbar sticky-top px-5 py-3">

          <div className="container-fluid">

            <a className="navbar-brand" href="home.html">Titikman</a>


            <div className="search-bar w-50 me-5">
                <form className="d-flex" role="search">
                  <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                  <a className="btn btn-danger" href="searched.html"><img src={search} alt=""/></a>
                </form>
            </div>


            <span className="navbar-text" id="navbarText">
                <div className="btn-group">
                  <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Fredie <img src={user} alt="" id="user-pic"/>
                  </button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="Fredie.html">See Profile</a></li>
                      <li><a className="dropdown-item" href="index.html">Log Out</a></li>
                  </ul>
                </div>
            </span>

          </div>

      </nav>
    </div>
  );
}

export default NavBar;
