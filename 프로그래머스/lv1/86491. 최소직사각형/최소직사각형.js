function solution(sizes) {
    var answer = 0;
    var longArr= new Array;     // 긴 면의 길이를 담는 배열
    var shortArr= new Array;    // 짧은 면의 길이를 담는 배열
    var lMax;   // 긴 면의 길이 중 가장 큰 값
    var sMax;   // 작은 면의 길이 중 가장 큰 값
    let wTemp;
    let hTemp;
    for(i=0; i<sizes.length; i++){
        wTemp = sizes[i][0];
        hTemp = sizes[i][1];
        if(wTemp > hTemp){ 
longArr.push(wTemp)         
shortArr.push(hTemp)         
}else{
longArr.push(hTemp)
shortArr.push(wTemp)
}
}

longArr.sort(function(a,b){
if(a>b){
return 1
}
if(a<b){
    return -1
}
            
            return 0})
shortArr.sort(function(a,b){
if(a>b){
return 1
}
if(a<b){
    return -1
}
            
            return 0})
let endIdx = sizes.length-1
    
lMax =longArr[endIdx]
sMax = shortArr[endIdx]
   
answer = lMax*sMax
    return answer
}