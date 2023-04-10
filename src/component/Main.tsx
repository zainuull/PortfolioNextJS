import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="w-full h-full max-w-[1240px] mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-gray-600 tracking-widest text-xs md:text-sm lg:text-base">Let's build something together</p>
          <h1 className="uppercase text-xl tracking-widest mt-2 lg:mt-6 lg:text-4xl">
            Hi, I'm <span className="text-blue-500">Zainul</span>
          </h1>
          <h1 className="uppercase text-xl tracking-wide lg:text-4xl">A Front-End Web Developer</h1>
          <p className="max-w-[85%] md:max-w-[65%] mx-auto py-3 text-gray-600 text-xs md:text-sm lg:text-base">I’m focused on building responsive front-end web applications with integrating back-end technologies.</p>
          <div className="flex justify-center items-center gap-x-2 lg:gap-x-8 py-6 text-blue-500">
            <Link href="https://www.linkedin.com/in/thobazb" target='_blank'>
              <div className="rounded-full shadow-lg shadow-blue-200 hover:scale-110 p-6 cursor-pointer transition ease-in duration-300">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/zainuul" target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-200 hover:scale-110 p-6 cursor-pointer transition ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="https://www.instagram.com/zainuull_" target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-200 hover:scale-110 p-6 cursor-pointer transition ease-in duration-300">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=6288298813114" target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-200 hover:scale-110 p-6 cursor-pointer transition ease-in duration-300">
                <FaWhatsapp />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
