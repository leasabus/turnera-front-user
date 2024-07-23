import { Link } from "react-router-dom";
import { useBranch } from "../../context/centerContext";
import { services } from "../../data/fakeData";
import { ServicesList } from "../../components/selectServices/ServicesList";
import { ServicesSelection } from "../../components/selectServices/ServicesSelection";

export const SelectServices = () => {
  const { selectedBranch } = useBranch();

  return (
    <section className="flex flex-col items-center justify-center w-full p-4">
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
      <div className="w-full grid grid-cols-2  gap-40">
        <div className="w-full flex flex-col gap-4 items-start justify-center  mt-6">
          {services.map((service) => (
            <ServicesList
              name={service.name}
              price={service.price}
              time={service.time}
              id={service.id}
            />
          ))}
        </div>
        <div className=" rounded-xl h-[300px] w-[350px]  mt-10 flex flex-col items-start justify-start shadow-xl px-10">
          <ServicesSelection />
        </div>
      </div>
    </section>
  );
};
