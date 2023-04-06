## 부족한 금액 계산하기
[코딩테스트 연습>위클리 챌린지>부족한 금액 계산하기](https://school.programmers.co.kr/learn/courses/30/lessons/82612)
### 문제 설명
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

#### 제한사항
놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
***
```javascript
function solution(price, money, count) {

    const costCalculater = function(i){
        // 매번 탈때마다 가격 계산기
        // 1회차 일때는 가격*1
        // 2회차 일때는 가격*2
        // n회차 일대는 가격*n
        return price*(i+1)
    }

    // 이용 회차 만큼 비용을 가지고 있는 배열
    // Array(count) - 이용 회차 만큼 배열 생성
    let costArr = Array.from(Array(count), (_,i) => costCalculater(i))
    console.log(costArr) // 비용배열 [3*1, 3*2, 3*3, 3*4]

    // 총 비용의 합
    let totSum = costArr.reduce(function(first, secound){
        return first+secound
    })
    // 총 탑승 비용의 합에서 예산을 제한 금액이 음수이면
    // 즉, 예산이 충분해서 금액이 부족하지 않으면 0 을 리턴
    // 총 탑승 비용의 합에서 예산을 제한 금액이 양수이면 (총 탑승 비용이 더 많다)
    // 총 탑승 비용 - 예산을 리턴. 부족한 금액을 알 수 있다.
    return Math.sign(totSum-money) == -1?0:totSum-money;
}
// 요금 3인 놀이기구를 4번 타는 경우, 예산은 20
console.log(solution(3,20,4))
```