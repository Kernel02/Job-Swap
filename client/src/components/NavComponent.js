export default function NavComponent() {
  return (
    <nav>
      <div class="nav-wrapper black">
        <a href="/" class="brand-logo">
          Job Swap
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a class="btn white black-text" href="/login">
              Login
            </a>
          </li>
          <li>
            <a class="black-text" href="/login">
              Add Job Listing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
