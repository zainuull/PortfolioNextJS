import Head from 'next/head';
import Banner from './banner';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zainul Portfolio</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/../public/assets/logo.png" />
      </Head>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
