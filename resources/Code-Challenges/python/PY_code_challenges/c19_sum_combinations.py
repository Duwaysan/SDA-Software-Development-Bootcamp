# -----------------------------------------------------------------
# Challenge: 19_sum_combinations
# Prompt:
# Write a function called `sum_combinations` that accepts two arguments:
# 1) A list of positive integers `numbers`
# 2) A target sum `target`
#
# The function should return a list of all unique combinations of numbers
# from the list that sum up to the target. Each number in the list may be
# used **once per combination**.
#
# Notes:
# - The order of numbers in a combination does not matter.
# - The order of combinations in the output list does not matter.
# - No duplicate combinations should be returned.
#
# Example function calls:
# sum_combinations([2,3,6,7], 7) -> [[7]]
# sum_combinations([2,3,5], 8) -> [[3,5]]  # Each number used once
# sum_combinations([2,4,6], 6) -> [[6], [2,4]]
#
# Hints:
# - Consider using recursion/backtracking to explore combinations.
# - Make sure to check the current sum at each step and prune paths that exceed the target.
# -----------------------------------------------------------------

def sum_combinations(numbers, target, start=0, path=None):
        if path is None:
            path = []
        results = []

        if target == 0:
            return [path[:]]
        if target < 0:
            return []

        prev = None
        for i in range(start, len(numbers)):
            if prev is not None and numbers[i] == prev:
                continue
            if numbers[i] > target:
                break
                #here looping on recursion return
            for combo in sum_combinations(numbers, target - numbers[i], i + 1, path + [numbers[i]]):
                results.append(combo)

            prev = numbers[i]

        return results
