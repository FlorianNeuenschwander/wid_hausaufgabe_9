import { VegaLite } from "react-vega";
import spec from "./Country.json";

const VegaChart = () => {
  return (
    <div>
      <h2>Länder</h2>
      <VegaLite spec={spec} />
    </div>
  );
};

export default VegaChart;
