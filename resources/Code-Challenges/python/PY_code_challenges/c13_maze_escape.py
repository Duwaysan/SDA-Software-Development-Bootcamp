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
    rows, cols = len(maze), len(maze[0])

    # find the start position
    for r in range(rows):
        for c in range(cols):
            if maze[r][c] == 'S':
                start = (r, c)

    # BFS setup
    from collections import deque
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    queue = deque([start])
    visited = set([start])
    path_exists = False

    while queue:
        r, c = queue.popleft()

        if maze[r][c] == 'E':
            path_exists = True
            break

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if (0 <= nr < rows and 0 <= nc < cols and
                (nr, nc) not in visited and maze[nr][nc] != '1'):
                visited.add((nr, nc))
                queue.append((nr, nc))

    return path_exists
