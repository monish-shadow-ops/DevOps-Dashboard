CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    status VARCHAR(20)
);

CREATE TABLE releases (
    id SERIAL PRIMARY KEY,
    version VARCHAR(20),
    notes TEXT,
    released_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pipelines (
    id SERIAL PRIMARY KEY,
    build_number INTEGER,
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services(name,status)
VALUES
('Frontend','RUNNING'),
('Backend','RUNNING'),
('PostgreSQL','RUNNING');

INSERT INTO releases(version,notes)
VALUES
('v1.0.0','Initial Release');

INSERT INTO pipelines(build_number,status)
VALUES
(1,'SUCCESS');
