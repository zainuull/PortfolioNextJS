import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center px-4">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-x-16">
        <div className="col-span-2">
          <p className="uppercase py-2 tracking-widest text-blue-400 md:text-xl">About</p>
          <h2 className="md:text-2xl lg:text-3xl">Who I am</h2>
          <p className="text-gray-600 py-2 text-sm lg:text-base">
            {' '}
            I specialize in building mobile responsive front-end UI applications that connect with API’s and other backend technologies. I’m passionate about learning new technologies and understand there is more than one way to accomplish
            a task. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using
            one specific language, but choosing the best tool for the job.
          </p>
          <p className="text-gray-600 py-2 text-sm lg:text-base">
            I started web developement in 2013 managing multiple e-commerce websites on CMS platforms such as WordPress, BigCommerce, and Shopify. I have experience working directly with clients and taking mock wireframes all the way to
            deployed applications. In my spare time I run Code Commerce, a Youtube channel where I teach web developement and various front-end technologies.
          </p>
          <Link href="/#project">
            <button className="bg-blue-400 px-6 py-2 border-2 border-blue-400 text-white rounded-lg hover:bg-transparent hover:text-black transition ease-in duration-300 mt-4 mb-4">For more project</button>
          </Link>
        </div>
        <div className="w-full h-auto mx-auto flex justify-end items-center shadow-xl shadow-blue-100 rounded-xl overflow-hidden hover:scale-95 transition ease-in duration-300 group cursor-pointer">
          <Image className="rounded-xl group-hover:scale-110 transition ease-in duration-500" src="/../public/assets/man.png" alt="" width="500" height="50" />
        </div>
      </div>
    </div>
  );
};

export default About;
