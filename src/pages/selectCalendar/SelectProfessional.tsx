import React, { useEffect, useState } from "react";
import { SelectedCenter } from "../../components/center/SelectedCenter";
import { ServicesSelection } from "../../components/selectServices/ServicesSelection";
import { employees, Services } from "../../data/fakeData";

export const SelectProfessional: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Services | null>(null);

  useEffect(() => {
    // Cargar el servicio seleccionado desde sessionStorage al montar el componente
    const savedService = sessionStorage.getItem("selectedService");
    if (savedService) {
      setSelectedService(JSON.parse(savedService));
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full p-4">
      <SelectedCenter />

      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-10 mt-10 md:gap-40">
        <div className="w-[500px] grid grid-cols-2 gap-10">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex flex-col items-center justify-center shadow-md rounded-lg w-[170px] h-[150px]"
            >
              <img
                className="w-[60px] h-[60px] rounded-full "
                src={employee.picture}
                alt="#professionalImage"
              />
              <span className="font-bold">{employee.name}</span>
              <span className="text-sm text-gray">{employee.profession}</span>
            </div>
          ))}
        </div>
        <div className=" rounded-xl h-[250px] md:h-[300px] w-[100%] md:w-[350px]  flex flex-col items-start justify-start shadow-xl px-10">
          <ServicesSelection service={selectedService} />
        </div>
      </div>
    </section>
  );
};
