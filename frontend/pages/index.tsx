import { itemAnimationImg, MotionBox } from "@/styles/animation";
import { AbsoluteCenter, Box, Divider, Image } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const MainPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/main");
  }, 3000);

  return (
    <>
      <Head>
        <title>I8U8</title>
        <meta name={"robots"} content={"noindex, nofollow"} />
      </Head>

      <MotionBox
        //@ts-ignore
        h={"100%"}
        mt={{ base: "400px", md: "400px", lg: "700px" }}
        alignSelf="center"
        initial="hidden"
        variants={itemAnimationImg}
        animate="visible"
      >
        <Divider
          border={{ base: "1px", md: "1px", lg: "2px" }}
          borderColor={{ base: "#2b1263", md: "#2b1263", lg: "#2b1263" }}
        />
        <AbsoluteCenter bg="white" px="1">
          <Box>
            <Image
              pb="100%"
              w={{ base: "100px", md: "40px", lg: "200px" }}
              src="/v.png"
              alt="logo"
            />
          </Box>
        </AbsoluteCenter>
      </MotionBox>
    </>
  );
};

MainPage.getLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <main>
        <Box>{children}</Box>
      </main>
    </Box>
  );
};

export default MainPage;
