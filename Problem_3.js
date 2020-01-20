// let n = 600851475143, array = [], flag = 0

// function primeCheck(i){
// 	for (j=2; j<=i/2; j++){
// 		if (i%j == 0){
// 			flag = 1
// 			break;
// 		}
// 	}
// 	if (flag == 1) return null 
// 	else array.push(i)
// }

// function primeFactor(n){
// 	for (i=2; i<=n/2; i++){
// 		if (n%i == 0){
// 			primeCheck(i)
// 		}
// 	}
// 	console.log(array)
// }

// primeFactor(n)

let num = 25327, newNum = num, largest = 0;
let counter = 2;

while (counter*counter <= newNum){
	if (newNum%counter == 0){
		newNum = newNum/counter
		largest = counter
	} 
	else {
		counter++
	}
}
if (newNum > largest){
	largest = newNum
}
console.log(largest)