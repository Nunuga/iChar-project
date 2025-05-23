import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 pb-12 px-4">
        <div>{children}</div>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default MainLayout;
