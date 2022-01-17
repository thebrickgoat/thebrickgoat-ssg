import Image from 'next/image'
import lilme from '../public/imgs/me.png'

export default function About() {
    return(
        <>
        <section className="about wave">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <h1>PROBLEMS MADE AND SOLVED IN EQUAL MEASURE</h1>
            <p>
              A Designer, Developer, and Lover based in sceinic Chattanooga
              Tennessee.
            </p>
            <Image src={lilme} alt="Lil Me" />
            <img src="/imgs/me.png" className="meImg" alt="Lil Ole Mes"/>
          </div>
        </div>
      </section>
        </>
    );
}
