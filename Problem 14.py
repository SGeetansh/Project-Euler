countMax = 0
number = 0
temp = 0
for i in range(2, 1000000):
    count = 1
    temp = i
    while(i != 1):
        if (i%2 == 0):
            i/=2
            count+=1
        else:
            i = 3*i+1
            count+=1
    if (count>countMax): 
        number = temp
        countMax = count

print(countMax)
print(number)