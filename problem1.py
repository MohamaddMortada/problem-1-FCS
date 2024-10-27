def padding(S,target):
     pad = ' ' * (target)
     return pad + S
r=int(input("enter number of rows"))
i=0
while i<r:
    palin='*' * ((2*i)+1)
    print(padding(palin,r-i))
    i+=1
i=r-2
while i>=0:
    palin='*' * ((2*i)+1)
    print(padding(palin,r-i))
    i-=1