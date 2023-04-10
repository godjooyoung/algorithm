function solution(seoul) {
    let kimsPlace;
    seoul.map(function(x,i){
        if(x==='Kim'){
            kimsPlace = i
        }
    })
    var answer = '김서방은 '+kimsPlace+"에 있다";
    return answer;
}