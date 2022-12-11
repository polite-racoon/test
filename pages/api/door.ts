// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string | false;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  const uid = body?.user?.uid;
  if (uid === process.env.UID) {
    res.status(200).json({ url: "/admin-dashboard" });
  } else {
    res.status(200).json({ url: false });
  }
  // res.status(200).json({ message: 'hola' });
}
