import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import React from "react";
interface Props {
  imgUrl: string;
  title: string;
  date: string;
}

const IndexTitle = ({ imgUrl, title, date }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <DocumentChartBarIcon className="h-14 w-14 text-secondary" />
      <div>
        <h1 className="text-2xl text-secondary">{title}</h1>
        <p className="text-3xl text-primary">{date}</p>
      </div>
    </div>
  );
};

export default IndexTitle;
