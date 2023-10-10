import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

const 국내종합도서 = [
  {
    id: 1,
    url: "https://image.yes24.com/goods/122090360/L",
    title: " 퓨처 셀프 현재와 미래가 달라지는 놀라운 혁명",
    price: "17,820",
  },
  {
    id: 2,
    url: "https://image.yes24.com/goods/122457906/L",
    title: " 시대예보: 핵개인의 시대",
    price: "18,900",
  },
  {
    id: 3,
    url: "https://image.yes24.com/goods/122426425/L",
    title: "트렌드코리아2024",
    price: "17,100",
  },
];

router.get("/", (req, res, next) => {
  res.render("list.ejs", { list: 국내종합도서, title: "국내도서종합" });
});

router.get("/all", (req, res, next) => {
  res.render("list.ejs", { list: 국내종합도서, title: "국내도서종합" });
});

export default router;
