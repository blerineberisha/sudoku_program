create table authority(
    id VARCHAR(64) primary key,
    name VARCHAR(10) unique,
    description VARCHAR(30),
    role_id VARCHAR(64) unique,
    foreign key (role_id) references role(id)
);