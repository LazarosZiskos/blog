import React from "react";

const page = () => {
  return (
    <section className="border-b mb-[64px] pb-10 mt-[64px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold leading-[62px]">
          Hey, <span className="text-primary">Worderful</span> to Meet You
        </h1>
        <div className="flex gap-3 container pt-10 w-full">
          <img
            src="/coffee5.jpg"
            alt="cofee"
            className="w-2/4 h-[500px] rounded-xl"
          />
          <img
            src="/travel.jpg"
            alt="travel"
            className="w-1/4 h-[500px] rounded-xl"
          />
          <img
            src="/family.jpg"
            alt="family"
            className="w-1/4 h-[500px] rounded-xl"
          />
        </div>
        <div className="container w-[900px] mx-auto pt-5 leading-[30px] text-lg">
          <p>
            Hi! I’m Lazaros, a 33-year-old husband, father, and aspiring
            developer from Greece. <br />
            Some of the things that bring me the most joy are coffee, traveling,
            and spending time with my family (as you might guess from the photos
            above!).
            <br />I created this blog as my little corner of the internet—a
            space where I can share my thoughts, ideas, and snippets of everyday
            life. From tech news to personal experiences and random musings,
            this is where I put it all. Writing helps me reflect, connect with
            like-minded people, and document my journey, both as a developer and
            in life.
            <br />
            I’m always exploring new things, whether it’s coding, discovering
            hidden travel spots, or just enjoying a quiet moment with a great
            cup of coffee. Life is a constant learning experience, and this blog
            is my way of capturing and sharing it.
            <br />
            So, grab a cup of coffee, explore, and feel free to connect—I’d love
            to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
