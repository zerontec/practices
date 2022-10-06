def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)    




n = 20

print("factorial de", n, 'es',factorial(n))