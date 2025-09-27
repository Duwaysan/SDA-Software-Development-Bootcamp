# Write code inside the functions
# You will have to figure out what parameters to include
# All functions must use recursion


def length_of_string(string, length=0):
    if (string == ""):
        return length
    length += 1
    string = string[1:]
    return length_of_string(string, length)
# If the length is 0 (base case), return len (0).

def sum_of_array(arr, sum=0, index=0):
    if index == len(arr):
        return sum
    sum += arr[index]
    return sum_of_array(arr,sum,index+1)
# This function returns the sum of all of the numbers in a given array.

print(sum_of_array([1,2,3]))


def find_max(arr, largest = -1, index=0):
    if index == len(arr):
        return largest
    if arr[index]> largest:
        largest = arr[index]
    return find_max(arr,largest,index+1)
    
# // This function returns the largest number in a given array.
print(find_max([30,2,3]))


def factorial(fact = 0,result = 1):
    if fact == 1:
        return result 
    if fact == 0:
        return 0
    result *= fact
    return factorial(fact-1,result)
# This function returns the factorial of a given number.
print(factorial(5))

def fibonacci(num):
    if num <= 1:
        return  num
    
    return fibonacci(num-1) + fibonacci(num-2)

# This function returns the Nth number in the fibonacci sequence.
# https://en.wikipedia.org/wiki/Fibonacci_number
print(fibonacci(5))


def coin_flips(times):
    pass
# This function returns an array of all possible outcomes from flipping a coin N times.
# Input type: Integer


def letter_combinations():
    pass
# This function returns an array of all combinations of the given letters
# Input type: Array of single characters


def flatten():
    pass
# This function should iterate through an array and flatten/spread out the contents of an array into a single layer without any repetitions (Can you do it without a loop?)
# Input type: Nested Arrays.