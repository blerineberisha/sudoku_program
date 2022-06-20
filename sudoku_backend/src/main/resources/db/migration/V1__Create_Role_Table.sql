create table role(
    id VARCHAR(64) primary key,
    name VARCHAR(10) unique,
    description VARCHAR(30)
);