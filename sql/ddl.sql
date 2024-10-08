-- Active: 1728348058583@@127.0.0.1@3306@study_db
-- Active: 1728348058583@@127.0.0.1@3306@study_db
create table person(
pname varchar(100),
age int,
reg_date datetime,
eye double
);

show tables;

DESC PERSON;

INSERT INTO PERSON (pname,age,reg_date,eye) VALUES
('이효리',    45, '2020-09-08 12:23:45',    0.7),
('삼효리',    36, SYSDATE(),  0.9),
('사효리',    27, '2023-04-05 19:43:23',    0.3);


SELECT * FROM PERSON;

-- 테이블 컬럼 추가
alter table person add email varchar(100);

-- 테이블 컬럼 삭제
alter table person drop eye;

-- 테이블 컬럼 자료형 수정
alter table person modify email VARCHAR(50);

-- 테이블 컬럼 수정
alter table person change age year varchar(10);
alter table person change email phone int;

-- 테이블 복사
create table ppp as select * from person;

create table ppp30 as select * from person 
where year >= 30;

create table pppZero as select * from person
where 1 = 0;

-- 숫자         문자     실수       날짜,      날짜시간,       정수
-- 옷번호,     제품명,   가격,       출시일,      판매일,      크기(천단위)


create table shirt(
    cno int, 
    cname text,
    price double,
    reg_date date,
    sail_date datetime,
    size int(4)
);

