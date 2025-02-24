import React from "react";
import { Button } from "./ui/button";

const TrendingTags = () => {
  return (
    <main className="mt-[64px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="uppercase text-xs text-[#696981] font-bold pb-6 tracking-widest">
          explore trending tags
        </h3>
        <div className="w-full flex gap-5 flex-wrap max-w-[900px] justify-center">
          <Button variant="outline" className="flex">
            <img src="/laptop.png" alt="laptop" className="w-[25px]" />
            Technology
          </Button>
          <Button variant="outline" className="flex">
            <img src="/luggage.png" alt="laptop" className="w-[25px]" />
            Travel
          </Button>
          <Button variant="outline" className="flex">
            <img src="/investment.png" alt="laptop" className="w-[25px]" />
            Business
          </Button>
          <Button variant="outline" className="flex">
            <img src="/world-news.png" alt="laptop" className="w-[25px]" />
            News
          </Button>
          <Button variant="outline" className="flex">
            <img src="/happy.png" alt="laptop" className="w-[25px]" />
            Family
          </Button>
          <Button variant="outline" className="flex">
            <img src="/planet-earth.png" alt="laptop" className="w-[25px]" />
            General
          </Button>
          <Button variant="outline" className="flex">
            <img src="/standup-comedy.png" alt="laptop" className="w-[25px]" />
            Comedy
          </Button>
        </div>
      </div>
    </main>
  );
};

export default TrendingTags;
