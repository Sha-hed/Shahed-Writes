import express from "express";
import cors from "cors";
const app = express();

//middleware

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("ShahedWrites. Send you writes to us!");
});

export default app;
