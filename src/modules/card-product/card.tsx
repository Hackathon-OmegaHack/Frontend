import Image from "next/image";

interface Props {
  cardInfo: {
    title: string;
    imgUrl: string;
    watts: number;
  };
}

export const Card = ({ cardInfo }: Props) => {
  const { title, imgUrl, watts } = cardInfo;
  return (
    <div className="card bg-base-100 shadow-xl h-fit">
      <figure className="w-[50%] mx-auto">
        <img src={imgUrl} alt="Imagen" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex w-full justify-between mb-2">
          <span className="text-base font-bold">Watts consumidos:</span>
          <span className="text-base font-medium">{watts}</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
};
