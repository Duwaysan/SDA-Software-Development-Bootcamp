# -----------------------------------------------------------------
# Challenge: 11_student_grade_report
# Prompt:
# Write a function called `student_grade_report` that takes a dictionary where 
# the keys are student names (strings) and the values are lists of their test scores (integers).  
#
# The function should return a **formatted report string** that includes:
# 1. Each student's name.
# 2. Their average score (rounded to 2 decimal places).
# 3. Their highest and lowest score.
# 4. Their letter grade based on the average:
#    - A: 90-100  
#    - B: 80-89  
#    - C: 70-79  
#    - D: 60-69  
#    - F: below 60
#
# The report for each student should be on a new line in this format:
# "_Name_: Average = _avg_, High = _high_, Low = _low_, Grade = _letter_"
#
# Example input:
# students = {
#     "Alice": [95, 85, 92],
#     "Bob": [70, 80, 65],
#     "Charlie": [50, 60, 55]
# }
#
# Example function call:
# student_grade_report(students)
#
# Expected output:
# "Alice: Average = 90.67, High = 95, Low = 85, Grade = A
# Bob: Average = 71.67, High = 80, Low = 65, Grade = C
# Charlie: Average = 55.0, High = 60, Low = 50, Grade = F"
# -----------------------------------------------------------------

def student_grade_report(students):
    my_strings = []
    #tried to do it in one line but kinda hard cuz the if statements # [f"{name}: Average = {sum(scores)/len(scores)}, High = {max(scores)}, Low = {min(scores)}, Grade = {}" for name, scores in students:]
    # if students:
    avg = 0.0
    highest = None
    lowest = None
    for name, scores in students.items():
        if len(scores):
            avg = round(sum(scores)/len(scores),2)
            highest = max(scores)
            lowest = min(scores)
        grade = 'A' if avg >= 90 else ('B' if avg >= 80 else ('C' if avg >= 70 else ('D' if avg >= 60 else 'F'))) # I like doing one lines ×_×
        my_strings.append(f"{name}: Average = {avg}, High = {highest}, Low = {lowest}, Grade = {grade}")

    return "\n".join(my_strings)
