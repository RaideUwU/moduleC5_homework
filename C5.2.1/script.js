const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// console.log(xmlString);

let parser = new DOMParser();
let xml = parser.parseFromString(xmlString, "text/xml");
let xmlStudents = xml.querySelectorAll("student");

let students = [];

for(let i = 0; i < xmlStudents.length; i++){
  let student = xmlStudents[i];
  
  let studentName = student.querySelector("name");
  let lang = studentName.getAttribute("lang");
  let firstName = studentName.querySelector("first").textContent;
  let secondName = studentName.querySelector("second").textContent;
  let name = firstName + " " + secondName;
  let age = Number(student.querySelector("age").textContent);
  let prof = student.querySelector("prof").textContent;
  
  students[i] = {
    name: name,
    age: age,
    prof: prof,
    lang: lang
  };
}

console.log(students);