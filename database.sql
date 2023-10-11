-- CREATE DATABASE "solo_project"
-- Set up database in postico

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15),
    password VARCHAR(255)
);

CREATE TABLE journal_entries (
    id serial PRIMARY KEY,
    date DATE,
    content TEXT,
    daily_affirmation VARCHAR(255),
    user_id INTEGER REFERENCES users(id),
    is_related_to_love BOOLEAN,
    is_related_to_confidence BOOLEAN,
    is_related_to_self_esteem BOOLEAN,
    is_related_to_relationship BOOLEAN,
    is_related_to_attitude BOOLEAN,
    is_related_to_health BOOLEAN,
    is_related_to_gratitude BOOLEAN,
    is_related_to_exercise BOOLEAN,
    is_related_to_forgiveness BOOLEAN
);

INSERT INTO users (name, email, phone, password)
VALUES 
('Micheal Johnson', 'Michael@yahoo.com', '555-555-55555', 'password123'),
('Willow Smith', 'willowsmith@gmail.com', '555-555-5556', 'securepass456'),
('Asma Amir', 'AsmaAmir@gmail.com', '555-555-5557', 'secret1234'),
('Stanley Hackett', 'StanleyHacket@gmail.com', '555-555-5558', 'pass123word'),
('Zara Omar', 'ZaraOmar@gmail.com', '555-555-5559', 'pass1234word');

INSERT INTO journal_entries (date, content, daily_affirmation, user_id, is_related_to_love, is_related_to_confidence, is_related_to_self_esteem, is_related_to_health, is_related_to_gratitude, is_related_to_exercise, is_related_to_relationship, is_related_to_attitude, is_related_to_forgiveness)
VALUES 
('2023-10-01', 'I spent quality time with my family today.', 'I am confident in the relationships I’ve built.', 1, true, true, true, true, true, true, false, false, false),
('2023-10-02', 'I worked out at the gym and ate healthy today.', 'I am grateful for my strong body.', 1, false, true, false, true, true, true, false, false, false),
('2023-10-07', 'I had a great date night with my significant other.', 'I believe in the strength of my relationship with my family and significant other.', 2, true, true, true, false, false, false, false, false, false),
('2023-10-09', 'I went for a run outside and felt amazing.', 'I am grateful for my physical and mental health', 2, false, false, false, true, true, true, false, false, false),
('2023-10-04', 'Had a heart-to-heart conversation with a friend from childhood.', 'I nurture my relationships with love and understanding.', 3, false, true, true, false, false, false, true, false, true),
('2023-10-05', 'Completed my evening yoga routine.', 'I am grateful for my body and its capabilities.', 3, false, false, true, false, true, false, true, false, true),
('2023-10-04', 'Ate a nutritious meal for breakfast and felt energized.', 'I love and appreciate myself.', 4, false, false, true, true, true, false, false, false, true),
('2023-10-05', 'Went for a walk with my mother.', 'I am forgiving and understanding in my relationships.', 4, false, false, false, false, true, true, true, false, true),
('2023-10-10', 'Today, I chose a positive attitude when my internet wouldn’t work.', 'I am forgiving and grateful for the lessons life teaches me.', 5, false, false, false, false, true, false, false, true, true);
