// app/blog/page.tsx
import prisma from "@/lib/prisma";
import { PostWithAuthor } from "@/types";
import Card from "../components/blog/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SwapKam",
  description:
    "Explore the latest articles, updates, and insights on stock market trends, digital marketing strategies, and more on the SwapKam Blog.",
};

export default async function BlogPage() {
  const fetchPosts = async (): Promise<PostWithAuthor[]> => {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        tags: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return posts;
  };
  const posts = await fetchPosts();

  return (
    <div className="w-full max-w-screen-sm mx-auto pt-20">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
