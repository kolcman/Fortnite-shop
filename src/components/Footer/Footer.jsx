import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`page-footer grey darken-4 ${styles.footer}`}>
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} by Kolcman
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/kolcman/Fortnite-shop"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
