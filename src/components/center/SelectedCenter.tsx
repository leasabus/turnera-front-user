import React from "react";
import { useBranch } from "../../context/centerContext";
import { Link } from "react-router-dom";

export const SelectedCenter = () => {
  const { selectedBranch } = useBranch();

  return (
    <div className="mt-2 w-[200px] h-[200px] shadow-lg rounded-xl cursor-pointer transform transition-transform hover:-translate-y-2">
      <Link to="/">
        <div className="w-full h-[60%]">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={selectedBranch?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start p-2">
          <span className="font-bold text-sm">{selectedBranch?.title}</span>
          <span className="text-sm text-gray">{selectedBranch?.street}</span>
        </div>
      </Link>
    </div>
  );
};
