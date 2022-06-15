create table user(
    id VARCHAR(16) primary key,
    username VARCHAR(30) unique,
    email VARCHAR(50) unique,
)