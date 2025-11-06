import React from "react";
import { FaUser, FaClock, FaChartLine, FaDatabase, FaEnvelope } from "react-icons/fa";

export default function IconColumn() {
  const icons = [FaUser, FaClock, FaChartLine, FaDatabase, FaEnvelope];
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {icons.map((Icon, i) => (
        <Icon key={i} className="text-gray-700 text-xl" />
      ))}
    </div>
  );
}