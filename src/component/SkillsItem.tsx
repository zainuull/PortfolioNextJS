import Image from "next/image";

const SkillsItem = ({ datas }: any) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
      {datas?.map((data: any) => (
        <div className="shadow-xl rounded-lg p-6 hover:scale-105 transition ease-in duration-300">
          <div className="grid grid-cols-2 justify-between items-center">
            <div>
              <Image src={data?.img} alt={data?.name} width={50} height={50} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>{data?.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsItem;
