import React from "react";
import Filters from "./filters";
import ListCards from "../card-product/list-cards";
import BarChart from "./bar-chart";
import InfoUser from "./info-user";
import Report from "./report";
import MainContent from "./main-content";
import IndexTitle from "./index-title";
import { getCardsInfo } from "@/services/cardsInfo";

const IndexPage = () => {
  const products = getCardsInfo();
  return (
    <>
      <div className="w-3/4 mx-auto flex flex-col gap-8 mt-8">
        <IndexTitle
          imgUrl=""
          title="Consumo del día"
          date="14 de Abril de 2024 "
        />
        <ListCards products={products} />
      </div>
    </>
  );
};

export default IndexPage;
