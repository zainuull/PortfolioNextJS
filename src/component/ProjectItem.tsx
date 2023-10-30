import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ datas }: any) => {
  return (
    <>
      {datas?.map((project: any) => (
        <div key={project?.name} className="flex flex-col gap-y-2">
          <div className="group relative cursor-pointer rounded-lg ">
            <Image
              src={project?.img}
              alt={project?.name}
              height={400}
              width={400}
              className="rounded-lg w-[450px] lg:w-[900px]"
            />
            <Link
              href={project?.link}
              target="_blank"
              className="absolute opacity-0 w-full h-full top-0 group-hover:bg-black/40 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center gap-y-2 text-white">
              <h1 className="text-4xl font-semibold">{project?.name}</h1>
              <p className="text-xl font-thin">{project?.fullName}</p>
              <Link
                href={project?.link}
                target="_blank"
                className="flex items-center gap-x-2 border border-primary bg-primary px-4 py-2 rounded-full mt-2 hover:shadow-md transition-all duration-300">
                View Project
              </Link>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
