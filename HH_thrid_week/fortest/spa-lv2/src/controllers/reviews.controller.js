import { ReviewsService } from "../services/reviews.service.js";

export class ReviewsController {
    // 리뷰 서비스를 리뷰 컨트롤러 클래스의 멤버 변수로 할당.
    reviewsService = new ReviewsService();

    // 리뷰 조회 API
    getReview = async (req, res, next) => {
        try {
            const reviews = await this.reviewsService.findAllReviews();

            return res.status(200).json({ data: reviews })
        } catch (err) {
            next(err)
        }
    }

    // 리뷰 상세 조회 API
    getReviewById = async (req, res, next) => {
        try {
            const { reviewId } = req.params;
            const review = await this.reviewsService.findReviewById(reviewId);

            return res.status(200).json({ data: review })
        } catch (err) {
            next(err)
        }
    }

    // 리뷰 등록 API
    createReview = async (req, res, next) => {
        try {
            const { title, book_title, content, star, user_name, password } = req.body

            const createReview = await this.reviewsService.createReview(
                title,
                book_title,
                content,
                star,
                user_name,
                password
            )
            return res.status(200).json({ data: createReview })
        } catch (err) {
            next(err)
        }
    }

    // 리뷰 수정 API
    updateReview = async (req, res, next) => {
        try {
            const { reviewId } = req.params;
            const { book_title, title, content, star  } = req.body;

            const updateReview = await this.reviewsService.updateReview(
                reviewId,
                book_title,
                title,
                content,
                star
            )
            return res.status(200).json({ data: updateReview })
        } catch (err) {
            next(err)
        }
    }
    
    // 리뷰 삭제 API
    deleteReview = async (req, res, next) => {
        try {
            const { reviewId } = req.params;
            const { password } = req.body;

            const deleteReview = await this.reviewsService.deleteReview(reviewId, password)
            return res.status(200).json({ data: deleteReview })
        } catch (err) {
            
        }
    }
}