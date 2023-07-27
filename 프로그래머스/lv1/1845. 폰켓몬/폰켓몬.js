function solution(nums) {
    var answer = 0;
    var monTypes = new Set(nums) //전체 폰켓몬의 타입의 배열
    var monNums = nums.length/2 // 가질 수 있는 폰켓몬 수
    if(monNums >= monTypes.size){
        console.log('가질수있는게 전체 타입 종류 보다 크다. 따라서 전체 종류수가 최대 가질수 잇는 증류수')
        answer = monTypes.size //전체 폰켓몬의 타입의 갯수
    }else{
        console.log('가질수있는게 전체 타입 종류 보다 적다. 따라서 가질 수 있는 숫자가 내가 선택할수 있는 폰켄못 최대 종류수와 동일')
        answer = monNums
    }    

    console.log("현재 폰켓몬들의 타입 종류 : ", monTypes.size)
    console.log("현재 폰켓몬 수  : ", nums.length)
    console.log("내가 가질 수 있는 폰켓몬 수  : ", nums.length/2)
    return answer;
}