const students = [
      {id:1, name : 'rohim', marks : 56},
      {id:2, name : 'frohim', marks : 72},
      {id:3, name : 'krohim', marks : 79},
      {id:4, name : 'brohim', marks : 65},
]

const name = students.map(student => student.marks);
const goodStudents = students.filter(student => student.marks >60);
const goodStudent = students.find(student => student.marks >70);
console.log(goodStudent);