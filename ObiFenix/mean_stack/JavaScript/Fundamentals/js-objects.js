// ========================================================================
// Challenge #1: Write a function that accepts an array of student objects,
//               then print the name of all the students and their cohorts.
// ========================================================================
// Given:
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// Then:
console.log('\n\nStudents\n========');
function printAllStudents(students) {
    for (var id in students) {
        console.log('Name: ' + students[id].name + '  Cohort: ' + students[id].cohort)
    }
}   printAllStudents(students);

// ========================================================================
// Challenge #2: Write a function that accepts an users divided into manager
//               and employees as show below. Then print the information to
//               the console.
// ========================================================================
// Given:
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

// Then:
console.log('\nEmployees\n==========');
for(var id in users.employees){
  var first = users.employees[id].first_name;
  var last  = users.employees[id].last_name;
  var combo = (first + last);
  var counter = combo.length;
  console.log( ++id + ' '+ first.toUpperCase() + ', ' + last.toUpperCase() + ' - ' + counter );
}
console.log('\nManagers\n========');
for(var id in users.managers){
  var first = users.managers[id].first_name;
  var last  = users.managers[id].last_name;
  var combo = (first + last);
  var counter = combo.length;
  console.log( ++id +  ' - ' + first.toUpperCase() + ', ' + last.toUpperCase() + ' - ' + counter);
}



