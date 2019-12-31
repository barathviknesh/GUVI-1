n = int(input("Enter number "))


if n>0 :

    i = 1

    sm = 0


    while i <= n :

        if i % 2 != 0 :

            sm += i

        i += 1

    print(sm)