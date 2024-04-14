import BarChart from "./bar-chart";
import Filters from "./filters";
import InfoUser from "./info-user";
import Report from "./report";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center">
      <div className="lg:w-[40%] flex flex-col gap-4">
        <Report />
        <InfoUser />
      </div>
      <div>
        <Filters />
        <BarChart />
      </div>
    </div>
  );
};

export default MainContent;
