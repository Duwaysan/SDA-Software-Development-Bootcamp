-- this will allow us to connect to the database
-- this will format the information being printed in the console to make it easier.. try it without if you want!
\connect ladder  
\x on

-- --3.1 Select all warehouses.
-- SELECT * FROM Warehouses;
-- --3.2 Select all boxes with a value larger than $150.
-- SELECT *  FROM Boxes
-- WHERE Value > 150;
-- --3.3 Select all distinct contents in all the boxes.
-- SELECT DISTINCT * FROM Boxes;

-- --3.4 Select the average value of all the boxes.
-- SELECT AVG(Value) FROM Boxes;
-- --3.5 Select the warehouse code and the average value of the boxes in each warehouse.
-- SELECT Warehouses.code, AVG(Value) FROM Boxes
-- JOIN Warehouses ON Warehouses.Code = Boxes.Warehouse
-- GROUP BY Warehouses.code
-- --3.6 Same as previous exercise, but select only those warehouses where the average value of the boxes is greater than 150.
-- SELECT Warehouses.code, AVG(Value) FROM Boxes
-- JOIN Warehouses ON Warehouses.Code = Boxes.Warehouse
-- GROUP BY Warehouses.code
-- HAVING AVG(Value) > 150;
-- --3.7 Select the code of each box, along with the name of the city the box is located in.
-- SELECT Boxes.Code, Warehouses.Location FROM Boxes
-- JOIN Warehouses ON Warehouses.Code = Boxes.Warehouse;

--3.8 Select the warehouse codes, along with the number of boxes in each warehouse.
-- Optionally, take into account that some warehouses are empty (i.e., the box count should show up as zero, instead of omitting the warehouse from the result).
SELECT Warehouses.Code, COUNT(Boxes.Code) AS BoxCount FROM Warehouses
LEFT JOIN Boxes ON Warehouses.Code = Boxes.Warehouse
GROUP BY Warehouses.Code
ORDER BY Warehouses.Code;

--3.9 Select the codes of all warehouses that are saturated (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).
SELECT DISTINCT w.Code FROM Warehouses w
JOIN Boxes b ON w.Code = b.Warehouse
WHERE w.Capacity < (SELECT COUNT(*) FROM Boxes
                    WHERE Warehouse = w.Code);

--3.10 Select the codes of all the boxes located in Chicago.
SELECT b.Code FROM Boxes b
JOIN Warehouses w ON b.Warehouse = w.Code
WHERE w.Location = 'Chicago';

--3.11 Create a new warehouse in New York with a capacity for 3 boxes.
INSERT INTO Warehouses(Code, Location, Capacity)
VALUES (6, 'New York', 3);
--3.12 Create a new box, with code "H5RT", containing "Papers" with a value of $200, and located in warehouse 2.
INSERT INTO Boxes(Code, Contents, Value, Warehouse)
VALUES ('H5RT', 'Papers', 200, 2);
--3.13 Reduce the value of all boxes by 15%.
UPDATE Boxes
SET Value = Value * 0.85;
--3.14 Remove all boxes with a value lower than $100.
DELETE FROM Boxes
WHERE Value < 100;
-- 3.15 Remove all boxes from saturated warehouses.
DELETE FROM Boxes
WHERE Warehouse IN (SELECT w.Code FROM Warehouses w
                    JOIN Boxes b ON w.Code = b.Warehouse
                    GROUP BY w.Code
                    HAVING COUNT(b.Code) > w.Capacity);
-- 3.16 Add Index for column "Warehouse" in table "boxes"
-- !!!NOTE!!!: index should NOT be used on small tables in practice
CREATE INDEX idx_warehouse ON Boxes(Warehouse);

-- 3.17 Print all the existing indexes
-- !!!NOTE!!!: index should NOT be used on small tables in practice
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'boxes';

-- 3.18 Remove (drop) the index you added just now
-- !!!NOTE!!!: index should NOT be used on small tables in practice
DROP INDEX idx_warehouse;
