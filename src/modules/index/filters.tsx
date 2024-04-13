import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Filters = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="flex gap-2 items-start justify-start w-full">
      <div className="form-control">
        <label className="label flex flex-col items-start text-lg">
          Fecha Inicial:
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            wrapperClassName="cursor-pointer"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label flex flex-col items-start text-lg">
          Fecha Final:
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            wrapperClassName="cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
