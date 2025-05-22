CREATE DATABASE fun;
use fun;


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  dob DATE,
  phone VARCHAR(10),
  city VARCHAR(100),
  state VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);



CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT
);


CREATE TABLE donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT,
  user_id INT,
  donor_name VARCHAR(100),
  amount DECIMAL(10,2),
  donation_date DATETIME DEFAULT CURRENT_TIMESTAMP
);
