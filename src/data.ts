import faker from "faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dataFake = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));

console.log(dataFake);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataFake,
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: dataFake,
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};
