-- this will allow us to connect to the database
-- this will format the information being printed in the console to make it easier.. try it without if you want!
\connect ladder  
\x on

-- 5.1 Select the name of all the pieces.
SELECT Name FROM Pieces;

-- 5.2  Select all the providers' data.
SELECT * FROM Providers;
-- 5.3 Obtain the average price of each piece (show only the piece code and the average price).
SELECT Piece, AVG(Price) AS Average_Price FROM Provides
GROUP BY Piece;

-- 5.4  Obtain the names of all providers who supply piece 1.
SELECT DISTINCT Providers.Name FROM Providers
JOIN Provides ON Providers.Code = Provides.Provider
WHERE Provides.Piece = 1;
-- 5.5 Select the name of pieces provided by provider with code "HAL".
SELECT Pieces.Name FROM Pieces
JOIN Provides ON Pieces.Code = Provides.Piece
WHERE Provides.Provider = 'HAL';
-- 5.6
-- ---------------------------------------------
-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-- Interesting and important one.
-- For each piece, find the most expensive offering of that piece and include the piece name, provider name, and price
-- (note that there could be two providers who supply the same piece at the most expensive price).
-- ---------------------------------------------
SELECT  Pieces.Name AS Piece_Name, Providers.Name AS Provider_Name, Provides.Price
FROM Pieces
JOIN Provides ON Pieces.Code = Provides.Piece
JOIN Providers ON Provides.Provider = Providers.Code
WHERE (Provides.Piece, Provides.Price) IN
    (SELECT Piece, MAX(Price) FROM Provides GROUP BY Piece);

-- 5.7 Add an entry to the database to indicate that "Skellington Supplies" (code "TNBC") will provide sprockets (code "1") for 7 cents each.
INSERT INTO Provides(Piece, Provider, Price)
VALUES (1, 'TNBC', 7);
-- 5.8 Increase all prices by one cent.
UPDATE Provides
SET Price = Price + 0.01;
-- 5.9 Update the database to reflect that "Susan Calvin Corp." (code "RBT") will not supply bolts (code 4).
DELETE FROM Provides
WHERE Piece = 4 AND Provider = 'RBT';

-- 5.10 Update the database to reflect that "Susan Calvin Corp." (code "RBT") will not supply any pieces
-- (the provider should still remain in the database).
DELETE FROM Provides
WHERE Provider = 'RBT';