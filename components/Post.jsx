import React from "react";
import { Button } from "./ui/button";

const Post = ({ image, title, subtitle, tag1, tag2 }) => {
  return (
    <div>
      <div className="lg:w-[900px] w-full mx-auto container border-b pt-[32px] pb-[32px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src={image}
              alt="demo"
              className="rounded-2xl h-full w-full max-h-[250px] object-cover"
            />
            <div className="flex gap-2 absolute top-5 left-5 right-5">
              <button className="uppercase px-2 py-1 bg-white rounded-[4px] border-none text-xs tracking-wider text-center font-bold">
                {tag1}
              </button>
              <button className="uppercase px-2 py-1 bg-white rounded-[4px] border-none text-xs tracking-wider text-center font-bold">
                {tag2}
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <div className="text-xs font-bold text-[#696981] tracking-wide">
                Published on{" "}
                <span className="text-primary">February 25, 2025</span>
              </div>
              <h2 className="font-bold text-2xl leading-[29px] tracking-normal ">
                {title}
              </h2>
              <div>
                <p className="text-[#696981] tracking-wider leading-[25px]">
                  {subtitle}
                </p>
              </div>
              <div>
                <Button className="p-4 items-center border-none font-bold text-md bg-primary/85 hover:bg-primary hover:shadow-lg">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
