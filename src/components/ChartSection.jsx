import React, { useState } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, ReferenceArea, ReferenceLine } from "recharts";
import { motion } from "framer-motion";
import { AiOutlineLine } from "react-icons/ai";

const data = [
  { name: "9:00 AM", hour: 9, value: 60, label: "CDS - Niv 1" },
  { name: "10:00 AM", hour: 10, value: 60, label: "CDS - Niv 2" },
  { name: "1:00 PM", hour: 13, value: 60, label: "SAU - HL 2" },
  { name: "2:00 PM", hour: 14, value: 60, label: "SAU - Data" },
  { name: "4:10 PM", hour: 16.17, value: 60, label: "CDS - Niv 3" },
  { name: "5:00 PM", hour: 17, value: 60, label: "CDS - Niv 1" },
];

export default function ChartSection({ chartIndex }) {
  const [resolver, setResolver] = useState("Mark Miller");
  const resolvers = ["Mark Miller", "Flora Moreau", "Jean Dupont", "Sophie Lambert"];
  const hideResolver = chartIndex === 2;

  return (
    <motion.div
      className="p-8 rounded-3xl bg-white shadow-xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs text-gray-700">
          Numéro d'incident : {chartIndex === 1 ? "INC0123478" : "INC0987654"}
        </p>
      </div>
      <div className="w-full h-[240px] bg-gradient-to-b from-[#e3f6f5] to-[#ffffff] rounded-xl px-10 py-12 flex items-end justify-center relative overflow-hidden">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 40, right: 60, left: 60, bottom: 80 }}>
            <ReferenceArea x1={10} x2={13} fill="#e3f6f5" />
            <ReferenceLine x={11.5} stroke="#272343" strokeDasharray="3 3" strokeWidth={1.5} />
            <ReferenceLine x={15.5} stroke="#272343" strokeDasharray="3 3" strokeWidth={1.5} />
            <XAxis dataKey="hour" type="number" domain={[9, 17]} ticks={[9, 10, 13, 14, 16.17, 17]} />
            <Line type="linear" dataKey="value" stroke="#272343" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-[32%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-4">
          <AiOutlineLine className="text-gray-700 text-3xl opacity-80 rotate-90" />
          <span className="text-xs text-gray-800">Incident Majeur</span>
        </div>
      </div>
      {!hideResolver && (
        <div className="mt-8 text-xs text-gray-700 flex items-center gap-2 justify-end">
          <span>Résolu par</span>
          <select
            value={resolver}
            onChange={(e) => setResolver(e.target.value)}
            className="text-xs border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-[#bae8e8] bg-white"
          >
            {resolvers.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      )}
    </motion.div>
  );
}