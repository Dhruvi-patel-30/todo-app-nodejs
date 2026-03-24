import express from "express";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"; 
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Api is working");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
