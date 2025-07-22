import React from "react";

const SizeComponent = ({
  size,
  isActive = false,
}: {
  size: string;
  isActive?: boolean;
}) => {
  return (
    <p
      className={`hover:cursor-pointer rounded-3xl px-6 py-2 text-xs font-light ${
        isActive ? "bg-black text-white" : "bg-gray-400 text-black"
      } `}
    >
      {size}
    </p>
  );
};

export default SizeComponent;
