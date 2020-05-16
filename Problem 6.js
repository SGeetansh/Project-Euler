function SumOfSquares(n){
	return n*(n+1)*(2*n+1)/6
} 

function SquareOfSum(n){
	return Math.pow(n*(n+1)/2, 2)
}

console.log(SumOfSquares(100) - SquareOfSum(100))