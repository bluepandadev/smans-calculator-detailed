import React, { useState } from "react";

const paybackData = [
  { threads: 50000, months: 36 },
  { threads: 60000, months: 33 },
  { threads: 70000, months: 30 },
  { threads: 80000, months: 28 },
  { threads: 90000, months: 26 },
  { threads: 100000, months: 24 },
  { threads: 110000, months: 22 },
  { threads: 120000, months: 20 },
  { threads: 130000, months: 18 },
  { threads: 140000, months: 16 },
  { threads: 150000, months: 14 },
  { threads: 160000, months: 13 },
  { threads: 170000, months: 12 },
  { threads: 180000, months: 11 },
  { threads: 190000, months: 10 },
  { threads: 200000, months: 8 },
];

export default function RoiCalculator() {
  const [formData, setFormData] = useState({
    skilledRate: 55,
    unskilledRate: 40,
    twinRate: 90,
    hoursPerYear: 1600,
    threadsPerYear: 100000,
    wiresPerHour: 50,
    shifts: 1,
    labelTime: 50,
    labelingPercentage: 50,
    turnover: 2500000,
    ebitda: 10,
    turnoverGrowth: 10,
    advantageYears: 5,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleSubmit = () => {
    const threadsPerYear = formData.threadsPerYear;
    const match = paybackData.find((item) => threadsPerYear <= item.threads);
    setResult(match ? match.months : 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ROI Calculator - Panel Builder Automation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
            </label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate Payback Time
      </button>

      {result !== null && (
        <div className="mt-6 text-center text-green-700 text-xl font-bold">
          Estimated Payback Time: {result} months
        </div>
      )}

      <div className="mt-10 text-center bg-gray-100 p-4 rounded shadow">
        <p className="mb-2 text-gray-700">Curious about your full ROI details?</p>
        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          Contact Our Specialists
        </button>
      </div>
    </div>
  );
}
