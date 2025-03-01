import React from "react";
import TagButton from "./TagButton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const getTags = async () => {
  const query = `*[_type == 'tags']{
  name,
    image,
    slug
}`;
  const data = await client.fetch(query);
  return data;
};

const TrendingTags = async () => {
  const tags = await getTags();

  return (
    <main className="mt-[64px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="uppercase text-xs text-[#696981] dark:text-gray-300 font-bold pb-6 tracking-widest">
          explore trending tags
        </h3>
        <div className="w-full flex gap-5 flex-wrap max-w-[900px] justify-center">
          {tags.map((tag) => (
            <Link href={`/tags/${tag.slug.current}`} key={tag.name}>
              <TagButton
                key={tag.name}
                title={tag.name}
                img={urlFor(tag.image).url()}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TrendingTags;
