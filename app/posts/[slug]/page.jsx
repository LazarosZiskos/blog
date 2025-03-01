import CustomPortableText from "@/components/CustomPortableText";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const getPost = async (slug) => {
  const query = `*[_type == 'post' && slug.current == "${slug}"][0]{
  title,
  subheader,
    publishedAt,
    mainImage,
    body,
    tags->{name}
}`;
  const data = await client.fetch(query);
  return data;
};

const page = async ({ params }) => {
  const posts = await getPost(params.slug);

  return (
    <main className="container">
      <div className="md:flex md:flex-col justify-center items-center gap-4 pt-8 ">
        <div className="text-sm leading-[18px] text-center font-bold text-[#696981] dark:text-gray-400 tracking-wide">
          Published on{" "}
          <span className="text-primary">
            {new Date(posts.publishedAt).toDateString()}
          </span>
        </div>
        <div className="">
          <h2 className="font-bold text-3xl lg:text-5xl leading-[40px] md:leading-[58px] tracking-normal mt-3 md:w-[900px] md:mx-auto text-center">
            {posts.title}
          </h2>

          <div>
            <p className="text-[#696981] dark:text-gray-400 tracking-wider text-center text-md md:leading-[28px] mt-4 md:w-[700px] mx-auto">
              {posts.subheader}
            </p>
          </div>
          <div className="flex items-center justify-center gap-6  mt-4">
            <button className="dark:bg-white dark:text-black hover:scale-110 transition-all ease-in-out duration-300 uppercase px-2 py-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] rounded-[4px] border-none text-xs tracking-wider text-center font-bold hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]">
              {posts.tags.name}
            </button>
          </div>
          <div className="mt-4">
            <img
              src={urlFor(posts.mainImage).url()}
              className="rounded-2xl w-[450px] lg:w-full max-h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 pt-7">
          <div className="rounded-full w-20 h-20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] font-semibold  flex flex-col items-center justify-center">
            <span>3 min</span>
            <span>read</span>
          </div>
          <div className="pl-4">
            <ul className="flex gap-6 pt-2 items-center justify-center">
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img
                    src="/twitter.png"
                    alt="twitter"
                    className="dark:invert"
                  />
                </button>
              </li>
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img
                    src="/like (1).png"
                    alt="facebook"
                    className="dark:invert"
                  />
                </button>
              </li>
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img
                    src="/send.png"
                    alt="shareIcon"
                    className="dark:invert"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:w-[700px] leading-[25px] md:leading-[30px] pt-10 pb-[64px] border-b mb-10">
          <CustomPortableText value={posts.body} />
        </div>
      </div>
    </main>
  );
};

export default page;
