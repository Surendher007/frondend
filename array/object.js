
let studentMarks = {
    tamil : 99,
    english : 69,
    maths :89,
    scince : 99,
    social :89,
    result : 'pass'
};
console.log(studentMarks);
console.log(studentMarks.length);
console.log(studentMarks.key);
console.log(studentMarks.maths)
console.log(studentMarks["social"])

let favouriteSubject = "scince" ;
console.log(studentMarks[favouriteSubject])
console.log(studentMarks.favouriteSubject)
console.log(studentMarks.result)
console.log(studentMarks.key)
console.log(studentMarks.values)
console.log(studentMarks["tamil"])
console.log(studentMarks.english)
console.log(studentMarks[favouriteSubject])
const keys = Object.keys(studentMarks)
const values = Object.values(studentMarks)
console.log(keys)
console.log(values)