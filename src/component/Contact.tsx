import Image from 'next/image';
import foto1 from '../../public/assets/contact.jpg';
import Link from 'next/link';
// Icons
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
        <p className="uppercase tracking-widest text-blue-400 py-2">Contact</p>
        <h3 className="md:text-2xl lg:text-3xl pb-4">Get In Touch</h3>
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-200 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <Image className="rounded-xl hover:scale-105 transition ease-in duration-300" src={foto1} alt="/" />
              <div className="py-2">
                <h2 className="text-xl tracking-wides md:text-2xl lg:text-3xlt">Zainul</h2>
                <p className="pb-2 md:text-xl">Front End Developer</p>
                <p className="pb-4">I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
              </div>
              <div>
                <p className="uppercase">Connect with me</p>
                <div className="flex justify-between items-center pt-4 pb-8">
                  <Link href="https://www.linkedin.com/in/thobazb" target="_blank">
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

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-blue-200 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className=" border-2 border-gray-400 p-3 outline-none flex rounded-lg" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input className=" border-2 border-gray-400 p-3 outline-none flex rounded-lg" type="tel" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className=" border-2 border-gray-400 p-3 outline-none flex rounded-lg" type="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input className=" border-2 border-gray-400 p-3 outline-none flex rounded-lg" type="text" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className=" border-2 border-gray-400 p-3 outline-none flex rounded-lg" rows={10} />
                </div>
                <div className="w-full flex flex-col py-4 lg:max-w-xs">
                  <button className="">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll Top */}
        <div className="flex justify-center items-center pt-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-blue-200 hover:scale-110 p-6 cursor-pointer transition ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-blue-600 text-xl lg:text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
