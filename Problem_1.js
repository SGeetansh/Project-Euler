let n = 1000, s = 0
for (i = 1; i<n; i++){
	if (i%3 == 0 || i%5 == 0){
		s = s+i
	}
}
console.log(s)