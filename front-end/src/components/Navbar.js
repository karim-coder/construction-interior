function NavBar(props) {
  const construction = props.construction || "";
  const renovation = props.renovation || "";
  const interiorDesign = props.interiorDesign || "";
  const painting = props.painting || "";
  const projects = props.projects || "";
  const pricing = props.pricing || "";

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={"nav-link" + construction} href="#">
                Construction
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + interiorDesign} href="/flat-details">
                Interior Design
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + renovation} href="/search-result">
                Renovation
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + painting} href="#">
                Painting
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + projects} href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + pricing} href="/add-flat">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
