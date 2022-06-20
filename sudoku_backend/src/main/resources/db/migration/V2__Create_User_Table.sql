CREATE TABLE
    user (
        id VARCHAR(64) primary key,
        username VARCHAR(30) NOT NULL UNIQUE,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(25) NOT NULL,
        role_id VARCHAR(64) NOT NULL,
        FOREIGN KEY (role_id) REFERENCES role (id)
    )