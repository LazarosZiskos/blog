import React from "react";
import Post from "./Post";

const BlogPosts = () => {
  return (
    <section className="container mt-[64px] pb-[64px]">
      <Post
        image="/demo-image.webp"
        title="How AI Shapes the Future of Work in 2025"
        subtitle="In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals"
        tag1="business"
        tag2="news"
      />
      <Post
        image="/demo1.jpg"
        title="How Facebook Shapes the Future of Social Media in 2025"
        subtitle="In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals"
        tag1="business"
        tag2="news"
      />
    </section>
  );
};

export default BlogPosts;
