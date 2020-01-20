import math

z = 0
n = 2000000

def checkPrime(n):
    if n < 2: return "Neither composite nor prime"
    for j in range(2, int(math.sqrt(n)+1)):
        if (n%j == 0):
            return 0
    return 1

for i in range(2, n):
    if checkPrime(i):
        z += i
print(z)
