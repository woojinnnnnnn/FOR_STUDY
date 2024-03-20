import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../utils/prisma/index.js";

export class ReviewsRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }
  // 리뷰 전체 조회
  findAllReviews = async () => {
    const reviews = await prisma.review.findMany();
    return reviews;
  };

  findReviewById = async (reviewId) => {
    const review = await prisma.review.findUnique({
      where: { reviewId: +reviewId },
    });
    return review;
  };

  createReview = async (
    title,
    book_title,
    content,
    star,
    user_name,
    password
  ) => {
    const createReview = await prisma.review.create({
      data: {
        title,
        book_title,
        content,
        star,
        user_name,
        password,
      },
    });
    return createReview;
  };

  updateReview = async (book_title, title, content, star) => {
    const updateReview = await prisma.review.update({
      where: {
        reviewId: +reviewId,
        password: password,
      },
      data: {
        book_title,
        title,
        content,
        star,
      },
    });
    return updateReview;
  };

  deleteReview = async (reviewId, password) => {
    const deleteReview = await prisma.review.delete({
      where: {
        reviewId: +reviewId,
        password: password,
      },
    });
    return deleteReview
  };
}
