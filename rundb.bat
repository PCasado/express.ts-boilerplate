@echo off 
SET /p auth=Enable authentication [y/n]?: 
IF /i "%auth%"=="" ( SET %auth%="y" ) 
IF /i "%auth%"=="n" ( 
	echo running without auth 
    mongod --dbpath ./db
) ELSE ( 
	echo running on auth 
    mongod --auth --dbpath ./db
) 
SET %auth%=""