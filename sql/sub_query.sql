-- Active: 1728348058583@@127.0.0.1@3306@study_db

select *, mid('가가가가가양미우수수',TRUNCATE(average / 10,0),1)   from 
(select pid, kor, eng, mat , tot, tot / 3 as average from 
(select *, kor + eng + mat as tot from exam) ex1) ex2;


-- ex1
select *, kor + eng + mat as tot from exam;

-- ex2
select pid, kor, eng, mat , tot, tot / 3 as average from 
(select *, kor + eng + mat as tot from exam order by kor) ex1;


-- 국어 점수가 가장 높은 사람의 이름

-- 국어 점수가 가장 높음
select max(kor) from exam

-- 국어 점수가 가장 높은(97) 사람
select pid from exam
where 97 = kor;

-- 사람(fff) 이름
select * from person
where pid = 'fff';


select * from person
where pid = 
(select pid from exam where 
(select max(kor) from exam) 
= kor);

-- 국어점수가 80점 이상 인 사람
select pid from exam
where kor >= 80;

select * from person
where pid in ('eee','fff');


select * from person
where pid in 
(select pid from exam where kor >= 80);

-- '이효리' 보다 국어 점수가 높은 시험 결과

select pid from person where pname = '이효리';

select kor from exam where pid = 'ddd';

select * from exam where kor > all (select kor from exam where pid = 'ddd');

select * from exam where kor > any (select kor from exam where pid = 'ddd');

-- 국어,영어,수학 전체 평균 보다 높은 사람을 출력하세요

select avg((kor+eng+mat)/3) from exam;


select pid from  exam
where (kor+eng+mat)/3 > (select avg((kor+eng+mat)/3) from exam);

select * from person
where pid in 
(select pid from  exam
where (kor+eng+mat)/3 > (select avg((kor+eng+mat)/3) from exam));


select TRUNCATE(avg(kor),0)  from exam;

insert into exam (id, pid, hakgi, name, reg_date, kor, eng, mat) VALUES
(9,'ddd',2,'semi','2024-10-11',67+10,87,43);

insert into exam (id, pid, hakgi, name, reg_date, kor, eng, mat) VALUES
(10,'eee',2,'semi','2024-10-11',
(select TRUNCATE(avg(kor),0)  from exam ee)+10,87,43);

insert into exam (id, pid, hakgi, name, reg_date, kor, eng, mat) VALUES
((select max(id)+1  from exam ee),
'ttt',2,'semi',sysdate(), 50,87,43);

-- 이름이 효리인 사람의 영어점수에 +3
-- 영어 평균 / 10을 국어점에 추가


select pid from person where mid(pname,2) = '효리';

update exam set eng = eng +3 where pid in ('ddd','eee','fff');

update exam set eng = eng +3 where 
pid in (select pid from person where mid(pname,2) = '효리');

select FLOOR(avg(eng)/10) from exam;

update exam set mat = mat + 8;


update exam set kor = kor + 
(select FLOOR(avg(eng)/10) from exam);


-- 정우성의 시험 기록 삭제

select pid from person where pname = '정우성';







insert into exam 
(id, hakgi, name,  pid, reg_date, kor, eng, mat)
values 
((select max(id)+1 from exam e),1 , 'semi' , 'bbb', sysdate()  ,77, 78, 71),
((select max(id)+1 from exam e),1 , 'semi' , 'ccc', sysdate()  ,87, 88, 81),
((select max(id)+1 from exam e),1 , 'semi' , 'ggg', sysdate()  ,56, 65, 71),
((select max(id)+1 from exam e),1 , 'semi' , 'bbb', sysdate()  ,76, 65, 41),
((select max(id)+1 from exam e),1 , 'semi' , 'ccc', sysdate()  ,97, 98, 91);

delete from exam where 
pid in (select pid from person where right(pname,2) = '가인');

-- 친한 친구가 정우성인 사람의 1학기 영어점수를 3점씩 낮춰 주세요


select pid from person where 
fr in (select pid from person p1 where pname = '정우성');

update exam set eng = eng -3 where
hakgi = 1 and
pid in (select pid from person where 
fr in (select pid from person p1 where pname = '정우성'));
