## 수박수박수박수박수박수?
[코딩테스트 연습>연습문제>수박수박수박수박수박수?](https://school.programmers.co.kr/learn/courses/30/lessons/12922)
### 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

#### 제한사항
n은 길이 10,000이하인 자연수입니다.
***
```javascript

function solution(n) {
    let cnt = Math.floor(n/2)   // 반복되어야 하는 횟수
    let str ='수박'.repeat(cnt)  // 반복
    if(n%2 !== 0){
        // 홀수라면 '수' 가 한번더 붙어야한다.
        // 길이 4 이면 수박수박
        // 길이 5 이면 수박수박수
        str = '수박'.repeat(cnt) +'수'
    }
    return str;
}
console.log(solution(13)) // 수박수박수박수박수박수박수

```