
# color = input('Enter "green", "yellow", "red": ').lower()
# print(f'The user entered {color}')

# # If green is entered, print the message Go!
# # If yellow is entered, print the message Slow Down!
# # If red is entered, print the message Stop!
# # If anything else is entered, print the message Bogus!

# if color == 'green':
#     print('Go!')
# elif color == 'yellow':
#     print('Slow Down!')
# elif color == 'red':
#     print('Stop!')
# else :
#     print('Bogus!')


    # - EXERCISE
    #     • lookup the modulus operator
    #     • write the code that:
    #         •• prints the numbers from 1 to 100. 
    #         •• For multiples of 3, print "Fizz"
    #         •• For multiples of 5, print "Buzz". 
    #         •• For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for i in range(100):
    if i % 3 == 0 and i % 5 == 0 :
        print('FizzBuzz')
    elif i % 3 == 0 :
        print('Fizz')
    elif i % 5 == 0 :
        print('Buzz')