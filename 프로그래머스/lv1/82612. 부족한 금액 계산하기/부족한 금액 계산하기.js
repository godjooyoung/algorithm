function solution(price, money, count) {
    const costCalculater = function(i){
        return price*(i+1)
    }

    let costArr = Array.from(Array(count), (_,i) => costCalculater(i));
    let totSum = costArr.reduce(function(first, secound){
        return first+secound
    })

    return Math.sign(totSum-money) == -1?0:totSum-money
}