// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Digipol from '../../../public/assets/projects/digipol.png';
import AlatBerat from '../../../public/assets/projects/AlatBerat.png';
import Defi from '../../../public/assets/projects/defi.png';
import Netflix from '../../../public/assets/projects/netflix.jpg';
import Photography from '../../../public/assets/projects/photography.png';

type Data = {
  status: boolean;
  statusCode: number;
  data: {
    name?: string;
    fullName?: string;
    img?: string;
    description?: string;
    link?: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = [
    {
      name: 'Digipol',
      fullName: 'Digital Politics',
      img: Digipol.src,
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      link: 'https://demo-dcc.thinkspedia.id/pages/authentication/login',
    },
    {
      name: 'Alat Berat',
      fullName: '',
      img: AlatBerat.src,
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      link: 'https://www.ulunsyahroni.com',
    },
    {
      name: 'Defi',
      fullName: 'Decentralized Finance',
      img: Defi.src,
      description:
        'DeFi stands for Decentralized Finance, which is also known as Distributed Finance or Open Finance and is predicted to be the next disruptor in the financial industry. DeFi refers to alternative financial infrastructure built on Blockchain and Ethereum. And I created this defi website using React and tailwind css, which is certainly very responsive, suitable for those of you who want to open a business in the defi field',
      link: '',
    },
    {
      name: 'Photography',
      fullName: '',
      img: Photography.src,
      description: `i built this web with react tailwind and framer motion, and it's responsive, you can open it via desktop or mobile, and still have an attractive appearance This website is perfect for you, a photographer who wants to document your photos on a website. And for those of you who are not photographers, you can also have a portfolio website according to your passion`,
      link: '',
    },
    {
      name: 'Netflix',
      fullName: 'Netflix Clone',
      img: Netflix.src,
      description:
        'I built this application in React JS and is hosted on GitHub pages. This app features user authentication with firebase as well as the firestore cloud storage database. This application is pulling movie data from an the IMDB movie API and displaying different categories. It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app-wide state management.',
      link: '',
    },
  ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
