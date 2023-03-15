const students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];


let maleStudents = students.filter(student => student.gender === 'male');
let maleTotalPoints = maleStudents.reduce((total, student) => total + student.point, 0);
let malePoint = maleTotalPoints / maleStudents.length;
console.log(`Điểm trung bình của các bạn nam là: ${malePoint}`);


let femaleStudents = students.filter(student => student.gender === 'female');
let femaleTotalPoints = femaleStudents.reduce((total, student) => total + student.point, 0);
let femalePoint = femaleTotalPoints / femaleStudents.length;
console.log(`Điểm trung bình của các bạn nữ là: ${femalePoint}`);
