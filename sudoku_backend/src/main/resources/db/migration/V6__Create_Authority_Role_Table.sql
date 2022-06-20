CREATE TABLE
    authority_role(
        id VARCHAR(64) primary key,
        role_id VARCHAR(64),
        authority_id VARCHAR(64),
        foreign key (role_id) REFERENCES role(id),
        foreign key (authority_id) REFERENCES authority(id)
    );