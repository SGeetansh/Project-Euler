let c, m = 0, s = ""

for(i = 999; i>=100; i--){
	for (j = 999; j>=100; j--){
		c = i*j
		s = c.toString()
		if(palandrome(s)) break
	}
if (c>m) m=c
} console.log(m)

function palandrome(n){
	if (reverse(n) == n) return true
	else return false
}

function reverse(n){
	if (n === "") return ""
	else return reverse(n.substr(1)) + n.charAt(0)
}