// src/types.ts
import { Post, User, Tag } from "@prisma/client";

export type PostWithAuthor = Post & {
  author: User;
  tags: Tag[];
};
