import React from "react";

function ColorComponent({ color }: { color: string }) {
  console.log(color);

  return <div className={`hover:cursor-pointer w-10 h-10 border rounded-full bg-[${color}]`}></div>;
}

export default ColorComponent;
