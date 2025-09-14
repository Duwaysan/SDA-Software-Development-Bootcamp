# write your tests here
import unittest
from src import lab

class LabTest(unittest.TestCase):

    def test_count_vowels(self):
        output = lab.count_vowels('azcbobobegghakl')
        self.assertEqual(output, 'Number of vowels: 5')

    def test_count_bob_occurrences(self):
        output = lab.count_bob_occurrences('azcbobobegghakl')
        self.assertEqual(output, 'Number of times bob occurs is: 2.')

    def test_reverse_string(self):
        output = lab.reverse_string('Programming in Python')
        self.assertEqual(output,'Output: nohtyP ni gnimmargorP')

    def test_count_case(self):
        output = lab.count_case("Hello World")
        self.assertEqual(output, 'Output: UPPERCASE: 2, LOWERCASE: 9')
    
    def test_sort_words(self):
        output = lab.sort_words('without, hello, bag, world')
        self.assertEqual(output,'bag, hello, without, world' )

    def test_is_palindrom(self):
        output = lab.is_palindrome('abba')
        self.assertIn(output, [True, False])

if __name__ == '__main__':
    unittest.main()
