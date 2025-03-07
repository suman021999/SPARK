import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Pie, Bar, Line } from "react-chartjs-2";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then(response => {
        console.log("Fetched data:", response.data);
        if (response.data && typeof response.data === 'object') {
          setData(response.data);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      });
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="overview">
        <div className="card">Clicks on Links: {data.clicksOnLinks || 0}</div>
        <div className="card">Click on Shop: {data.clickOnShop || 0}</div>
        <div className="card">CTA: {data.cta || 0}</div>
      </div>

      <div className="charts">
        {data.lineChart ? <Line data={data.lineChart} /> : <p>No Line Chart Data</p>}
        {data.trafficByDevice ? <Bar data={data.trafficByDevice} /> : <p>No Traffic Data</p>}
        {data.sites ? <Pie data={data.sites} /> : <p>No Site Data</p>}
        {data.trafficByLinks ? <Bar data={data.trafficByLinks} /> : <p>No Link Data</p>}
      </div>
    </div>
  );
};

export default Dashboard;
.dashboard-container {
  width: 90%;
  margin: auto;
  font-family: Arial, sans-serif;
}

.overview {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card {
  flex: 1;
  background: #d4f8d4;
  padding: 20px;
  margin: 0 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.chart-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

p {
  text-align: center;
  font-size: 14px;
}

