import React from "react";

const WorkStages = ({ steps }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="border-2 border-gray-300 rounded-lg shadow-md p-6 w-full md:w-80 relative"
        >
          <span className="absolute top-0 left-0 w-10 h-1 bg-yellow-400"></span>
          <h3 className="text-5xl font-bold text-gray-800">{step.number}</h3>
          <h4 className="text-2xl font-semibold mt-2">{step.title}</h4>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            {step.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkStages;
