"use client";

var ReactRotatingText = require("react-rotating-text");

const Hero = () => {
  return (
    <section className="pt-[64px]">
      <div className="flex flex-col text-center border-b pb-[64px]">
        <h1 className="text-5xl w-full max-w-[900px] mx-auto font-bold leading-[62px] text-[#29294b]">
          Welcome to My World - Where I Share My{" "}
          {/* <TextRotator content={content} time={2000} startDelay={500} /> */}
          <span className="text-primary">
            <ReactRotatingText items={["Thoughts", "Ideas", "Stories"]} />{" "}
          </span>
          One Post at a Time.
        </h1>
        <h2 className="text-[#696981] font-normal mt-2.5 tracking-wider leading-[28px]">
          Just a 33-year-old dad sharing thoughts, stories, and life as it
          happens.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
