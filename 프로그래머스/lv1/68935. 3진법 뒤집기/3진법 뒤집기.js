function solution(n) {
    let tenrnaryNum = n.toString(3)
    let reverseTenrnary = [...tenrnaryNum].reverse().join('')
    let decimalNum = parseInt(reverseTenrnary, 3)
    return decimalNum
}

// function solution(n) {
//   let remainders = [];
//   while (n > 0) {
//     remainders.push(n % 3);
//     n = Math.floor(n / 3);
//   }
//   let decimalNum = 0;
//   for (let i = 0; i < remainders.length; i++) {
//     decimalNum += remainders[i] * Math.pow(3, remainders.length - 1 - i);
//   }
//   return decimalNum;
// }