import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Filters = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="flex gap-2 items-center justify-center w-full flex-wrap">
      <form className="mt-8 flex gap-4">
        <label className="relative">
          <span className="inline-block absolute left-2 -top-2 px-2 text-sm bg-white z-[2] text-secondary">
            Fecha Inicial
          </span>
          <DatePicker
            className="input input-primary cursor-pointer input-bordered w-full text-secondary font-medium text-sm"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            wrapperClassName="cursor-pointer"
          />
        </label>
        <label className="relative">
          <span className="inline-block absolute left-2 -top-2 px-2 text-sm bg-white z-[2] text-secondary">
            Fecha Final
          </span>
          <div>
            <DatePicker
              className="input input-primary cursor-pointer input-bordered w-full text-secondary font-medium text-sm"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              wrapperClassName="cursor-pointer"
            />
          </div>
        </label>
      </form>
    </div>
  );
};

export default Filters;
