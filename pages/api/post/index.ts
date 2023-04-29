// pages/api/post/index.ts

import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { 
        connect: { 
            email: 'leoluizoliveira123@gmail.com' } },      //precisa deixar o emial publico no github pra acessar, como é só pra teste deixei o meu email mesmo
    },
  });
  res.json(result);
}