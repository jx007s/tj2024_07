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



exam  

id, hakgi, name,  pid, reg_date, kor, eng, mat

1,1 , semi ddd '2019-5-4' 77 78 71
2,1 , semi eee '2019-5-4' 87 88 81
3,1 , final ddd '2019-7-4' 56 65 71
4,1 , final fff '2019-7-4' 76 65 41
5,2 , semi fff '2019-10-4' 97 98 91
6,2 , semi mmm '2019-10-4' 67 68 61
7,2 , final rrr '2019-12-4' 76 85 91
8,2 , final ttt '2019-12-4' 66 85 21
...

*/


create table exam(
  id int, 
  hakgi int, 
  name text,  
  pid text, 
  reg_date date, 
  kor int, 
  eng int, 
  mat int
);

insert into exam 
(id, hakgi, name,  pid, reg_date, kor, eng, mat)
values 
(1,1 , 'semi' , 'ddd', '2019-5-4'  ,77, 78, 71),
(2,1 , 'semi' , 'eee', '2019-5-4'  ,87, 88, 81),
(3,1 , 'final', 'ddd', '2019-7-4'  ,56, 65, 71),
(4,1 , 'final', 'fff', '2019-7-4'  ,76, 65, 41),
(5,2 , 'semi' , 'fff', '2019-10-4'  ,97, 98, 91),
(6,2 , 'semi' , 'mmm', '2019-10-4'  ,67, 68, 61),
(7,2 , 'final', 'rrr', '2019-12-4' ,76, 85, 91),
(8,2 , 'final', 'ttt', '2019-12-4' ,66, 85, 21);


-- 연산자
-- 1. 산술연산자
select 15 + 7, 15 - 7, 15 * 7, 15 / 7, 15 % 7;

select *, kor+100 as k100, eng-5 as "e 5" ,mat *5 as 'm 5', kor /5 , eng %5 from exam;

-- 2. 비교연산자  : 0 - false,   0 제외 true
select 
10 > 20,
10 >= 20,
10 <= 20,
10 < 20,
10 = 20,
10 != 20,
10 <> 20;

SELECT
'장동건' >  '장서건',
'장동건' >= '장서건',
'장동건' <= '장서건',
'장동건' <  '장서건',
'장동건' =  '장서건',
'장동건' != '장서건',
'장동건' <> '장서건';

select * from person where phone is null;
select * from person where phone is not null;

--3. 논리 연산자
select 1 and 1, 1 && 1,  1 and 0, 1 && 0; 
select 1 or 1, 1 || 1,  1 or 0, 1 || 0,  0 or 0, 0 || 0;


select * from exam
WHERE
hakgi = 1 && name = 'final' && kor >= 70;


select * from person
where year >= 19 && year <= 25;

select * from person
where year BETWEEN 19 and 25;

select * from person
where year BETWEEN 25 and 19;


select * from exam
where pid != 'ddd';


select * from exam
where pid <> 'ddd';

-- 에러
select * from exam
where pid not 'ddd';

select * from exam
where not pid = 'ddd';


select * from exam
where pid = 'ddd' or pid = 'fff' or pid = 'eee';

select * from exam
where pid in ('ddd' , 'fff' , 'eee');


select * from exam
where 
(hakgi = 1 and pid = 'ddd') or 
(hakgi = 2 and pid = 'fff');



select * from exam
where 
(hakgi , pid) in
((1,'ddd') , (2 ,'fff'));

/*
exam 테이블을 이용하여
학생 점수와, 총점, 평균을 출력하세요

단, 1학기 학생 중 평균이 70 점 이상인 학생만 출력


*/

select *, (kor + eng + mat) as tot ,
(kor + eng + mat)/3 as avg from exam
where 
hakgi = 1 and (kor + eng + mat)/3 >= 70;


select * from exam
where name <> 'semi'
ORDER BY hakgi desc, pid, kor;

-- 에러
select * from exam
ORDER BY hakgi desc, pid, kor
where name <> 'semi';

/*
평균이 60점 이상인 학생들을 학기 내림, 
시험종류 올림, 평균 내림 순으로 정렬하여 출력하세요

*/

select * from exam
where (kor + eng + mat) / 3 >= 60
order by 
hakgi desc, name, (kor + eng + mat) / 3 desc;