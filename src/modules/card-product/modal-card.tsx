import CardChart from "./card-chart";

const ModalCard = () => {
  return (
    <section className="w-full p-8 flex flex-col gap-4">
      <h2 className="text-primary-1 text-center text-3xl font-bold">
        Neverita
      </h2>
      <CardChart />
    </section>
  );
};

export default ModalCard;
