function solution(strings, n) {
    let result = [];

    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i][n] + strings[i];
    }
    strings.sort();
    for(let j = 0; j < strings.length; j ++) {
      strings[j] = strings[j].replace(strings[j][0],"");
      result.push(strings[j]);
    }

    return result;
}

// 2주차 과제/