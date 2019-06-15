DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR (100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT (30) NOT NULL,
  PRIMARY KEY (item_id)
);


Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (101, "loafers", "shoes", 89.99, 25),
	   (202, "necklace", "jewelry", 119.99, 12),
	   (303, "sneakers", "shoes", 129.99, 15),
	   (404, "sweater", "clothing", 19.99, 4),
	   (505, "pants", "clothing", 39.99, 15),
	   (606, "dress", "clothing", 59.99, 19),
	   (707, "boots", "shoes", 149.99, 11),
	   (808, "ring", "jewelry", 169.99, 10),
	   (909, "earrings", "jewelry", 9.99, 19),
	   (1010, "sandals", "shoes", 19.99, 17)
