import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import AssistanceSection from "../components/AssistanceSection";

export default function Assistance() {
  return (
    <>
      <div className="flex flex-col h-full  xl:flex-row">
        <div className="xl:w-[17%] w-full">
          <Navbar />
        </div>
        <div className="bg-gray-200 xl:w-[83%] w-full py-4 xl:px-16 px-8 flex flex-col  ">
          <strong className="px-2 py-6 font-mono text-2xl text-gray-800">
            Assistance
          </strong>
          <AssistanceSection/>
          <Footer />
        </div>
      </div>
    </>
  );
}
