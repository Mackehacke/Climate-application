import { useState } from "react";
/* Här importerar vi in de delar av recharts vi vill använda i vår komponent. */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* I denna komponent finns vår graf som vi har på fossilsidan. */
export const Co2LineChart = ({ myData }) => {
  const [selectedData, setSelectedData] = useState("Cement");

  const onDataChange = (e) => {
    setSelectedData(e.target.value);
  };
  return (
    <div>
      <label>
        Pick type of data:
        <select value={selectedData} onChange={onDataChange}>
          <option value="Gas Fuel">Gas Fuel</option>
          <option value="Liquid Fuel">Liquid Fuel</option>
          <option value="Solid Fuel">Solid Fuel</option>
          <option value="Cement">Cement</option>
          <option value="Gas Flaring">Gas Flaring</option>
        </select>
      </label>
      {/* Det finns en händelsehanterare ovan som används för att fånga in användarens val och visa relevant data i grafen. Detta är ett komponenttillstånd för att lagra användarens val. Ifall användaren väljer "Gas Fuel" ska två linjer visas på grafen. Ena linjen visar summan och den andra visar användarens val. Detta möjliggör en jämförelse mellan det fullständiga CO2-utsläppsvärdet och CO2-utsläppet från användarens val. */}

      {/* Koderna nedan styr designen på grafen.För att specifiera vilken datauppsättning grafen ska använda har vi {myData} i <LineChart>. */}
      <LineChart
        width={800}
        height={400}
        data={myData}
        margin={{
          top: 50,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        {/* I grafen visar x-axeln alltid "år"-data från datamängden. Detta beror på att vi har ställt in år i dataKey-egenskapen i <Xaxis>*/}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line> nedan har vi använt för att lägga till en linje i grafen. Egenskapen dataKey inuti anger vilken del av datan vi vill visa i grafen. */}
        <Line
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={selectedData} stroke="#82ca9d" />
        {/* Ovan används dataKey={selectedData} för att göra grafen dynamisk och för att använda det valda värdet från rullgardinsmenyn. */}
      </LineChart>
    </div>
  );
};
