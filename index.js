const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1 style='text-align: center; '> Devlights Bootcamp React + Node <br/> API RESTful </h1>"
    );
});

const PORT = 3500;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
