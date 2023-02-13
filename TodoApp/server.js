import express from "express";
import cors from "cors";
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
app.post("/api/message", (req, res) => {
  const message = req.body.message;
  console.log(message);
  res.json({ success: true });
  console.log(message);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
