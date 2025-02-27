const page = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-4 pt-8 ">
        <div className="text-sm leading-[18px] font-bold text-[#696981] tracking-wide">
          Published on <span className="text-primary">February 25, 2025</span>
        </div>
        <div className="">
          <h2 className="font-bold text-5xl leading-[58px] tracking-normal mt-3 w-[900px] mx-auto text-center">
            How AI Shapes the Future of Work in 2025
          </h2>

          <div>
            <p className="text-[#696981] tracking-wider text-center text-md leading-[28px] mt-4 w-[700px] mx-auto">
              In today’s ever-evolving world, storytelling has become a powerful
              tool for connection. Revision provides a unique platform for
              individuals to share their stories and connect with others.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6  mt-4">
            <button className="uppercase px-2 py-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] rounded-[4px] border-none text-xs tracking-wider text-center font-bold hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]">
              business
            </button>
            <button className="uppercase px-2 py-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)] rounded-[4px] border-none text-xs tracking-wider text-center font-bold">
              news
            </button>
          </div>
          <div className="mt-4">
            <img src="/demo-image.webp" className="rounded-2xl w-full" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="rounded-full w-20 h-20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] font-semibold  flex flex-col items-center justify-center">
            <span>3 min</span>
            <span>read</span>
          </div>
          <div className="pl-4">
            <ul className="flex gap-6 pt-2 items-center justify-center">
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img src="/twitter.png" alt="twitter" />
                </button>
              </li>
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img src="/like (1).png" alt="facebook" />
                </button>
              </li>
              <li className="w-[30px]">
                <button className="hover:scale-110">
                  <img src="/send.png" alt="shareIcon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[800px] pt-10 pb-[64px] border-b mb-10">
          <p className="leading-[28px] text-xl">
            Revision is more than a typical content hub. It’s a dynamic space
            for meaningful conversations and personal stories that resonate with
            people on an emotional level. Whether you are looking for
            inspiration, comfort, or just a different perspective on life,
            Revision offers a wide range of narratives to explore.
          </p>
          <p className="pt-10 leading-[28px] text-xl">
            So, what makes Revision stand out as the place for heartfelt
            reflections?
          </p>
          <p className="pt-10 leading-[28px] text-xl">
            Revision is more than a typical content hub. It’s a dynamic space
            for meaningful conversations and personal stories that resonate with
            people on an emotional level. Whether you are looking for
            inspiration, comfort, or just a different perspective on life,
            Revision offers a wide range of narratives to explore.
          </p>
          <p className="pt-10 leading-[28px] text-xl">
            So, what makes Revision stand out as the place for heartfelt
            reflections?
          </p>
          <h3 className="font-bold text-4xl leading-[50px] pt-10">
            Stories that Matter
          </h3>
          <p className="pt-10 leading-[28px] text-xl">
            So, what makes Revision stand out as the place for heartfelt
            reflections?
          </p>
          <p className="pt-10 leading-[28px] text-xl">
            Revision is more than a typical content hub. It’s a dynamic space
            for meaningful conversations and personal stories that resonate with
            people on an emotional level. Whether you are looking for
            inspiration, comfort, or just a different perspective on life,
            Revision offers a wide range of narratives to explore.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
