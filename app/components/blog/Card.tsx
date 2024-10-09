// components/blog/Card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostWithAuthor } from "@/types";

interface BlogCardProps {
  post: PostWithAuthor;
}

const Card: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-10">
      <Link
        href={`/blog/${post.slug}`}
        className="block hover:shadow-lg transition-shadow duration-300"
      >
        {post.featuredImage && (
          <div className="aspect-[16/9]">
            <Image
              src={post.featuredImage}
              alt={`Featured image for ${post.title}`}
              layout="responsive"
              width={16}
              height={9}
              className="object-cover"
            />
          </div>
        )}
        <div className="px-4">
          <h3 className="text-lg font-semibold text-black">{post.title}</h3>
          <div className="my-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-block bg-yellow-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1 mr-2 mt-2"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {post.description
              ? post.description.slice(0, 160)
              : "No description available."}
            ...
          </p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-medium text-black">
              By <b>{post.author.name}</b>
            </p>
            <p className="text-sm font-medium text-black">
              {new Date(post.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
