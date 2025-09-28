# -----------------------------------------------------------------
# Challenge: 20_compress_string
# Prompt:
# Write a function called `compress_string` that takes a string as input
# and returns a "compressed" version of the string where consecutive
# repeated characters are replaced by the character followed by the count.
#
# Only compress if the count is greater than 1. Single characters remain unchanged.
#
# Examples:
# compress_string("aaabbc")  -> "a3b2c"
# compress_string("abcd")    -> "abcd"
# compress_string("wwwwaaadexxxxx") -> "w4a3dex5"
#
# Notes:
# - The input string may contain letters, digits, and symbols.
# - Case-sensitive: 'a' and 'A' are different characters.
# - Do not use any external libraries.
# -----------------------------------------------------------------

def compress_string(s):
    if s == "":
        return ""
    i = 0
    result = ""
    while i < len(s):
        count = 1
        j = i + 1
        while j < len(s) and s[j] == s[i]:
            count = count + 1
            j = j + 1
        if count > 1:
            result = result + s[i] + str(count)
        else:
            result = result + s[i]
        i = j
    return result
