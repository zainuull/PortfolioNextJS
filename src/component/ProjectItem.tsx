import Image from 'next/image';
import Link from 'next/link';
// Image
import project1 from '../../public/assets/projects/realestate.png';
import project2 from '../../public/assets/projects/photography.png';
import project3 from '../../public/assets/projects/defi.png';
import project4 from '../../public/assets/projects/netflix.jpg';


const ProjectItem = () => {
  return (
    <>
      {/* Project 1 */}
      <div className="relative w-full h-auto flex justify-center items-center shadow-xl rounded-xl shadow-blue-200 hover:bg-blue-400 transition ease-in duration-300 p-2 group">
        <Image className="rounded-xl group-hover:opacity-10 group-hover:scale-105 transition ease-in duration-300" src={project1} alt="/" />
        <div className="hidden group-hover:block absolute text-center">
          <p className="text-xl text-white">Real Estate</p>
          <h2 className="text-2xl text-white pb-4">React JS</h2>
          <Link href='/realestate'>
            <p className="bg-white border-2 border-white text-black px-6 py-2 rounded-lg hover:bg-transparent hover:text-white transition ease-in duration-300 cursor-pointer">More Info</p>
          </Link>
        </div>
      </div>
      {/* Project 2 */}
      <div className="relative w-full h-auto flex justify-center items-center shadow-xl rounded-xl shadow-blue-200 hover:bg-blue-400 transition ease-in duration-300 p-2 group">
        <Image className="rounded-xl group-hover:opacity-10 group-hover:scale-105 transition ease-in duration-300" src={project2} alt="/" />
        <div className="hidden group-hover:block absolute text-center">
          <p className="text-xl text-white">Photography</p>
          <h2 className="text-2xl text-white pb-4">React JS</h2>
          <Link href='/photography'>
            <p className="bg-white border-2 border-white text-black px-6 py-2 rounded-lg hover:bg-transparent hover:text-white transition ease-in duration-300 cursor-pointer">More Info</p>
          </Link>
        </div>
      </div>
      {/* Project 3 */}
      <div className="relative w-full h-auto flex justify-center items-center shadow-xl rounded-xl shadow-blue-200 hover:bg-blue-400 transition ease-in duration-300 p-2 group">
        <Image className="rounded-xl group-hover:opacity-10 group-hover:scale-105 transition ease-in duration-300" src={project3} alt="/" />
        <div className="hidden group-hover:block absolute text-center">
          <p className="text-xl text-white">Decentralized Finance</p>
          <h2 className="text-2xl text-white pb-4">React JS</h2>
          <Link href='/defi'>
            <p className="bg-white border-2 border-white text-black px-6 py-2 rounded-lg hover:bg-transparent hover:text-white transition ease-in duration-300 cursor-pointer">More Info</p>
          </Link>
        </div>
      </div>
      {/* Project 4 */}
      <div className="relative w-full h-auto flex justify-center items-center shadow-xl rounded-xl shadow-blue-200 hover:bg-blue-400 transition ease-in duration-300 p-2 group">
        <Image className="rounded-xl group-hover:opacity-10 group-hover:scale-105 transition ease-in duration-300" src={project4} alt="/" />
        <div className="hidden group-hover:block absolute text-center">
          <p className="text-xl text-white">Netflix UI</p>
          <h2 className="text-2xl text-white pb-4">React JS</h2>
          <Link href='/netflix'>
            <p className="bg-white border-2 border-white text-black px-6 py-2 rounded-lg hover:bg-transparent hover:text-white transition ease-in duration-300 cursor-pointer">More Info</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
