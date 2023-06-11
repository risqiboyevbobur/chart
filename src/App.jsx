import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

const data = {
  labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"],
  datasets: [
    {
      data: [8, 43, 27, 140, 150, 130],
      backgroundColor: "transparent",
      borderColor: "green",
      borderWidth: 6,
      pointBorderColor: "blue",
      pointBorderWidth: 6,
      tension: 0.1,
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 250,
      ticks: {
        stepSize: 50,
      },
    },
  },
};
const data2 = {
  labels: ["To`laganlar", "Qarzdorlar"],
  datasets: [
    {
      label: "17 899 000 so`m",
      data: [50, 30],
      backgroundColor: ["green", "pink"],
      borderColor: ["green", "pink"],
      borderWidth: 1,
      cutout: "76%",
    },
  ],
};
const data3 = {
  labels: ["Kirimlar", "Chiqimlar"],
  datasets: [
    {
      label: "17 899 000 so`m",
      data: [77, 30],
      backgroundColor: ["green", "pink"],
      borderColor: ["green", "pink"],
      borderWidth: 1,
      cutout: "76%",
    },
  ],
};
const gaugeText = {
  id: "gaugeText",
  beforeDatasetsDraw(chart) {
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    const {
      ctx,
      // chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();
    ctx.fillStyle = "pink";
    ctx.textAlign = "center";
    ctx.font = " bold 30px sans-serif";
    ctx.fillText("88%", xCoor, yCoor);
  },
};
const gaugeText2 = {
  id: "gaugeText",
  beforeDatasetsDraw(chart) {
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    const {
      ctx,
      // chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.font = " bold 30px sans-serif";
    ctx.fillText("88%", xCoor, yCoor);
  },
};
const options2 = {};
const options3 = {};
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
ChartJS.register(ArcElement, Tooltip, Legend);
const App = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-14 ">
      <div className="border-2 w-[30%]  h-[450px]   p-[20px]  rounded-3xl shadow-md">
        <div className="flex gap-40 text-gray-600 font-bold ">
          <h1 className="text-lg">Talabalar statistikasi</h1>
          <p className="cursor-pointer">6 oylik</p>
        </div>
        <br />
        <hr />
        <br />
        <br />
        <Line className="" data={data} options={options}></Line>
        <br />
        <br />
        <hr />
        <h1 className="text-orange-500 text-sm font-mono pt-7 cursor-pointer">
          Barcha ma`lumotlar
        </h1>
      </div>

      <div className="border-2 w-[300px] h-[450px]   p-[20px]  rounded-3xl shadow-md">
        <h1 className=" text-gray-600 font-bold text-center text-lg">
          To`lovlar statistikasi
        </h1>
        <br />
        <hr />
        {/* <br /> */}
        {/* <br /> */}
        <Doughnut
        className="cursor-pointer"
          options={options2}
          plugins={[gaugeText]}
          data={data2}
        ></Doughnut>
        <br />
        <hr className="mt-4" />
        <h1 className="text-gray-800 text-sm font-mono pt-7 cursor-pointer">
          Ma`lumotlarni yuklab olish
        </h1>
      </div>
      <div className="border-2 w-[300px] h-[450px]   p-[20px]  rounded-3xl shadow-md">
        <h1 className=" text-gray-600 font-bold text-center text-lg">
          Hisob statistikasi
        </h1>
        <br />
        <hr />
        {/* <br /> */}
        {/* <br /> */}
        <Doughnut
        className="cursor-pointer"
          options={options3}
          plugins={[gaugeText2]}
          data={data3}
        ></Doughnut>
        <br />
        <hr className="mt-4" />
        <h1 className="text-gray-800 text-sm font-mono pt-7 cursor-pointer  ">
          Ma`lumotlarni yuklab olish
        </h1>
      </div>
    </div>
  );
};

export default App;
