import React from "react";
import { Services } from "../../data/fakeData";
import { Link } from "react-router-dom";

interface ServicesSelectionProps {
  service: Services | null;
}

export const ServicesSelection: React.FC<ServicesSelectionProps> = ({
  service,
}) => {
  if (!service) {
    console.log("No hay servicios disponibles para mostrar");
  }

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full rounded ">
        <span className="font-bold text-2xl">{service?.name}</span>
        <div className="flex flex-col mt-6 ">
          <span className="text-xl text-gray">{service?.price}$</span>
          <span className="text-xl mt-4 text-gray">{service?.name}</span>
          <span className="text-md text-gray">{service?.time}</span>
        </div>

        <Link
          to="/professionals"
          className="relative top-[25%] md:top-[50%] left-[30%] bg-blue text-white font-bold px-2 py-1  rounded"
        >
          Continuar
        </Link>
      </div>
    </>
  );
};
