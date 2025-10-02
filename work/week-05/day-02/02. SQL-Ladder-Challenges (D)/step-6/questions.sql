-- this will allow us to connect to the database
-- this will format the information being printed in the console to make it easier.. try it without if you want!
\connect ladder  
\x on 

-- 6.1 List all the scientists' names, their projects' names,
-- and the hours worked by that scientist on each project,
-- in alphabetical order of project name, then scientist name.
SELECT scientists.name AS scientist_name,
       projects.name AS project_name,
       projects.hours 
FROM scientists
JOIN assignedto ON scientists.ssn = assignedto.scientist
JOIN projects ON assignedto.project = projects.code
ORDER BY project_name, scientist_name;
-- 6.2 Select the project names which are not assigned yet
SELECT p.name AS project_name FROM projects p
LEFT JOIN assignedto a ON p.code = a.project
WHERE a.project IS NULL;