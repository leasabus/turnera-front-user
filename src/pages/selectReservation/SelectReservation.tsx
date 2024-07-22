import logo from "../../../public/assets/logo/logo.png";
import { PaydmentSecurity } from "../../components/paydmentSecurity/PaydmentSecurity";

export const SelectReservation = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <img className="w-20" src={logo} alt="" />
        <span className="text-xl">Reserva tu cita</span>
      </div>

      <div className="flex flex-col items-start justify-center  gap-10 mb-4 h-[250px]">
        <span className="w-[250px] h-[40px] flex items-center p-4 rounded  bg-slate-200 cursor-pointer transform transition-transform hover:-translate-y-1">
          Reservar una cita
        </span>
        <span className="w-[250px] h-[40px] flex items-center p-4 rounded  bg-slate-200 cursor-pointer transform transition-transform hover:-translate-y-1">
          Reservar cita de grupo
        </span>
      </div>
      <PaydmentSecurity />
    </div>
  );
};
