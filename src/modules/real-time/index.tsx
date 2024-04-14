import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import CardRealTime from "./card";

const RealTimeModule = () => {
  return (
    <section className="w-[90%] lg:w-3/4 mx-auto flex flex-col gap-8 my-8">
      <h1 className="flex items-center gap-4 font-bold text-secondary text-2xl">
        <PresentationChartBarIcon className="w-12 h-12" />
        Tiempo real por <br /> electrodoméstico
      </h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {new Array(9).fill(1).map((_, i) => (
          <CardRealTime key={i} />
        ))}
      </section>
    </section>
  );
};

export default RealTimeModule;
