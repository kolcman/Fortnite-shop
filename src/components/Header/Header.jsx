import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <a href="#" className="brand-logo">
        Fortnite shop
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li> */}
        <li>
          <a href="collapsible.html">Repo</a>
        </li>
      </ul>
    </div>
  );
}
