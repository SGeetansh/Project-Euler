#This problem can be reduced to be similar to the
#problem of finding number of ways in which a 40 digit
# binary number can be formed with equal number of 0's and 1's.
#(0's can be thought of as down and 1's can be thought of as right)

from scipy.special import comb
print(comb(40, 20))