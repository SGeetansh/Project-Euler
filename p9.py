import math 

for i in range(1000):
	for j in range(1000):
		c2 = i*i + j*j
		c = math.sqrt(c2)
		if (i+j+c==1000):
			z =i*j*c
			print(z)

