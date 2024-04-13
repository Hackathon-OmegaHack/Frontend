import React from "react";
import Filters from "./filters";
import { Card } from "../card-product/card";
import ListCards from "../card-product/list-cards";
const IndexPage = () => {
  const cardInfo = {
    title: "Neverita",
    imgUrl: "./assets/refrigerator.png",
    watts: 50,
  };

  const products = new Array(5).fill({
    id: 1,
    title: "Neverita",
    imgUrl: "./assets/refrigerator.png",
    watts: 50,
  });
  return (
    <>
      <Filters />
      <ListCards products={products} />
    </>
  );
};

export default IndexPage;
