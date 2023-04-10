function solution(n) {
    var answer = 0;
    n=n+""
    n = [...n]
    n.sort(function(x,y){
        return y-x
    })
    n = Number(n.join(''))
    return n;
}