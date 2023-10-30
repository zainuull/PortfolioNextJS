// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Next from '../../../public/assets/skills/next.png';
import React from '../../../public/assets/skills/react.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import Firebase from '../../../public/assets/skills/firebase.png';

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
      name: 'Next',
      img: Next.src,
    },
    {
      name: 'React',
      img: React.src,
    },
    {
      name: 'Tailwind',
      img: Tailwind.src,
    },
    {
      name: 'Firebase',
      img: Firebase.src,
    },
  ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
