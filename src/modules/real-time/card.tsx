import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import ChartCardRealTime from "./chart-card";

interface Props {
  name: string;
  cost: number;
}
const CardRealTime = ({ name, cost }: Props) => {
  return (
    <article className="rounded-md shadow-lg text-secondary">
      <div className="px-8 pt-12 pb-2">
        <div className="flex flex-col gap-0">
          <strong>{name}</strong>
          <p className="font-semibold text-primary text-4xl">${cost} COP</p>
          <span className="text-sm">Último minuto</span>
        </div>
        <span className="flex gap-1 items-center font-medium text-[.6rem] my-2 bg-secondary/20 rounded-md p-2">
          <ExclamationCircleIcon className="w-5 h-5" />
          Gráfica del costo energético por cada minuto
        </span>
      </div>
      <hr className="w-full h-2" />
      <div className="px-8 pb-12 pt-2">
        <ChartCardRealTime />
      </div>
    </article>
  );
};

export default CardRealTime;
