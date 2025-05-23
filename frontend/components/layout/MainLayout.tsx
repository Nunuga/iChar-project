import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 py-24 pb-12 px-4">
        <div>{children}</div>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default MainLayout;
