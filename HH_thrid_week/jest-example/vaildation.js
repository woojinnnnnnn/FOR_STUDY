// validation.js

export const isEmail = (value) => {
    const email = value || '';

    const [ localPart, domainPart, ...etc ] = email.split('@')

    // 입력 받은 이메일 주소는 @ 문자가 1개만 있어야 이메일 이 아님.
    if(!localPart || !domainPart || etc.length ){
        return false;
    }
    // 입력한 이메일 주소에 공백이 존재하면 이메일 이 아님
    else if (email.includes(' ')) {
        return false;
    }
    // 이메일 주소 맨 앞에 하이픈이 있으면 아님
    else if (email[0] === '-') {
        return false;
    }
    // 이메일 주소중 로컬 파트 골뱅이 기준 앞부분 에는 영문 대소문자와 숫자 특수문자는 플러스 하이픈 언더바 만 존재
    for (const word of localPart.toLowerCase().split("")){
        if(!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","+","_"].includes(word)){
            return false
        }
    }
    // 도메인.
    for (const word of domainPart.toLowerCase().split("")){
        if(!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","."].includes(word)){
            return false
        }
    }


    return true
};

// validation.js

