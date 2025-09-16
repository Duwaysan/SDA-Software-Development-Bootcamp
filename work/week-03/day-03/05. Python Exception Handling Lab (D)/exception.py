class FormulaError (Exception):
    """Custom exception for formula errors"""
    pass

# class ValueError (Exception):
#     """Custom exception for value errors"""
#     pass

parts = input('Enter the equation seperated by space (1 + 1): ').split()
if len(parts) != 3:
    raise FormulaError("Input must have exactly 3 elements (seperated by ' ').")

num1_str, operator, num2_str = parts # ensuring operator is the second always no need to do parts[1]
try:
    num1 = float(num1_str)
    num2 = float(num2_str)
except ValueError:
    raise FormulaError("The first and third input must be numbers.")
if operator not in ("+", "-"):
    raise FormulaError("Operator must be + or -")

total = 0
if operator == "+":
    total = num1 + num2
else:  # operator == "-"
    total = num1 - num2
print(total)