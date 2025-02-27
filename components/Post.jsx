import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Post = ({ image, title, subtitle, tag1, tag2 }) => {
  return (
    <div>
      <div className="lg:w-[900px] w-full mx-auto border-b pt-[32px] pb-[32px]">
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4">
          <Link href="/post">
            <div className="relative hover:scale-105 transition-all ease-in-out">
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
          </Link>
          <div className="">
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="text-xs font-bold text-[#696981] tracking-wide">
                Published on{" "}
                <span className="text-primary">February 25, 2025</span>
              </div>
              <Link
                href="/post"
                className="hover:text-gray-400 transition-all ease-in-out duration-200"
              >
                <h2 className="font-bold text-2xl leading-[29px] tracking-normal hover:text-gray-400">
                  {title}
                </h2>
              </Link>
              <div>
                <p className="text-[#696981] tracking-wider leading-[25px]">
                  {subtitle}
                </p>
              </div>
              <div className="">
                <Button className="p-4 items-center border-none font-bold text-md bg-primary/85 hover:bg-primary hover:shadow-lg">
                  <Link href="/post">Read Article</Link>
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
