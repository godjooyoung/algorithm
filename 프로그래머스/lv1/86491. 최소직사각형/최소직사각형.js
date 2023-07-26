function solution(sizes) {
	let longestLengths = []; 	// 변수명 수정. 긴 면의 길이를 담는 배열
	let shortestLengths = [];	// 변수명 수정. 짧은 면의 길이를 담는 배열
  
  for (let i = 0; i < sizes.length; i++) {
    let [w, h] = sizes[i];		// 구조분해할당 사용
    if (w > h) {				
      longestLengths.push(w);
      shortestLengths.push(h);
    } else {
      longestLengths.push(h);
      shortestLengths.push(w);
    }
  }

  longestLengths.sort((a, b) => b - a);	// 비교함수 추가. 화살표 함수. a,b를 매개벼수로 받아서 차를 리턴한다.
  shortestLengths.sort((a, b) => b - a);
  // 자바스크립트 sort 메서드의 비교함수는 리턴값이 음수이면 첫번째 매개변수가 두번째 매개변수보다 작다고 판단. 
  // 만약 리턴값이 양수이면 첫번째 매개변수가 두번째 매개변수보다 크다고 판단.

  return longestLengths[0] * shortestLengths[0];
}