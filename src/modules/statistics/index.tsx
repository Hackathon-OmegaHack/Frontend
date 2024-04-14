import {
  CalendarDaysIcon,
  DocumentChartBarIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import Table from "./table";

const StatisticsModule = () => {
  return (
    <section className="w-[90%] lg:w-3/4 mx-auto flex flex-col gap-12 my-8">
      <h1 className="flex items-center gap-2 font-bold text-secondary text-2xl">
        <DocumentChartBarIcon className="w-8 h-8" />
        Estadísticas por fechas
      </h1>
      <form className="flex flex-col md:flex-row gap-4 w-full mx-auto mt-4">
        <div className="flex gap-4 md:w-3/4 text-secondary">
          <label
            htmlFor="initDate"
            className="relative border border-secondary w-full px-4 py-2 rounded-md">
            <span className="absolute -top-7 left-2 flex gap-2 font-medium">
              Fecha inicial
            </span>
            <input id="initDate" type="date" className="outline-none text-sm" />
          </label>
          <label
            htmlFor="finalDate"
            className="relative border border-secondary w-full px-4 py-2 rounded-md">
            <span className="absolute -top-7 left-2 flex gap-2 font-medium">
              Fecha final
            </span>
            <input
              id="finalDate"
              type="date"
              className="outline-none text-sm"
            />
          </label>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 flex-1 bg-primary text-white font-medium rounded-md px-4 py-2 hover:bg-primary-2 transition-all">
          <FunnelIcon className="w-4 h-4" />
          Filtrar
        </button>
      </form>
      <Table />
    </section>
  );
};

export default StatisticsModule;
