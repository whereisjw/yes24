import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

const 실시간 = [
  {
    id: 4,
    url: "https://image.yes24.com/goods/122851586/L",
    title: "  ELLE 엘르 B형 (여성월간) : 11월 [2023] ",
    price: "12,250",
  },
  {
    id: 5,
    url: "https://image.yes24.com/goods/122851581/L",
    title: "ELLE 엘르 A형 (여성월간) : 11월 [2023]",
    price: "12,250",
  },
  {
    id: 6,
    url: "https://image.yes24.com/goods/122851590/L",
    title: "ELLE 엘르 C형 (여성월간) : 11월 [2023]",
    price: "12,250",
  },
];
router.get("/", (req, res, next) => {
  res.render("list.ejs", { list: 실시간, title: "실시간" });
});
export default router;
