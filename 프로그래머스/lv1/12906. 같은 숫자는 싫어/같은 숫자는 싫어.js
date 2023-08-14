// function solution(arr){
//     // 스택으로 구현
//     let answer = [];
//     arr.map((x)=>{
//     // pop을 사용하면 마지막 값만 가져오지만 삭제되므로
//     // 전체 길이에서 -1한 인덱스 값으로 저장된 값을 읽어온다.
//         if(answer[answer.length-1] !== x){
//             answer.push(x)
//         }
//     })
//     return answer;
// }


function solution(arr) {
  const set = new Set(arr);  // 중복을 제거한 셋(Set) 생성
  return [...set];  // 셋(Set)을 다시 배열로 변환하여 반환
}