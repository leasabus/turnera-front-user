import { Route, Routes } from "react-router-dom";
import { SelectCenter } from "../pages/selectCenter/SelectCenter";
import { SelectReservation } from "../pages/selectReservation/SelectReservation";
import { SelectServices } from "../pages/selectServices/SelectServices";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SelectCenter />}></Route>
        <Route path="/reservation" element={<SelectReservation />}></Route>
        <Route path="/services" element={<SelectServices />}></Route>
      </Routes>
    </>
  );
};
