import Head from "next/head";
import Main from "@/component/Main";
import About from "@/component/About";
import Skills from "@/component/Skills";
import Project from "@/component/Project";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zainul Portfolio</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/../public/assets/logo.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
