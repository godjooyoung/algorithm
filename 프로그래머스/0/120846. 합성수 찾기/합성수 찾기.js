function solution(n) {
	let answer = 0
		// 짝수 - 최소 합성수가 4 이므로 주어진 n이 4보다 작으면 n이하의 자연수 중에서 합성수는 없으므로 합성수의 개수는 0
		// 홀수 - 최소 합성수가 9 
		if((n%2 === 0 && n<4) || (n%2 !== 0 && n<9)){
			answer = 0
		}else{
			for(i=4; i<=n; i++){
				let cnt = 1 //자기자신 포함 
				for(j=0; j<=i/2; j++){
					// 약수는 원래 수의 나누기 2 보다 클수가 없다.
					if(i%j === 0){
						cnt ++
					}
				}
				if(cnt >= 3) {
					answer ++
				} 
			}
		}
	return answer;
}