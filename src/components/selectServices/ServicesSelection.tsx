export const ServicesSelection = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full rounded ">
        <span className="font-bold text-2xl">Total</span>
        <div className="flex flex-col mt-6 ">
          <span className="text-xl text-gray">7000$</span>
          <span className="text-xl mt-4 text-gray">Corte de pelo</span>
          <span className="text-md text-gray">30 min</span>
        </div>

        <button className="relative top-[50%] left-[30%] bg-blue text-white font-bold px-2 py-1  rounded">
          Continuar
        </button>
      </div>
    </>
  );
};
