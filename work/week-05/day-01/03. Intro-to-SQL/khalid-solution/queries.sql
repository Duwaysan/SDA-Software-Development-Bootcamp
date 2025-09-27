\connect music

SELECT * FROM bands;

UPDATE bands
SET genre = 'Rock N Roll'
WHERE id = 1;

SELECT * FROM bands;

DELETE FROM bands
WHERE name = 'The Who';
DELETE FROM bands
WHERE id = 3;
SELECT * FROM bands;

