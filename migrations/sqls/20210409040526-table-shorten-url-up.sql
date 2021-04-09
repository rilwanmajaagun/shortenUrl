/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS shorten_url(
id SERIAL UNIQUE, 
hash_url VARCHAR(6) NOT NULL unique,
full_url VARCHAR,
created_at timestamp DEFAULT NOW());

