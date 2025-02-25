import React from "react";

const BlogPosts = () => {
  return (
    <section className="container mt-[64px] pb-[64px] ">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="/demo-image.webp"
              alt="demo"
              className="rounded-2xl w-full"
            />
            <div className="flex gap-2 absolute top-5 left-5 right-5">
              <button className="uppercase px-2 py-1 bg-white rounded-[4px] border-none text-xs tracking-wider text-center font-bold">
                business
              </button>
              <button className="uppercase px-2 py-1 bg-white rounded-[4px] border-none text-xs tracking-wider text-center font-bold">
                news
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <div className="">Published on February 25, 2024</div>
              <h2>How AI Shapes the Future of Work in 2025</h2>
              <div>
                In today’s ever-evolving world, storytelling has become a
                powerful tool for connection. Revision provides a unique
                platform for individuals
              </div>
              <div>
                <button>Read Full Article</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
