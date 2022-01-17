import styles from '../styles/sections/intro.module.css'

export default function Intro() {
  return (
    <>
      <section className={[styles.intro, styles.conatinere, 'wave'].join(' ')}>
        <div id="threedContainer">
          <div className={styles.threedText}>
            <h1>THEBRICKGOAT</h1>
            <h2>a whole handfull of something</h2>
          </div>
        </div>
      </section>
    </>
  );
}
