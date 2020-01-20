let multipliers = [2], result = 2, n = 20;

for(i=2; i<=n; i++){
	let m = i
	if (result%i !== 0){
		for (let multiplier of multipliers){
			if (m%multiplier == 0) {
				m /= multiplier
			}}
		multipliers.push(m)
		result *= m
	}
}
console.log(result)