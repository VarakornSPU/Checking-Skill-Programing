// List (Array) - การเพิ่ม, ลบ, แก้ไขข้อมูล
let students = ["Alice", "Bob", "Charlie"];

// เพิ่มข้อมูล
students.push("David");
console.log("After push:", students);

// ลบข้อมูล
students.splice(students.indexOf("Bob"), 1);
console.log("After remove:", students);

// แก้ไขข้อมูล
students[1] = "Eve";
console.log("After update:", students);

// Dictionary (Object) - เก็บข้อมูลนักเรียน
let studentInfo = {
    name: "Tom",
    age: 20,
    grade: "A"
};

// เพิ่มข้อมูลใหม่
studentInfo.school = "XYZ High School";
console.log("After adding new key:", studentInfo);

// แก้ไขข้อมูล
studentInfo.grade = "A+";
console.log("After updating grade:", studentInfo);

// ลบข้อมูล
delete studentInfo.age;
console.log("After deleting age:", studentInfo);

// 1. Tuple (ใน JavaScript ใช้ Array แทน เพราะไม่มี Tuple โดยตรง)
const tupleExample = Object.freeze(["Alice", 25, "Developer"]);
console.log("Tuple:", tupleExample);

// ลองเข้าถึงค่าใน Tuple
console.log("Tuple Index 1:", tupleExample[1]);


//Tuple (Array ที่ไม่สามารถแก้ไขได้)

//ใน JavaScript ไม่มี Tuple โดยตรงเหมือน Python
//ใช้ Object.freeze([...]) เพื่อป้องกันการเปลี่ยนแปลงค่าในอาร์เรย์
//สามารถเข้าถึงค่าด้วย index เช่น tupleExample[1]

//Set (กำจัดค่าที่ซ้ำกัน)

//new Set(array) ใช้สร้าง Set และกำจัดค่าที่ซ้ำกันในอาร์เรย์
//ใช้ .add(value) เพื่อเพิ่มค่าใหม่
//ใช้ .delete(value) เพื่อลบค่าออกจาก Set
//ใช้ .has(value) เพื่อตรวจสอบว่ามีค่าหรือไม่
//ใช้ [...set] เพื่อแปลง Set กลับเป็น Array

// 2. Set - กำจัดค่าที่ซ้ำกัน
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log("Unique Numbers:", [...uniqueNumbers]);

// เพิ่มค่าลงใน Set
uniqueNumbers.add(6);
console.log("After Adding 6:", [...uniqueNumbers]);

// ลบค่าจาก Set
uniqueNumbers.delete(3);
console.log("After Removing 3:", [...uniqueNumbers]);

// ตรวจสอบว่ามีค่าอยู่ใน Set หรือไม่
console.log("Has 2?", uniqueNumbers.has(2));
console.log("Has 10?", uniqueNumbers.has(10));
