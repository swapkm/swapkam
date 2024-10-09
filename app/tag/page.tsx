// app/tag/page.tsx
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tags - SwapKam",
  description:
    "Explore various tags to find articles on stock market strategies, and other topics on the SwapKam Blog.",
};

export default async function TagsPage() {
  const tags = await prisma.tag.findMany({
    include: {
      posts: true,
    },
  });

  return (
    <div className="w-full max-w-screen-sm mx-auto pt-20 px-4">
      <h1 className="text-3xl font-bold mx-4">All Tags:</h1>
      <div className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tags.map((tag) => (
          <div key={tag.id}>
            <Link href={`/tag/${tag.name}`}>
              <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-200">
                <span className="text-lg font-semibold text-blue-600 hover:underline">
                  {tag.name}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  ({tag.posts.length} posts)
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
