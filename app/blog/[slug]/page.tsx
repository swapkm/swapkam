import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: true,
      tags: true,
    },
  });

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post?.description,
    openGraph: {
      title: post.title,
      description: post?.description,
      url: `https://swapkam.com/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage || "https://swapkam.com/image/default.jpg", // Fallback image if none exists
          width: 1280,
          height: 720,
          alt: `Featured image for ${post.title}`,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: true,
      tags: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-screen-lg mx-auto px-4 lg:px-0">
      {post.featuredImage && (
        <header
          className="w-full h-auto bg-cover min-h-96 bg-center rounded-lg mb-4 mx-auto"
          style={{ backgroundImage: `url(${post.featuredImage})` }}
        >
          {/* Optional overlay */}
          <div className="bg-black bg-opacity-60 h-full min-h-96 p-4 rounded-lg">
            <h1 className="text-white text-4xl mb-2">{post.title}</h1>
            <p className="text-white block mb-2">
              <strong>By {post.author.name}</strong>
            </p>
            <div className="flex flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="tag inline-block mr-2 mb-4 text-sm bg-white rounded-xl px-2 py-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <time className="block my-2">
              <p className="text-white">
                Last updated:{new Date(post.updatedAt).toLocaleDateString()}{" "}
              </p>
            </time>
          </div>
        </header>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="my-16"
      />
    </article>
  );
}
