import React from "react";

const SizeComponent = ({
  size,
  isActive = false,
}: {
  size: string;
  isActive?: boolean;
}) => {
  console.log("asdasdas", size);

  return (
    <p
      className={`rounded-3xl font-light ${
        isActive ? "bg-black text-white" : "bg-gray-400 text-black"
      } `}
    >
      {size}
    </p>
  );
};

export default SizeComponent;
