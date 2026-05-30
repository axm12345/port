todo = [] 
while True: 
    print("\n====TO DO LIST====") 
    print("1. Add task\n2. Remove task\n3. View list\n4. Exit\n") 
    n = input("Select option number: ") 
    if not n.isdigit(): 
        print("Please enter a number from the options above") 
    else:
        n = int(n)
        if n != 4: 
            if n == 1: 
                todo.append(input("Enter task: ")) 
            elif n ==2: 
                m = int(input("Enter task number: ")) 
                del todo[m-1] 
            elif n ==3: 
                for i in todo: 
                    print(f"{todo.index(i)+1}.{i}") 
        else: 
            print("Goodbye!\n") 
            break
