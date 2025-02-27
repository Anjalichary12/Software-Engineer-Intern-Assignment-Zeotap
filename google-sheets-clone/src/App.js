import React, { useState, useEffect } from "react";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const evaluateFormula = async (formula) => {
    try {
      const response = await axios.post("http://localhost:5000/evaluate", {
        formula,
      });
      return response.data.result;
    } catch {
      return "Error";
    }
  };

  return (
    <div>
      <h2>Google Sheets Clone</h2>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        width="600"
        height="300"
        licenseKey="non-commercial-and-evaluation"
        afterChange={async (changes, source) => {
          if (source === "edit") {
            for (const [row, col, oldVal, newVal] of changes) {
              if (newVal.startsWith("=")) {
                const result = await evaluateFormula(newVal.slice(1));
                setData((prev) => {
                  const newData = [...prev];
                  newData[row][col] = result;
                  return newData;
                });
              }
            }
          }
        }}
      />
    </div>
  );
};

export default App;
