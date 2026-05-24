expression = input("Enter calculation:")

if "+" in expression:
  expression = expression.split("+")
  print(float(expression[0]) + float(expression[1]))

elif "-" in expression:
  expression = expression.split("-")
  print(float(expression[0]) - float(expression[1]))

elif "*" in expression:
  expression = expression.split("*")
  print(float(expression[0]) * float(expression[1]))

elif "/" in expression:
  expression = expression.split("/")
  print(float(expression[0]) / float(expression[1]))

else:
  print("please recheck expression")
  
  
