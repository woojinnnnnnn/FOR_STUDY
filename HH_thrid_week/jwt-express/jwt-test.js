import jwt from 'jsonwebtoken';

const token = jwt.sign({ myPayloadData: 1234 }, 'mysecretkey');
console.log(token); 

// 복호화
const decidedValue = jwt.decode(token)
console.log(decidedValue)

// jwt 변조 검증
const decidedValueByVerify = jwt.verify(token, 'mysecretkey')
console.log(decidedValueByVerify)