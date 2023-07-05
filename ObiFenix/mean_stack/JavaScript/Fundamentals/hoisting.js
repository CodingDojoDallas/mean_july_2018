// ===================
// JavaScript Hoisting
// ===================

// =============================================================================
// Objective 1:
console.log('\nObjective #1\n============\n');
var hello = "world";
console.log(hello);
// =============================================================================
// Objective 2:
console.log('\nObjective #2\n============\n');
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}	test();
// =============================================================================
// Objective 3:
console.log('\nObjective #3\n============\n');
function print(){
	var brendan = 'only okay';
	console.log(brendan);
	brendan = 'super cool';
	console.log(brendan);
}	print();
// =============================================================================
// Objective 4:
console.log('\nObjective #4\n============\n');
function eat(){
	var food = 'Chicken';
	console.log(food);
	food = 'Half-Chicken';
	console.log(food);
	food = 'Gone';
	console.log(food);
}	eat();
// =============================================================================
// Objective 5:
console.log('\nObjective #5\n============\n');
var mean = function() {
	var food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
};	mean();
// =============================================================================
// Objective 6:
console.log('\nObjective #6\n============\n');
function rewind() {
	var genre = "disco";
	console.log(genre);
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}	rewind();

// =============================================================================
// Objective 7:
console.log('\nObjective #7\n============\n');
function learn() {
	var dojo = "seattle";
	console.log(dojo);
	dojo = "san jose";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}	learn();

// =============================================================================
// Objective 8:
console.log('\nObjective #8\n============\n');
function makeDojo(name, students){
	dojo = {};
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) 		{ dojo.hiring = true; }
	else if(dojo.students <= 0) 	{ dojo = "closed for now"; }
	return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
