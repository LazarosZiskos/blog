"use client";

var ReactRotatingText = require("react-rotating-text");

const Hero = () => {
  return (
    <section className="pt-[64px]">
      <div className="flex flex-col text-center border-b pb-[64px]">
        <h1 className="md:text-5xl text-3xl w-full max-w-[900px] mx-auto font-bold leading-[40px] md:leading-[62px] text-[#29294b] dark:text-[#a1a1d6]">
          Welcome to My World - Where I Share My{" "}
          <span className="text-primary">
            <ReactRotatingText items={["Thoughts", "Ideas", "Stories"]} />{" "}
          </span>
          One Post at a Time.
        </h1>
        <h2 className="text-[#696981] dark:text-gray-400 mt-2.5 tracking-wider leading-[28px] text-[18px]">
          Just a 33-year-old dad sharing thoughts, stories, and life as it
          happens.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
