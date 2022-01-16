import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(router);

app.listen(3333, () => {
  console.log('Backend is running in http://localhost:3333');
});
