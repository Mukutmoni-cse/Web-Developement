from tkinter import *

root = Tk()

def mycom():
    print(f"Username = {uservar.get()}")
    print(f"Password = {passvar.get()}")
    print(f"Checkbox = {boxvar.get()}")
    print("\n Submitting form.....")
    with open("record.txt", "a") as f:
        f.write(f"Username = {uservar.get()}, Password = {passvar.get()}, Checkbox = {boxvar.get()}\n")

root.geometry("344x433")
username = Label(root, text = "Username : ")
password = Label(root, text = "Password : ")
username.grid(row = 0, column = 0)
password.grid(row = 1, column = 0)

# Variable classes in tkinter
# BooleanVar, DoubleVar, IntVar, StringVar

uservar = StringVar()
passvar = StringVar()
boxvar = IntVar()
userentry = Entry(root, textvariable = uservar)
passentry = Entry(root, textvariable = passvar)
userentry.grid(row = 0, column = 1)
passentry.grid(row = 1, column = 1)

box = Checkbutton(root, text = "I want to Submit", variable = boxvar)
box.grid(row = 2)

but = Button(root, text = "Submit", command = mycom).grid()

root.mainloop()