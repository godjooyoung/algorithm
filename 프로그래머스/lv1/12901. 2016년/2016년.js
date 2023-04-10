function solution(a, b) {
    let dayOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let month = a
    let day = b
    let curiousDate = new Date('2016-'+month+'-'+day)

    return dayOfWeek[curiousDate.getDay()];
}