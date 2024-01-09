// 1

function pickPropArray(arr, key) {
	return arr.map(elem => elem[key]).filter(elem => elem !== undefined);
}

const students = [
	{ name: 'Павел', age: 20 },
	{ name: 'Иван', age: 20 },
	{ name: 'Эдем', age: 20 },
	{ name: 'Денис', age: 20 },
	{ name: 'Виктория', age: 20 },
	{ age: 40 },
]
 
const result = pickPropArray(students, 'name')
 
console.log(result)


// 2

function createCounter() {
	let count = 0;
  
	return function () {
		console.log(++count);
	}
}
  
const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2 


// 3
function spinWords(str) {
	return str
		.split(" ")
		.map(word => word.length >= 5 ? word.split("").reverse().join("") : word )
		.join(" ");
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test


// 4
function indicesOfSummands(numsArr, target) {
	for (let i = 0; i<numsArr.length; i++) {
		for (let j = i+1; j<numsArr.length; j++) {
			if (numsArr[i]+numsArr[j] == target) return [i,j];
		}
	}
	return null;
}

const nums = [2,7,11,15];
console.log(indicesOfSummands(nums, 19));