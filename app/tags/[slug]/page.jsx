import { client } from "@/sanity/lib/client";
import React from "react";
import Post from "@/components/Post";
import { urlFor } from "@/sanity/lib/image";

const getTagPosts = async (slug) => {
  const query = `*[_type == "post" && count((tags[]->slug.current)[@ == "${slug}"]) > 0] {
    title,
    body,
    mainImage,
    subheader,
    publishedAt,
    slug,
    tags[]->{name, slug}
  }`;
  const data = await client.fetch(query);
  return data;
};

const page = async ({ params }) => {
  const posts = await getTagPosts(params.slug);
  console.log(params.slug);
  return (
    <section className="pt-[200px] pb-[64px]">
      {posts.map((post) => (
        <Post
          key={post.title}
          link={`/posts/${post.slug.current}`}
          title={post.title}
          subtitle={post.subheader}
          tag1={params.slug}
          image={urlFor(post.mainImage).url()}
        />
      ))}
    </section>
  );
};

export default page;
