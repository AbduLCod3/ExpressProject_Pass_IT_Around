const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    `<h1>99 Bottles of beer on the wall"</h1>
    <p><a href="4">Take One Down, Pass It Around</a></p>`
  );
});

// Set up the dynamic routes for each number of bottles
app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = req.params.number_of_bottles;

  // Handle the case where there are no more bottles left
  if (numberOfBottles === "0") {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">GO BACK TO HOMEPAGE</a>
    `);
  } else {
    // Display the number of bottles and the link to the next page
    const nextNumberOfBottles = numberOfBottles - 1;
    res.send(`
      <p><h1>${numberOfBottles} Bottles of beer on the wall</h1></p>
      <p><a href="/${nextNumberOfBottles}">Take One Down, Pass It Around</a></p>
      <p><a href="/">GO BACK TO HOMEPAGE</a></p>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${[PORT]}`);
});
