-- Active: 1728348058583@@127.0.0.1@3306@study_db

select * from person, exam;


-- 이퀄조인 : 두 테이블의 조인 조건에 모두 해당하는 로우
select * from person, exam
WHERE person.pid = exam.pid;

select * from person
join exam
on person.pid = exam.pid;


-- outer
select * from
person left outer join exam
on person.pid = exam.pid;


select * from
person right outer join exam
on person.pid = exam.pid;

--에러
select * from
person left inner join exam
on person.pid = exam.pid;

-- inner == equal
select * from
person inner join exam
on person.pid = exam.pid;

select exam.*, person.pid as ppid, pname  from exam
join person
on exam.pid = person.pid;


-- self
select me.*, you.pname as fr_name 
from person me, person you
where me.fr = you.pid;



/*
교수테이블을 생성하세요
"pid" "NAME", "TEL"

학생테이블에 교수를 추가하시고 각 학생마다 교수를 지정하세요 (pid)
학생별 교수 이름을 출력하세요


교수별 학생중 가장 높은 평균점수를  출력하세요 (group by)


내정보와 친구의 이름 , 내 시험정보의 국어, 영어, 수학, 총점, 평균 을 출력해주세요

*/

select me.*, you.pname as fr_name, exam.* from person me
left outer join person you on me.fr = you.pid
left outer join exam on me.pid = exam.pid;


select me.*, you.pname as fr_name, exam.* , (exam.kor + eng + mat) / 3
from person me, person you, exam
where me.fr = you.pid and me.pid = exam.pid;