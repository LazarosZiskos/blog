import React from "react";
import Post from "./Post";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const getPosts = async () => {
  const query = `*[_type == 'post']{
  title,
    subheader,
    slug,
    publishedAt,
    mainImage,
    body,
    tags[]->{name}
}`;
  const data = await client.fetch(query);
  return data;
};

const BlogPosts = async () => {
  const posts = await getPosts();
  return (
    <section className="mt-[64px] pb-[64px]">
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            link={`/posts/${post.slug.current}`}
            key={post.slug.current}
            image={urlFor(post.mainImage).url()}
            title={post.title}
            subtitle={post.subheader}
            tag1={post.tags[0].name}
          />
        ))}
    </section>
  );
};

export default BlogPosts;
