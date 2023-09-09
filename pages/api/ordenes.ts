// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../firebase/client';
import { Orden } from '../../interfaces/orden';

interface Response {
  data: Orden[] | null;
  error: string | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ data: null, error: 'Not user' });
  }

  const db = firebase.firestore();
  db.collection('orders')
    .where('user', '==', user.uid)
    .get()
    .then((qs) => {
      const orders: any = [];
      qs.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      res.status(200).json({ data: orders, error: null });
    })
    .catch((error) =>
      res.status(500).json({ data: null, error: 'Error getting orders' })
    );
}
