-- tj2   ejwhdms2407!@#

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




select *,
kor+eng+mat as tot, 
(kor+eng+mat)/3 as average 
from exam;


create view my_ex_v as
select *,
kor+eng+mat as tot, 
(kor+eng+mat)/3 as average 
from exam;



select * from my_ex_v;

insert into exam (id,hakgi,name,pid,reg_date,kor,eng,mat) VALUES
(12,1,'final','ccc','2018-05-06',67,34,12);

insert into my_ex_v (id,hakgi,name,pid,reg_date,kor,eng,mat) VALUES
(13,2,'final','ddd','2018-05-06',67,34,12);

-- 에러
insert into my_ex_v (id,hakgi,name,pid,reg_date,kor,eng,mat,tot,average) VALUES
(14,2,'final','eee','2018-05-06',67,34,12,300,99);

-- 에러 : 계산식이 있는 column에 값을 직접 넣을 수 없다
insert into my_ex_v (id,hakgi,name,pid,reg_date,kor,eng,mat,tot,average) VALUES
(15,1,'semi','aaa','2018-05-06',20,20,20,60,20);



select *, kor+eng+mat as tot, 
(kor+eng+mat)/3 as average 
from exam
left outer join person ON
exam.pid = person.pid;

select exam.*, kor+eng+mat  as tot,(kor+eng+mat)/3 as average,
person.reg_date, pname, year, phone, fr 
from exam
left outer join person ON
exam.pid = person.pid;


create view myExPer_1 as 
select exam.*, kor+eng+mat  as tot,(kor+eng+mat)/3 as average,
person.reg_date as per_date, pname, year, phone, fr 
from exam
left outer join person ON
exam.pid = person.pid;

select * from myexper_1;

drop view my_ex_v;


-- 시험성적과 총점,평균,등급,학생이름,전화번호 view 를 생성하세요
-- null은 -5점 처리할 것




create view myExPer_2 as 
select ex.*, kor+eng+mat  as tot,(kor+eng+mat)/3 as average,
mid('가양미우수',interval((kor+eng+mat)/3, 0,60,70,80,90),1)   as grade,
pname, phone
from 
(select id,hakgi,name,pid,reg_date,
ifnull(kor,-5)as kor,ifnull(eng,-5)as eng,ifnull(mat,-5)as mat from exam) ex
left outer join person ON
ex.pid = person.pid;


select * from myExPer_2;