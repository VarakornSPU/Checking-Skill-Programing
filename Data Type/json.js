// ข้อมูล JSON (String)
let jsonData = '{"name": "Tom", "age": 20, "grade": "A"}';

// 🔹 อ่านไฟล์ JSON -> แปลง JSON String เป็น Object
let student = JSON.parse(jsonData);
console.log("Parsed JSON Object:", student);

// เข้าถึงค่าใน Object
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);

// 🔹 เขียน JSON -> แปลง Object เป็น JSON String
student.age = 21;  // แก้ไขค่า
let updatedJsonData = JSON.stringify(student, null, 4);
console.log("Updated JSON String:", updatedJsonData);

//🔹 json.loads() ใน Python ≈ JSON.parse() ใน JavaScript
//🔹 json.dumps() ใน Python ≈ JSON.stringify() ใน JavaScript