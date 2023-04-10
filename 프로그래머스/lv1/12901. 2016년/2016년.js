function solution(a, b) {
    let dayOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let month = a
    let day = b
    let curiousDate = new Date('2016-'+month+'-'+day) // Date객체, getDay() 메서드 사용시 0(SUN)~6(SAT) 리턴 

    return dayOfWeek[curiousDate.getDay()];
}