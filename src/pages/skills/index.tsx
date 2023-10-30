import SkillsItem from '@/component/SkillsItem';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [datas, setDatas] = useState();
  
  useEffect(() => {
    axios.get('/api/skills').then((res) => setDatas(res.data.data));
  }, []);

  return (
    <div id="skills" className="w-full p-2 mt-32 lg:mt-0">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="uppercase text-blue-400 tracking-widest py-2">Skills</p>
        <h2 className="md:text-2xl lg:text-3xl">What I Can Do</h2>
        <SkillsItem datas={datas}/>
      </div>
    </div>
  );
};

export default Skills;
