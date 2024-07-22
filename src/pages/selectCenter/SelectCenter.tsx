import { PaydmentSecurity } from "../../components/paydmentSecurity/PaydmentSecurity";
import logo from "../../../public/assets/logo/logo.png";
import { CenterDescription } from "../../components/selectCenter/CenterDescription";
export const SelectCenter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <img className="w-20" src={logo} alt="" />
        <span className="text-xl">¿En que sucursal te gustaría atenderte?</span>
      </div>

      <div className="flex flex-col items-start justify-start w-full">
        <CenterDescription />
      </div>
      <PaydmentSecurity />
    </div>
  );
};
