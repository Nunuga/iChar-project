import { AboutUsBlock } from "@/components/main/blocks/AboutUs";

import { ContactBlock } from "@/components/main/blocks/Contact";
import { ExpertiseBlock } from "@/components/main/blocks/Expertise";
import { HeroBlock } from "@/components/main/blocks/Hero";
import { ServicesBlock } from "@/components/main/blocks/Services";
import { TestimonialsBlock } from "@/components/main/blocks/Testimonials";
import Head from "next/head";

const MainPage = (Component: { getLayout: any }) => {
  return (
    <>
      <Head>
        <title>I8U8</title>
        <meta name={"robots"} content={"noindex, nofollow"} />
      </Head>

      <div className="font-sans text-gray-200 bg-gray-900">
        <HeroBlock />

        <AboutUsBlock />

        <ServicesBlock />

        <ExpertiseBlock />

        <TestimonialsBlock />

        <ContactBlock />
      </div>
    </>
  );
};

export default MainPage;
