import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
