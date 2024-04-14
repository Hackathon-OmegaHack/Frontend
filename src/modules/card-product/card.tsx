import Modal from "@/components/modal/modal";
import useModal from "@/components/modal/useModal";
import ModalCard from "./modal-card";
import SpentDifference from "./spent-difference";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
interface Props {
  cardInfo: {
    title: string;
    watts: number;
  };
}

export const Card = ({ cardInfo }: Props) => {
  const { title, watts } = cardInfo;
  const moneySpent = watts * 0.375;
  // const { isOpen, closeModal, openModal } = useModal();
  return (
    <>
      <article className="p-8 rounded-lg shadow-lg flex flex-col gap-4 bg-white text-secondary font-medium">
        <h1 className="text-primary font-bold">{title}</h1>
        <hr />
        <div className="font-semibold">
          <h3 className="text-[1.5rem]">Gasto</h3>
          <p>{moneySpent}</p>
        </div>
        <SpentDifference actualValue={moneySpent} lastValue={400} />
        <p className="text-sm">Consumo: 1.440 Watts</p>
        <button className="flex items-center text-sm gap-2 px-2 py-1 bg-secondary text-white rounded-md">
          <DocumentMagnifyingGlassIcon className="h-5 w-5" />
          Ver detalles
        </button>
      </article>
    </>
  );
};
