-- users 
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
	id VARCHAR(28) UNIQUE NOT NULL, 
	email VARCHAR(256) NOT NULL, 
	first_name VARCHAR(35), 
	last_name VARCHAR(35),
	last_login TIMESTAMPTZ DEFAULT now()
);