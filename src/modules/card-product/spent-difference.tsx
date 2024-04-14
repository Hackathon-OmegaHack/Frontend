import React from "react";

interface Props {
  actualValue: number;
  lastValue: number;
}
const SpentDifference = ({ actualValue, lastValue }: Props) => {
  const total = actualValue - lastValue;
  var spanInfo = <span className="text-sm p-1 px-3 rounded-md bg-slate-400 text-">No hubo diferencia</span>;
  if (total > 0)
    spanInfo = (
      <span className="text-sm p-1 px-3 rounded-md bg-red-400 text-red-800">
        Aumento del ${Math.abs(total)} COP
      </span>
    );
  if (total > 0)
    spanInfo = (
      <span className="text-sm p-1 px-3 rounded-md bg-red-400 text-red-800">Disminución del ${Math.abs(total)} COP</span>
    );

  return <>{spanInfo}</>;
};

export default SpentDifference;
