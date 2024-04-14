import React from "react";

interface Props {
  actualValue: number;
  lastValue: number;
}
const SpentDifference = ({ actualValue, lastValue }: Props) => {
  const total = actualValue - lastValue;
  console.log("total", total < 0);
  if (total > 0)
    return (
      <span className="text-sm p-1 px-3 rounded-md bg-red-400 text-red-800">
        Consumo aumentó ${Math.abs(total)} COP
      </span>
    );
  if (total < 0)
    return (
      <span className="text-sm p-1 px-3 rounded-md bg-green-400 text-green-800">
        Consumo disminuyó ${Math.abs(total)} COP
      </span>
    );

  return (
    <>
      <span className="text-sm p-1 px-3 rounded-md bg-slate-400 text-white">
        No hubo diferencia
      </span>
    </>
  );
};

export default SpentDifference;
