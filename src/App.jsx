import React from "react";
import Introduction from "./components/Introduction";
import IconColumn from "./components/IconColumn";
import ChartSection from "./components/ChartSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-[Calibri] p-10">
      <Introduction />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-1 flex justify-center">
          <IconColumn />
        </div>
        <div className="lg:col-span-11 grid lg:grid-cols-2 gap-8">
          <ChartSection chartIndex={1} />
          <ChartSection chartIndex={2} />
        </div>
      </div>
    </div>
  );
}