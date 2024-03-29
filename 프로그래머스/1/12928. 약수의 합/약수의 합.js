function solution(n) {
	/*O(n)의 시간 복잡도를 가진다.*/
	var answer = 0;
	for(i=0; i<=n; i++){
		if(n%i === 0){
			answer = answer + i
		}
	}
	return answer;
}