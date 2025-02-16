import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto w-[400px] md:w-[1000px]">
      <AppRoutes />
    </div>
  );
};

export default App;
