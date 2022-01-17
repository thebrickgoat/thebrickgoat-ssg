import Image from "next/image";
import lilme from "../public/imgs/me.png";
import styles from "../styles/sections/about.module.css";

export default function About() {
  return (
    <>
      <section className={[styles.about, "wave"].join(" ")}>
        <div className="container" style={{ display:'flex' }}>
          <div style={{ width: '50vw'}}>
            <h1>PROBLEMS MADE AND SOLVED IN EQUAL MEASURE</h1>
            <p>
              A Designer, Developer, and Lover based in sceinic Chattanooga
              Tennessee.
            </p>
          </div>
          <div style={{ width: '50vw'}}>
            <Image
              className={styles.lilme}
              src={lilme}
              alt="Lil Me"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
}
