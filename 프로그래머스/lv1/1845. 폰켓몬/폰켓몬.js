function solution(nums) {
    var answer = 0;
    var monTypes = new Set(nums) //전체 폰켓몬의 타입의 배열
    var monNums = nums.length/2 // 가질 수 있는 폰켓몬 수
    if(monNums >= monTypes.size){
        // 가질 수 있는 폰켓몬 수가 현재 홍박사 연구실의 폰켓몬 타입 종류 보다 많다.
        // 따라서 홍박사 연구실에 있는 폰켓몬 종류수 전체가 가질 수 있는
        // 폰켓몬 수가 된다.
        answer = monTypes.size //전체 폰켓몬의 타입의 갯수
    }else{
        // 가질 수 있는 폰켓몬 수가 현재 홍박사 연구실의 폰켓몬 타입 종류보다 적다.
        // 따라서 가질 수 있는 숫자가 내가 선택할수 있는 폰켄못 최대 종류수와 동일
        answer = monNums
    }    
    return answer;
}