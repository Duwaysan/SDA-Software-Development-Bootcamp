# -----------------------------------------------------------------
# Challenge: 13_maze_escape
# Prompt:
# You are given a 2D list (`maze`) representing a rectangular maze, where:
# - 'S' represents the starting point,
# - 'E' represents the exit,
# - '0' represents an open path,
# - '1' represents a wall.
#
# Write a function called `maze_escape` that determines whether there is a path from 'S' to 'E'.  
# You can move up, down, left, or right, but cannot move diagonally.  
#
# The function should return True if a path exists, or False otherwise.
#
# Example input:
# maze = [
#     ['S', '0', '1', '0'],
#     ['1', '0', '1', '0'],
#     ['1', '0', '0', '0'],
#     ['1', '1', '1', 'E']
# ]
#
# Example function call:
# maze_escape(maze)  # returns True
#
# Constraints:
# - You may assume there is exactly one 'S' and one 'E' in the maze.
# - The maze may be any rectangular size.
# -----------------------------------------------------------------

def maze_escape(maze):
    if not maze or not maze[0]:
        return False
    rows, cols = len(maze), len(maze[0])
    start = None
    for r in range(rows):
        for c in range(cols):
            if maze[r][c] == 'S':
                start = (r, c)
                break
        if start: break

    steps = [start]          
    visited = {start}
    directions = [(-1,0),(1,0),(0,-1),(0,1)]

    while steps:
        r, c = steps.pop()  #using DFS
        if maze[r][c] == 'E':
            return True
        for dr, dc in directions:
            new_row, new_column = r+dr, c+dc
            if 0 <= new_row < rows and 0 <= new_column < cols:
                if maze[new_row][new_column] != '1' and (new_row, new_column) not in visited:
                    visited.add((new_row, new_column))
                    steps.append((new_row, new_column))
    return False
