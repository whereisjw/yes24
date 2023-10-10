import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

const 월별 = [
  {
    id: 994,
    url: "https://image.yes24.com/goods/122090075/L",
    title: " 도시와 그 불확실한 벽 도시와 그 불확실한 벽 새창이동",
    price: "17,550",
  },
  {
    id: 1,
    url: "https://image.yes24.com/goods/122090360/L",
    title: " 퓨처 셀프 현재와 미래가 달라지는 놀라운 혁명",
    price: "17,820",
  },
  {
    id: 996,
    url: "https://image.yes24.com/goods/122851590/L",
    title: "ELLE 엘르 C형 (여성월간) : 11월 [2023]",
    price: "12,250",
  },
];
router.get("/", (req, res, next) => {
  res.render("list.ejs", { list: 월별, title: "월별/주별" });
});

export default router;
