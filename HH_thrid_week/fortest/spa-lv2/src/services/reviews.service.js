import { ReviewsRepository } from '../repositories/reviews.repository.js';

export class ReviewsService {
    reviewsRepository = new ReviewsRepository();

    // 리뷰 목록
    findAllReviews = async () => {
        const reviews = await this.reviewsRepository.findAllReviews();

        reviews.sort((a, b) => {
            return b.createdAt - a.createdAt
        })

        return reviews.map((review) => {
            return {
                title: review.title,
                book_title: review.book_title,
                content: review.content,
                star: review.star,
                user_name: review.user_name
            }
        })
    }

    // 리뷰 상세 조회.
    findReviewById = async (reviewId) => {
        const review = await this.reviewsRepository.findReviewById(reviewId);

        return {
            book_title: review.book_title,
            title: review.title,
            content: review.content,
            star: review.star
        }
    }

    // 리뷰 등록.
    createReview = async (book_title, title, content, star, user_name, password) => {
        const createReview = await this.reviewsRepository.createReview(
            book_title,
            title,
            content,
            star,
            user_name,
            password
        )
        return {
            book_title: createReview.book_title,
            title: createReview.title,
            content: createReview.content,
            star: createReview.star,
            user_name: createReview.user_name,
            password: createReview.password
        }
    }

    // 리뷰 수정.
    updateReview = async (reviewId ,book_title, title, content, star) => {
        const review = await this.reviewsRepository.findReviewById(reviewId);
        if (!review) throw new Error (" 존재 하지 않는 리뷰 입니다. ");
        await this.reviewsRepository.updateReview(book_title, title, content, star);

        const updateReview = await this.reviewsRepository.findReviewById(reviewId)
        return {
            reviewId: updateReview.reviewId,
            book_title: updateReview.book_title,
            title: updateReview.title,
            content: updateReview.content,
            star: updateReview.star,
        }
    }

    // 리뷰 삭제.
    deleteReview = async (reviewId, password) => {
        const review = await this.reviewsRepository.findReviewById(reviewId);
        if (!review) throw new Error (" 존재 하지 않는 리뷰 입니다. ");
        await this.reviewsRepository.deleteReview( reviewId, password);

        return {
            title: review.title,
            book_title: review.book_title,
            content: review.content,
            star: review.star,
            user_name: review.user_name,
            password: review.password
        }
    }
}