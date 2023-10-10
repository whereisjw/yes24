import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

const 특가 = [
  {
    id: 438,
    url: "https://image.yes24.com/goods/122585509/L",
    title: "2024년 애드워드 호퍼 ‘고독이 나를 위로한다",
    price: "14,550",
  },
  {
    id: 431,
    url: "https://image.yes24.com/goods/122479686/L",
    title: "2024 맘마미아 가계부",
    price: "7,000",
  },
  {
    id: 9966,
    url: "https://image.yes24.com/goods/122574967/L",
    title: "2024년 모네의 정원에서 월든을 읽다 탁상달력",
    price: "12,250",
  },
];
router.get("/", (req, res, next) => {
  res.render("list.ejs", { list: 특가, title: "특가" });
});

export default router;
