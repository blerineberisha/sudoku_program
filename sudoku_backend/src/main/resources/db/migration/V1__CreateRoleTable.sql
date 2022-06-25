create table role
(
    id          VARCHAR(64) primary key,
    name        VARCHAR(30) not null unique,
    description VARCHAR(50) not null
);