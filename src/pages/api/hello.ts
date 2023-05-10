// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Student = {
  name: string
  age: number,
  grade: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Student[]>
) {
  res.status(200).json([{
      name: "Teuddy",
      age: 20,
      grade: "a"
  },
      {
        name: "Sebas",
        age: 20,
        grade: "a"
    },
    {
      name: "Lucho",
      age: 20,
      grade: "a"
    }])
}
