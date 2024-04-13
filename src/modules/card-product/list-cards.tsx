import { Card } from "./card";

interface Product {
  id: number;
  title: string;
  imgUrl: string;
  watts: number;
}

interface Props {
  products: Product[];
}

const ListCards = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} cardInfo={product} />
      ))}
    </section>
  );
};

export default ListCards;
