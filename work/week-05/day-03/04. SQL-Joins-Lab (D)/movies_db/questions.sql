\connect movies_lab_db;
\x on
-- Test query!!
-- SELECT * FROM users;

-- 1. List all the movie titles and their corresponding directors.

SELECT m.title, d.name FROM movies m
JOIN directors d ON m.director_id = d.director_id;

-- 2. Select the movie title and user name for all of the "favorites" represented by the `users_movies` table.
SELECT m.title, u.name FROM movies m 
JOIN users_movies um ON m.movie_id = um.movie_id
JOIN users u ON u.user_id = um.user_id;

-- 3. List the movies with the number of favorites they have.

SELECT m.title, COUNT(um.user_id) AS favorite_count FROM movies m
FULL OUTER JOIN users_movies um ON m.movie_id = um.movie_id
FULL OUTER JOIN users u ON u.user_id = um.user_id
GROUP BY m.title
ORDER BY favorite_count DESC;

-- 4. List the names of directors along with the number of favorites that exist for all of the movies they've made, ordered by number of favorites descending.

SELECT d.name AS directorname, COUNT(um.user_id) AS favorite_count FROM directors d
FULL OUTER JOIN movies m ON m.director_id = d.director_id
FULL OUTER JOIN users_movies um ON m.movie_id = um.movie_id
FULL OUTER JOIN users u ON u.user_id = um.user_id
GROUP BY d.name
ORDER BY favorite_count DESC;


-- 5. List the user name, director name and favorite count of all of the user/director combinations (based on the `users_movies` table).

SELECT u.name AS username, d.name AS directorname, COUNT(um.movie_id) AS favorite_count FROM users u
JOIN users_movies um ON u.user_id = um.user_id
JOIN movies m ON m.movie_id = um.movie_id
JOIN directors d ON m.director_id = d.director_id
GROUP BY u.name, d.name
