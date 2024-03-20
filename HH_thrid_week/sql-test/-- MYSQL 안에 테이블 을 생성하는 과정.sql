--  MYSQL 안에 테이블 을 생성하는 과정.
-- CREATE TABLE IF NOT EXISTS courses (
--     id bigint(5) NOT NULL AUTO_INCREMENT, 
--     title varchar(255) NOT NULL,
--     tutor varchar(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

--  생성된 테이블 안에 값을 집어 넣는 과정
-- INSERT INTO courses (title, tutor) VALUES
--     ('Spring 기초반', '최원빈'),
--     ('Spring 숙련반', '최원빈'),
--     ('React 기초반', '김예지'),
--     ('React 숙련반', '김예지'),
--     ('Node.js 기초반', '이용우'),
--     ('Node.js 숙련반', '이용우'),
--     ('웹개발 종합반', '이범규'),
--     ('웹개발 종합반 플러스', '이범규');

-- 생성한 테이블 내에 데이터 들을 조회 하는 과정 
-- SELECT * FROM courses;

--  데이터를 특정 조건으로 조회 하는 과정
-- SELECT * FROM courses WHERE tutor='이용우';