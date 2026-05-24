import random

n = int(input("Guess number from range 0 to ... "))

num = random.randint(0,n)
print("OK, number is set, start GUESSING:")

while True:
    guess = int(input())
    if guess>n or guess<0:
        print("guess out of bounds")
        continue
    if guess<num:
        print("too low")
    elif guess>num:
        print("too high")
    else:
        print("correct!")
        break
