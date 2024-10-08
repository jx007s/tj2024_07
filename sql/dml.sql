-- Active: 1728348058583@@127.0.0.1@3306@study_db
-- Active: 1728348058583@@127.0.0.1@3306@study_db


insert into person VALUES
('장동건',54,now(),444);

-- 에러 
insert into person VALUES
('장서건',now(),444);

-- 에러 
insert into person VALUES
('장중건',now(),36,444);


insert into person ( pname , reg_date ) VALUES
('정우성','1999-09-19');

insert into person ( phone, pname ) VALUES
('정남성',1212);


insert into person ( phone, pname ) VALUES
(2323,'정북성');


insert into person ( phone, pname ) VALUES
(10 + 5 * 3,'북두신성');


-- 쌍따옴표 : 컬럼명, 혹은 테이블명과 같은 구조형태
-- 작은따옴표 : 문자열, 날짜 데이터
insert into person ( phone, pname ) VALUES
(3434,"감수성");


insert into person ( pname , year) VALUES
('현빈',37),
('원빈',41),
('김우빈',32),
('장희빈',150);


update person set year = 17;

update person set year = 20
where pname = '이효리';

update person set year = 30 , reg_date='1988-08-08 8:8:8' , phone = phone / 10
where pname = '삼효리';

update person set phone = phone + 5
where reg_date >= '2020-1-1 0:0:0' ;


delete from ppp;

delete from person
where phone >= 2000;

delete from person
where reg_date = null;

delete from person
where reg_date is null;


select * from person;


select year, pname, phone, year+2000 from person;


select * from person
where phone is not null;

/*
EXAM 테이블을 생성 및 데이터 입력하세요

컬럼명

시번,학기, 종류, 응시생,응시일,국어, 영어, 수학
id,  hakgi, name,  pid, reg_date, kor, eng, mat
숫자 숫자,   문자  문자   날짜     숫자  숫자 숫자



---------------------------------------------------------------------------------

입력내용
학생별
1학기 중간, 기말
2학기 중간, 기말 
을 입력 하세요

학생이 4명 * 시험종류4 = 16개






/*

exam  

id, hakgi, name,  pid, reg_date, kor, eng, mat

1,1 , semi ddd 77 78 71
2,1 , semi eee 87 88 81
3,2 , semi fff 97 98 91
4,2 , semi mmm 67 68 61
5,1 , final ddd 56 65 71
6,1 , final fff 76 65 41
7,2 , final rrr 76 85 91
8,2 , final ttt 66 85 21
...

*/




