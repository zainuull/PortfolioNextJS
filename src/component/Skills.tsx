import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-32 lg:mt-0">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="uppercase text-blue-400 tracking-widest py-2">Skills</p>
        <h2 className="md:text-2xl lg:text-3xl">
          What I Can Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">

          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/html.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/css.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/javascript.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Javascript</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/react.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/tailwind.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwind</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/firebase.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Firebase</h3>
              </div>
          </div>
          </div>
          <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <Image src='/../public/assets/skills/github1.png' alt="" width='50' height='50'/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;