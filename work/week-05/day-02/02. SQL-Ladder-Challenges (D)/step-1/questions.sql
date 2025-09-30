-- this will allow us to connect to the database
-- this will format the information being printed in the console to make it easier.. try it without if you want!
\connect ladder  
\x on         

-- 1.1 Select the names of all the products in the store.
-- Your query goes here:
SELECT name FROM Products;
\echo '=============================='
-- 1.2 Select the names and the prices of all the products in the store.
-- Your query goes here:
SELECT name, price FROM Products;
\echo '=============================='
-- 1.3 Select the name of the products with a price less than or equal to $200.
-- Your query goes here:
SELECT name FROM products
WHERE price <= 200;
\echo '=============================='

-- 1.4 Select all the products with a price between $60 and $120.
-- Your query goes here:
SELECT name FROM products
WHERE price <= 120 AND price >= 60;
\echo '=============================='


-- 1.5 Select the name and price in cents (i.e., the price must be multiplied by 100).
-- Your query goes here:

SELECT name, price*100 FROM Products;
\echo '=============================='

-- 1.6 Compute the average price of all the products.
-- Your query goes here:
SELECT AVG(price) FROM Products;
\echo '=============================='


-- 1.7 Compute the average price of all products with manufacturer code equal to 2.
-- Your query goes here:
SELECT AVG(price) FROM products
WHERE Manufacturer = 2;
\echo '=============================='

-- 1.8 Compute the number of prod ucts with a price larger than or equal to $180.
-- Your query goes here:
SELECT COUNT(*) FROM Products
WHERE price >= 180;
\echo '=============================='

-- 1.9 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).
-- Your query goes here:
SELECT name, price FROM Products
WHERE price >= 180
ORDER BY price DESC, name ASC;
-- \echo '=============================='
-- 1.10 Select all the data from the products,
-- including all the data for each product's manufacturer.
-- Your query goes here:
-- SELECT * FROM Products
-- JOIN Manufacturers ON Products.Manufacturer = Manufacturers.code;
-- \echo '=============================='

-- 1.11 Select the product name, price, and manufacturer name of all the products.
-- Your query goes here:
-- SELECT Products.*, Manufacturers.name FROM Products
-- JOIN Manufacturers ON Products.Manufacturer = Manufacturers.code;
-- \echo '=============================='


-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
-- Your query goes here:
-- SELECT Manufacturer, AVG(price) FROM Products
-- GROUP BY Manufacturer;


-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.
-- Your query goes here:
SELECT Manufacturers.name, AVG(price) FROM Products
JOIN Manufacturers ON Products.Manufacturer = Manufacturers.Code
GROUP BY Manufacturers.name;


-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.
-- Your query goes here:
SELECT Manufacturers.name, AVG(price) FROM Products
JOIN Manufacturers ON Products.Manufacturer = Manufacturers.Code
GROUP BY Manufacturers.name
HAVING AVG(price) >= 150;

-- 1.15 Select the name and price of the cheapest product.
-- Your query goes here:

SELECT name, price FROM Products
ORDER BY Price ASC
LIMIT(1);

-- 1.16 Select the name of each manufacturer along with the name and price of its most expensive product.
-- Your query goes here:
SELECT m.Name AS manufacturer,
       p.Name AS product,
       p.Price
FROM Manufacturers m
JOIN Products p
  ON m.Code = p.Manufacturer
WHERE p.Price = (
    SELECT MAX(p2.Price)
    FROM Products p2
    WHERE p2.Manufacturer = m.Code
);

-- 1.17 Add a new product: Loudspeakers, $70, manufacturer 2.
-- Your query goes here:

INSERT INTO Products (code, name, price, manufacturer)
VALUES (11, 'Loudspeakers', 70, 2);

-- 1.18 Update the name of product 8 to "Laser Printer".
-- Your query goes here:
UPDATE Products
SET name = 'Laser Printer'
WHERE code = 8;

-- 1.19 Apply a 10% discount to all products.
-- Your query goes here:

UPDATE Products
SET price = price * 0.9;

-- 1.20 Apply a 10% discount to all products with a price larger than or equal to $120.
-- Your query goes here:
UPDATE Products
SET price = price * 0.9
WHERE price >= 120;



