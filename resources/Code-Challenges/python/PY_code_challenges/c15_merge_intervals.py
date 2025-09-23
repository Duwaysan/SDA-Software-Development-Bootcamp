# -----------------------------------------------------------------
# Challenge: 15_merge_intervals
# Prompt:
# You are given a list of intervals represented as pairs [start, end].  
# Write a function called `merge_intervals` that merges all overlapping intervals 
# and returns a new list of non-overlapping intervals sorted by start time.
#
# Example input:
# intervals = [[1,3],[2,6],[8,10],[15,18]]
#
# Example function call:
# merge_intervals(intervals)
#
# Expected output:
# [[1,6],[8,10],[15,18]]
#
# Another example:
# intervals = [[1,4],[4,5]]
# merge_intervals(intervals)
# Expected output:
# [[1,5]]
#
# Constraints:
# - Intervals are represented as lists of two integers [start, end].
# - Intervals may be in any order.
# - Start is always less than or equal to end.
# -----------------------------------------------------------------

def merge_intervals(intervals):
    
    if not len(intervals):
        return []
    intervals.sort()
    start = intervals[0][0]
    end = intervals[0][1]
    new_intervals = []
    for i in range(1,len(intervals)):
        # if end >= intervals[i][0]:
        new_start = intervals[i][0]
        new_end = intervals[i][1]
        if new_start<= end: 
            end = max(end,intervals[i][1])
        else:
            new_intervals.append([start,end])
            start = new_start
            end = new_end
    new_intervals.append([start,end])
    return new_intervals

