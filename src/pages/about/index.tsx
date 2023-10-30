import Image from 'next/image';
import Link from 'next/link';
import Zainul from "../../../public/assets/man.png"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center px-4">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-x-16">
        <div className="col-span-2">
          <p className="uppercase py-2 tracking-widest text-blue-400 md:text-xl">About</p>
          <h2 className="md:text-2xl lg:text-3xl">Who I am</h2>
          <p className="text-gray-600 py-2 text-sm lg:text-lg lg:max-w-[530px]">
            {' '}
            I am an active student at an Information Technology University. I really like learning,
            that's why i am interested in the world of Technology, especially in application
            development, because in that case i will learn new things
          </p>
          <Link href="/#project">
            <button className="bg-blue-400 px-6 py-2 border-2 border-blue-400 text-white rounded-lg hover:bg-transparent hover:text-blue-400 transition ease-in duration-300 mt-4 mb-4">
              For more project
            </button>
          </Link>
        </div>
        <div className="w-full h-auto mx-auto flex justify-end items-center shadow-xl shadow-blue-100 rounded-xl overflow-hidden hover:scale-95 transition ease-in duration-300 group cursor-pointer">
          <Image
            className="rounded-xl group-hover:scale-110 transition ease-in duration-500"
            src={Zainul}
            alt="Zainul"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
