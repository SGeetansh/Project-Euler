n = 1
multiples = set()
i = 1
sum = 1
while(len(multiples) <= 500):
    n+=1
    sum = (n*(n+1))/2
    i = 1
    multiples.clear()
    while (i*i <= sum):
        if (sum%i == 0):
            multiples.add(i)
            multiples.add(sum/i)
        i+=1


