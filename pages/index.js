import Head from 'next/head'
import Intro from '@components/intro'
import About from '@components/about'
import Work from '@components/work'
import Footer from '@components/Footer'
import Skills from '@components/skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <About />
        <Work />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}
