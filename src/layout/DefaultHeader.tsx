import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
export const DefaultHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
