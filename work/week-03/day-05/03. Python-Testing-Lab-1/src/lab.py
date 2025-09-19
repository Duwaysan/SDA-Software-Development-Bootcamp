# 1. Vowel Counter
def count_vowels(s):
    count = 0
    for char in s:
        if char in ['a', 'e', 'i', 'o','u']:
            count += 1
    return f"Number of vowels: {count}"

# 2. String Occurrences of 'bob'
def count_bob_occurrences(s):
    count = 0
    for i in range(len(s)-2): #-2 to avoid index error
        if 'bob' in s[i:i+3]:
            count += 1
    return f"Number of times bob occurs is: {count}."

# 3. String Reversal
def reverse_string(s):
    return "Output: "+s[::-1]
    

# 4. Letter Case Counter
def count_case(s):
    lower = 0
    upper = 0
    for char in s:
        if char == " " or char == char.lower():
            lower += 1
        else:
            if char == char.upper():
                upper += 1
    return f"Output: UPPERCASE: {upper}, LOWERCASE: {lower}"

# 5. Alphabetical Sorting of Words
def sort_words(s):
    list_of_words = s.split(", ")
    list_of_words.sort()
    return ", ".join(list_of_words)

# 6. Palindrome Checker
def is_palindrome(s):
    import math #is it same from both sides ?
    return s == s[::-1] 

count_bob_occurrences('azcbobobegghakl')
count_vowels('azcbobobegghakl')
reverse_string('Programming in Python')
count_case("Hello World")
sort_words('without, hello, bag, world')