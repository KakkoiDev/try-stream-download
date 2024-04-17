import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = 5000;

app.get("/download/:file", (req, res) => {
  const file = req.params.file;
  const filePath = path.join("public", file);
  const readStream = fs.createReadStream(filePath);

  res.setHeader("Content-Disposition", `attachment; filename=${file}`); // force client download
  readStream.pipe(res);
});

app.listen(5000, () => console.log(`Server running on port ${port}`));
