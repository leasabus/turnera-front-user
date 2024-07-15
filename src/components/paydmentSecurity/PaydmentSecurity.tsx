import { FaCheckSquare } from "react-icons/fa";

export const PaydmentSecurity = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray">Tu compra esta protegida</span>
      <div className="flex flex-row items-center gap-4">
        <span className="border border-b-1 border-slate-500 opacity-20 w-[100px]"></span>
        <FaCheckSquare className="text-slate-400" />
        <span className="border border-b-1 border-slate-500 opacity-20 w-[100px]"></span>
      </div>
      <span className="text-gray">Turnera</span>
    </div>
  );
};
