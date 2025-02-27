// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { evaluate } = require("mathjs");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/evaluate", (req, res) => {
//   const { formula } = req.body;
//   try {
//     const result = evaluate(formula);
//     res.json({ result });
//   } catch (error) {
//     res.status(400).json({ error: "Invalid formula" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const math = require("mathjs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/evaluate", (req, res) => {
  const { formula } = req.body;
  
  try {
    const result = math.evaluate(formula);
    res.json({ result });
  } catch (error) {
    res.json({ result: "Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
