const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/:date?", (req, res) => {
  const date = req.params.date;
  const result = {};

  if (!date) {
    result.unix = new Date().getTime();
    result.utc = new Date().toUTCString();
  } else {
    const inputDate = new Date(date);
    if (inputDate.toString() === "Invalid Date") {
      result.error = "Invalid Date";
    } else {
      result.unix = inputDate.getTime();
      result.utc = inputDate.toUTCString();
    }
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
