import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

/* 불편한편의점 12,600
아버지의 해방일지 13,500
https://image.yes24.com/goods/99308021/L
https://image.yes24.com/goods/112253263/L */
const 스테디 = [
  {
    id: 4338,
    url: "https://image.yes24.com/goods/99308021/L",
    title: " 불편한편의점",
    price: "12,600",
  },
  {
    id: 4331,
    url: "https://image.yes24.com/goods/122479686/L",
    title: "아버지의 해방일지",
    price: "13,500",
  },
  {
    id: 3,
    url: "https://image.yes24.com/goods/122426425/L",
    title: "트렌드코리아2024",
    price: "17,100",
  },
];
router.get("/", (req, res, next) => {
  res.render("list.ejs", { list: 스테디, title: "스테디셀러" });
});

export default router;
