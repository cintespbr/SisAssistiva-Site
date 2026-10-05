import type { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "80px" }}>{children}</main>
    </>
  );
};

export default MainLayout;
