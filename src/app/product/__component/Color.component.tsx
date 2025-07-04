import React from "react";

function ColorComponent({ color }: { color: string }) {
  console.log(color);

  return <div className={`w-8 h-8 rounded-full bg-color-['${color}']`}></div>;
}

export default ColorComponent;
