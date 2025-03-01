import React from "react";

const page = () => {
  return (
    <section className="border-b mb-[64px] pb-10 mt-[30px] pt-[120px] md:mt-[64px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-2xl font-bold leading-[40px] md:leading-[62px]">
          Hey, <span className="text-primary">Worderful</span> to Meet You
        </h1>
        <div className="flex flex-col md:flex-row gap-3 container pt-10 w-full">
          <img
            src="/coffee5.jpg"
            alt="cofee"
            className="md:w-2/4 md:h-[500px] h-[250px] rounded-xl"
          />
          <img
            src="/travel.jpg"
            alt="travel"
            className="md:w-1/4 md:h-[500px] h-[350px] rounded-xl"
          />
          <img
            src="/family.jpg"
            alt="family"
            className="md:w-1/4 md:h-[500px] h-[350px] rounded-xl"
          />
        </div>
        <div className="container md:w-[1000px] mx-auto pt-7 leading-[30px] text-[20px]">
          <p>
            Hi! I’m Lazaros, a 33-year-old husband, father, and aspiring
            developer based in Greece. <br />
            I am passionate about technology, coding, and all things creative. I
            love building things, solving problems, and learning new skills.
            Proof of that is that i swapping my career from a hotel owner to a
            developer!
            <br /> Some of the things that bring me the most joy are{" "}
            <span className="font-bold">coffee, </span>
            <span className="font-bold">travelling, </span> and spending time
            with my <span className="font-bold">family </span> (as you might
            guess from the photos above!).
            <br />I created this blog as my little corner of the internet—a
            space where I can share my{" "}
            <span className="font-bold">thoughts,</span>{" "}
            <span className="font-bold">ideas,</span> and{" "}
            <span className="font-bold">snippets </span> of everyday life. From
            tech news to personal experiences and random musings, this is where
            I put it all. Writing helps me reflect, connect with like-minded
            people, and document my journey, both as a developer and in life.
            <br />
            Apart from coding, I like spending my time gaming, reading, watching
            movies, and playing the drums. I’m also a huge fan of outdoor
            activities and love exploring new places.
            <br />
            I’m always exploring new things, whether it’s coding, discovering
            hidden travel spots, or just enjoying a quiet moment with a great
            cup of coffee. Life is a constant learning experience, and this blog
            is my way of capturing and sharing it.
            <br />
            <span className="font-bold text-lg">
              So, grab a cup of coffee, explore, and feel free to connect—I’d
              love to hear from you!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
