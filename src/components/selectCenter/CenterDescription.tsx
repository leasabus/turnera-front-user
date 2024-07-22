import { Link } from "react-router-dom";
import { centers } from "../../data/fakeData";

export const CenterDescription = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-4 mb-4 p-4 items-center justify-center w-full  ">
      {centers.map((center) => (
        <>
          <div className="w-[200px] h-[200px] shadow-lg rounded-xl cursor-pointer transform transition-transform hover:-translate-y-2">
            <Link to="/reservation">
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src={center.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start p-2">
                <span className="font-bold text-sm">{center.title}</span>
                <span className="text-sm text-gray">{center.street}</span>
                <span
                  className={`text-sm ${
                    center.isOpen ? "text-green" : "text-red"
                  } font-bold`}
                >
                  {center.isOpen ? <span>Abierto</span> : <span>Cerrado</span>}
                </span>
              </div>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};
