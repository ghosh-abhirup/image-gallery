import React from "react";

const Tag = ({ data }) => {
  return (
    <div className="px-2 sm:px-3 py-1.5 sm:py-2 flex justify-center items-center rounded-[4px] bg-[#ECECEC]">
      <p className="text-[8px] sm:text-[10px] text-[#4F4F4F] font-medium">
        {data}
      </p>
    </div>
  );
};

export default Tag;
