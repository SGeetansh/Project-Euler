n = 10001
counter = 0 
prime = 0
i = 1

def checkPrime(n: int):
    if (n == 1): return False
    i = 2
    while (i*i <= n):
        if (n%i == 0):
            return False
        else: i+=1
    return True
    
while (counter != n):
    if checkPrime(i):
        prime = i
        counter+=1
        i+=1
    else: i+=1

print(prime)