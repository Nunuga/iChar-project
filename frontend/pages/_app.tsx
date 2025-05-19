import MainLayout from "@/components/layout/MainLayout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: React.ComponentType<React.PropsWithChildren<P>>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const GetLayout = Component.getLayout || MainLayout;

  return (
    <GetLayout>
      <Component {...pageProps} />
    </GetLayout>
  );
}
