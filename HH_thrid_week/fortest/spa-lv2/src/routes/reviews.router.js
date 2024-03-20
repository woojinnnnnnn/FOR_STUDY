import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { ReviewsController } from "../controllers/reviews.controller.js";

const router = express.Router();

const reviewsController = new ReviewsController();

// 리뷰 작성 API
router.post("/", reviewsController.createReview);

// 리뷰 목록 조회 API
router.get("/", reviewsController.getReview);

// 리뷰 상세 조회 API
router.get("/:id", reviewsController.getReviewById);

// 리뷰 수정 API
router.put("/:id", reviewsController.updateReview);

// 리뷰 삭제 API
router.delete("/:id", reviewsController.deleteReview);

export default router;
