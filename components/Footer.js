import styles from "styles/sections/footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="contact">
        <h1>NEED SOMETHING FANCY?</h1>
        <p>lemme know, im always down</p>
        <form name="contact" netlify>
          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      <footer className={styles.footer}>
        <div className={styles.title}>THEBRICKGOAT</div>
        <div className={styles.email}>
          <h1>EMAIL ME LIKE ITS 2AM</h1>
          <h2>thebrickgoat@gmail.com</h2>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <a href="https://github.com/thebrickgoat/"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/thebrickgoat/"></a>
            </li>
            <li>
              <a href="https://glitch.com/@thebrickgoat"></a>
            </li>
            <li>
              <a href="https://dribbble.com/thebrickgoat"></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
