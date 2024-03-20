import express from 'express';


// 익스프렉스 라우터 생성.
const router = express.Router()

// 1. mongoose, goods 모델 가져오기.
import mongoose from 'mongoose';
import Goods from '../schemas/goods.js'
// 2. API 구현
router.post('/goods', async (req, res) => {
    // 3. 클라이언트로 부터 전달받은 데이터를 가져온다.
    const {goodsId, name, thumbnaiUrl, category, price} = req.body;
    // 4. goodsId 중복되지 않았는지 검사한다. -> mongodb에 데이터를 조회해서 확인한다.
    const goods = await Goods.find({goodsId: goodsId}).exec();
    // 4-1 만약 중복이면 에러메시지 전달,
    if (goods.length){
        return res.status(400).json({errorMessage: '이미 존재하는 데이터 입니다.'})
    }
    // 5 상품 을 생성한다.,
    const createGoods = await Goods.create({
        goodsId: goodsId,
        name: name,
        thumbnaiUrl: thumbnaiUrl,
        category: category,
        price: price,
    });
    // 6. 생성된 상품 정보를 클라이언트 에게 응답 반환 한다.
    return res.status(201).json({goods: createGoods});  
})


export default router;