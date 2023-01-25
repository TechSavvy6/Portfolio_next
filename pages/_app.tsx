import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Logo from "@/components/fullLogo";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function App({ Component, pageProps }: AppProps) {
  const [snow, setSnow] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setSnow(true);
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  if (!snow) return null;
  
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      {!show ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Logo animate />
        </div>
      ) : (
        <>
          <div className="min-h-screen overflow-x-hidden">
            <div className=" max-w-[90rem] mx-auto px-5 xl:px-20">
              <Navigation />
              <Component {...pageProps} />
            </div>
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
