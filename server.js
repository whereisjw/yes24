import express from "express";
import allRouter from "./routers/all.js";
import realtimeRouter from "./routers/realtime.js";
import dayRouter from "./routers/day.js";
import monthRouter from "./routers/month.js";
import saleRouter from "./routers/sale.js";
import steadyRouter from "./routers/steady.js";
const app = express();

app.listen(1010, () => {
  console.log("http://localhost:1010 실행중");
});

app.use("/list", allRouter);
app.use("/list/realtime", realtimeRouter);
app.use("/list/day", dayRouter);
app.use("/list/month", monthRouter);
app.use("/list/sale", saleRouter);
app.use("/list/steady", steadyRouter);

app.get("/", (req, res, next) => {
  res.send("홈화면");
});
