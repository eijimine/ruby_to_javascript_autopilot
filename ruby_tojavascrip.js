var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples.');

var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'
};

console.log(words);

var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' is less than 10.');
}

for (var index = 1; index <= 10; index++) {
  console.log('Do the same thing over and over.');
}

var base = 5;
for (var index = 1; index <= 20; index++) {
  console.log(index + base);
}

var total = 0
for (var index = 1; index <= 100; index++) {
 total += index;
}
console.log(total);

for (var height = 3; height <= 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
} else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

var container = ['purse', 'wallet', 'backpack'];
for (var i = 0; i < container.length; i++){
  var item = container[i];
  console.log(item);
}

function word() {
  console.log('Hello world!');
}
word()

function add(num1, num2) {
  return num1 + num2;
}
var amount = add(5, 7);
console.log(amount);
