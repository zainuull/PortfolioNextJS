import ProjectItem from './ProjectItem';

const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-blue-400 tracking-widest py-2">Projects</p>
        <h3 className="md:text-2xl lg:text-3xl">What I've Build</h3>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <ProjectItem /> 
        </div>
      </div>
    </div>
  );
};

export default Project;
