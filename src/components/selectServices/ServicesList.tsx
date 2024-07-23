import React from "react";

interface Props {
  id: string;
  name: string;
  price: number;
  time: string;
}

export const ServicesList: React.FC<Props> = ({ id, name, price, time }) => {
  return (
    <div className="flex flex-row items-center justify-between w-[450px] shadow-lg rounded-xl py-2 px-4">
      <div className="flex flex-col items-start" key={id}>
        <span className="font-bold">{name}</span>
        <span className="text-gray">{price}</span>
        <span className="text-gray">{time}</span>
      </div>
      <div className="p-4 flex items-center justify-center">
        <button className="bg-blue py-1 px-2 rounded-lg text-white font-bold text-xl">
          +
        </button>
      </div>
    </div>
  );
};
