import { Card } from "./card";

interface Product {
  id: number;
  title: string;
  watts: number;
}

interface Props {
  products: Product[];
}

const ListCards = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {products.map((product, index) => (
        <Card key={index} cardInfo={product} />
      ))}
    </section>
  );
};

export default ListCards;
