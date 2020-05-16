primes =  [2]
counter = 3

while(primes.length<=3){
	primeCheck(counter)
}
console.log(primes)

function primeCheck(n){
	let flag = 1
	for (let prime in primes){
		flag = 0
		if (n%prime == 0){
			flag+=2
		}
	}
	if (flag == 1){
		primes.push(n)
		counter++
	}
}