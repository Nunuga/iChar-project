import { useLazyGetResumeListQuery } from "@/api/resumeApi";
import { ResumeButtonCreate } from "@/components/resume/components/edit/ResumeButtonCreate";
import { ResumeTable } from "@/components/resume/components/ResumeTable";

import Head from "next/head";
import { useEffect } from "react";

const ResumePage = () => {
  const [getResumeList, { data, isLoading, isError }] =
    useLazyGetResumeListQuery();

  useEffect(() => {
    getResumeList({});
  }, []);

  return (
    <>
      <Head>
        <title>I8U8</title>
        <meta name={"robots"} content={"noindex, nofollow"} />
      </Head>
      <div>
        <div className="w-full h-20 p-4 mb-4 flex justify-end bg-indigo-900 rounded-2xl shadow-xl">
          <ResumeButtonCreate />
        </div>
        <div>
          <ResumeTable data={data || []} />
        </div>
      </div>
    </>
  );
};

export default ResumePage;
