create table user(
    id VARCHAR(64) primary key,
    username VARCHAR(30) unique,
    email VARCHAR(50) unique,
    role_id VARCHAR(64),
    FOREIGN KEY (role_id) REFERENCES role(id)
)