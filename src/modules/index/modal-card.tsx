const ModalCard = () => {
  return (
    <section className="w-full p-8 flex flex-col gap-4">
      <div className="w-full flex items-center gap-4">
        <figure className="w-1/2">
          <img
            className="w-full h-full object-contain"
            src="./assets/refrigerator.png"
            alt="Imagen del electrodomestico"
          />
        </figure>
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-1 text-3xl font-bold">Neverita</h2>
          <ul className="text-sm text-secondary">
            <li className="flex items-center gap-2">
              <span>Watts consumidos:</span>
              <span className="font-medium">50</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Horas de uso:</span>
              <span className="font-medium">24</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Días de uso:</span>
              <span className="font-medium">30</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Costo por kWh:</span>
              <span className="font-medium">$ 0.125</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Costo mensual:</span>
              <span className="font-medium">$ 45</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary"></div>
      <div className="w-full h-40 bg-secondary/40 rounded-lg"></div>
    </section>
  );
};

export default ModalCard;
