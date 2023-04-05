/*
-- Query: create table friends
-- Date: 2023-04-05 22:58
*/

CREATE TABLE friends( 
       friend_id INT NOT NULL AUTO_INCREMENT,
       first_name VARCHAR(30) NOT NULL,
       last_name VARCHAR(30) NOT NULL,
       cell_phone VARCHAR(15),
       age INT DEFAULT NULL,
       PRIMARY KEY (friend_id));