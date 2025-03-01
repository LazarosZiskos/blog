import React from "react";
import { Button } from "./ui/button";

const TagButton = ({ img, title }) => {
  return (
    <>
      <Button variant="outline" className="flex">
        <img src={img} alt="laptop" className="w-[25px]" />
        {title}
      </Button>
    </>
  );
};

export default TagButton;
