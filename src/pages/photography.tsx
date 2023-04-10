import Image from 'next/image';
import photographyImg from '../../public/assets/projects/photography.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

const Photography = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[80vh] relative">
        <div className="absolute top-0 left-0 w-screen h-[30vh] lg:h-[80vh] bg-black/60"></div>
        <Image className="absolute -z-10" layout="fill" objectFit="cover" src={photographyImg} alt="/" />
        <div className="absolute top-[70%] lg:top-[89%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-50 p-2 lg:p-4">
          <h2 className="py-2 lg:text-4xl">Photography</h2>
          <h3 className="lg:text-2xl">React JS | Tailwind | Framer Motion</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-8 gap-8 pt-8 p-2">
        <div className="col-span-4 md:col-span-6">
          <p className="uppercase text-blue-400">Project</p>
          <h2 className="md:text-2xl lg:text-3xl lg:py-2">Overview</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            i built this web with react tailwind and framer motion, and it's responsive, you can open it via desktop or mobile, and still have an attractive appearance This website is perfect for you, a photographer who wants to document
            your photos on a website. And for those of you who are not photographers, you can also have a portfolio website according to your passion
          </p>
          <div className="flex gap-x-4 py-4 text-sm lg:text-base">
            <button className="py-2">DEMO</button>
            <button className="py-2">CLOSE</button>
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-lg p-4">
          <div className="p-2">
            <p className="font-semibold text-gray-800">Technologies</p>
            <div className="text-sm lg:text-base grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Google API
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Ziliqa API
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-0 pb-16 max-w-[1240px] mx-auto underline text-blue-600 hover:text-blue-800 transition cursor-pointer px-3">
        <Link href="/#project">
          <p className="flex items-center">
            <IoIosArrowRoundBack className="" size={25} />
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Photography;
