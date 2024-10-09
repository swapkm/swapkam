import Card from "@/app/components/blog/Card";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tags = await prisma.tag.findMany({
    select: { name: true },
  });

  return tags.map((tag) => ({
    tag: tag.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const { tag } = params;

  // Fetch the tag details
  const tagData = await prisma.tag.findUnique({
    where: { name: tag },
  });

  if (tagData) {
    return {
      title: `${tag} Posts - SwapKam`,
      description: `Explore blog posts related to ${tag} on SwapKam. Learn about stock market strategies, digital marketing insights, and more.`,
    };
  }

  return {
    title: "Tag Not Found | SwapKam",
    description:
      "This tag does not exist or may not have any posts. Explore other categories and tags on the SwapKam Blog.",
  };
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;

  const tagData = await prisma.tag.findUnique({
    where: { name: tag },
    include: {
      posts: {
        include: {
          author: true,
          tags: true,
        },
      },
    },
  });

  if (!tagData) {
    notFound();
  }

  return (
    <div className="w-full max-w-screen-sm mx-auto pt-20">
      {tagData.posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
