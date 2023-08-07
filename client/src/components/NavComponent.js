export default function NavComponent() {
  return (
    <nav>
      <div className="nav-wrapper black">
        <a href="/" className="brand-logo">
          Job Swap
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="btn white black-text" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="" href="/addJob">
              Add Job Listing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
