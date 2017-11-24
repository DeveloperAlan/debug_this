var studentsInTheClass = ["Shirley", "Lauren"];
console.log(studentsInTheClass);

studentsInTheClass.push("Hazel");
studentsInTheClass.pop();
studentsInTheClass.push("Hazel");

studentsInTheClass[0] = "Alan";
studentsInTheClass[2] = "Shirley";
studentsInTheClass[3] = "Shirley";
studentsInTheClass[10] = "Shirley";

for (var i = 0; i < studentsInTheClass.length; i++) {
  console.log(studentsInTheClass[i]);
}

console.log(studentsInTheClass);