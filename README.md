# YPRemake

This project is designed to highlight user authentication and login persistance in a light-weight application
using the following main components:
-Javascript
-Node.js(express)
-React
-PostgreSQL
-Cookies(for user login persistance)
-Bcrypt(for password hashing and verification)
-CSS Modules(for styling purposes)

-run npm install

-create UserDB in PostgreSQL, set username = postgres and password = password

-run npm start (should run server and successful connection and sync messages from PSQL)

-run npm seed to seed the database with mock data (please note, mock data will not include hashed passwords, but all subsequent user based data entries will hash passwords)

-start localhost:5000 on web browser

-Create a profile by clicking "sign up" 

-Login with newly created profile

-Additional Info allows the user to add more info to their profile which also updates the userDB

-My profile, shows current profile information, including updated information if/when the user decides to update their info

-Companies allow you to view existing businesses and clients stored in the DB

-Search in Companies allows you to search through existing database by company name
