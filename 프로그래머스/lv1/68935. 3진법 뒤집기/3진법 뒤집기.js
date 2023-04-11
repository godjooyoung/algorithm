function solution(n) {
    let tenrnaryNum = n.toString(3)
    let reverseTenrnary = [...tenrnaryNum].reverse().join('')
    let decimalNum = parseInt(reverseTenrnary, 3)
    return decimalNum
}