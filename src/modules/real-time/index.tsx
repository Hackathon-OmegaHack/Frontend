import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import CardRealTime from "./card";
import { getCardsInfo } from "@/services/cardsInfo";

const RealTimeModule = () => {
  const cardsInfo = getCardsInfo();
  return (
    <section className="w-[90%] lg:w-3/4 mx-auto flex flex-col gap-8 my-8">
      <h1 className="flex items-center gap-4 font-bold text-secondary text-2xl">
        <PresentationChartBarIcon className="w-12 h-12" />
        Tiempo real por <br /> electrodoméstico
      </h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsInfo.map((card, i) => (
          <CardRealTime
            key={i}
            name={card.title}
            cost={Math.round(card.watts * 0.375 * 100) / 100}
          />
        ))}
      </section>
    </section>
  );
};

export default RealTimeModule;
