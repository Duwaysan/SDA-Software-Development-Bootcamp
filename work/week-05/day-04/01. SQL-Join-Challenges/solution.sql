\connect sakila_pg
\x on
-- Question 1
SELECT customer.first_name , customer.last_name , customer.email FROM customer 
JOIN address ON customer.address_id = address.address_id 
JOIN city ON city.city_id = address.city_id
WHERE city.city = 'Santiago de los Caballeros';

-- Question 2
SELECT f.title, f.description, f.release_year, f.rating, f.special_features, c.name AS genre FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Sci-Fi';

-- Question 3
SELECT a.actor_id , a.first_name , a.last_name, f.title, f.description, f.release_year FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id 
JOIN film f ON fa.film_id = f.film_id
WHERE a.first_name = 'WHOOPI'

-- Question 4 
SELECT c.first_name, c.last_name, c.email, a.address  FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN store s on c.store_id = s.store_id
JOIN city ON city.city_id = a.city_id
WHERE s.store_id = 1 and city.city_id IN (1,42,312,459);

-- Question 5
SELECT film.title, film.description, film.release_year, film.rating, film.special_features FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.rating = 'PG-13' AND 'Trailers' = ANY(film.special_features) AND actor.actor_id = 23;

-- Question 6 
SELECT f.film_id,f.title,fa.actor_id, a.first_name FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON f.film_id = fa.film_id
WHERE fa.film_id = 157;

-- Question 7
SELECT f.title , f.description , f.release_year , f.rating , f.special_features , c.name FROM film f
JOIN film_category fc ON f.film_id = fc.film_id 
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Horror' AND f.rental_rate = 0.99;

-- Question 8 
SELECT f.title, f.description, f.release_year, f.rating, f.special_features ,c.name AS genre, a.first_name, a.last_name FROM film f
JOIN film_category fc ON f.film_id = fc.film_id 
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Music' AND a.first_name = 'VAL' AND a.last_name = 'BOLGER';

