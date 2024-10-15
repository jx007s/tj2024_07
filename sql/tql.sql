-- Active: 1728348058583@@127.0.0.1@3306@study_db
select count(pname), count(phone) from person;
select sum(year) , avg(year) , sum(phone) ,avg(phone) from person;

select sum(pname) from person;

select max(kor),min(kor),sum(kor),avg(kor),count(kor)  from exam;

select GROUP_CONCAT(pid) from exam;


-- 잘못된 쿼리문
select pid, sum(kor) from exam;

-- 잘못된 쿼리문
select * from exam
GROUP BY hakgi;

-- 학기별로 묶음 ==> 묶음 별로 국어 합계
select hakgi, sum(kor) from exam
GROUP BY hakgi
ORDER BY hakgi desc;

-- 에러
select hakgi, sum(kor) from exam
ORDER BY hakgi desc
GROUP BY hakgi;


-- 에러

select hakgi, sum(kor), count(kor) from exam
GROUP BY hakgi
where kor >= 60
ORDER BY hakgi desc;

select hakgi, sum(kor), count(kor), avg(kor) from exam
where kor >= 60
GROUP BY hakgi
ORDER BY hakgi desc;



select sum(kor), count(kor) from exam
where kor >= 60
;



select hakgi, name, sum(kor), count(kor), avg(kor) from exam
GROUP BY hakgi, name
ORDER BY hakgi desc;

select hakgi, name, sum(kor), count(kor), avg(kor) from exam
GROUP BY hakgi, name
HAVING avg(kor) >= 70
ORDER BY hakgi desc;


select hakgi, name, sum(kor), count(kor), avg(kor) from exam
where kor >= 70
GROUP BY hakgi, name
HAVING avg(kor) >= 70
ORDER BY hakgi desc;


/*
시험 종류별로 국어, 영어, 수학의 최대점수를 출력하세요
     단 학생 평균이 70점이상인 사람들만 그룹화 할것
     시험 종류는 오름 차순 할 것
*/

select name, max(kor), max(eng), max(mat) from exam
where (kor+eng+mat)/3 >= 70
GROUP BY name
ORDER BY name;

select * from exam
order by id desc
limit 0,3;

select pid, pname, year from person
where pname = '장동건';

select pid, pname, year from person
where pname = '이';

select pid, pname, year from person
where pname = '이%';



select pid, pname, year from person
where pname like '이';

select pid, pname, year from person
where pname like '이%';
select pid, pname, year from person
where pname like '%이';

select pid, pname, year from person
where pname like '%이%';

select pid, pname, year from person
where pname like '%ㅇ%';

select pid, pname, year from person
where pname like '이__';

select pid, pname, year from person
where pname like '__이';

select pid, pname, year from person
where pname like '_이_';


select pid, pname, year from person
where pname REGEXP '이'; -- '이' 포함

select pid, pname, year from person
where pname REGEXP '.이'; 
-- . : 문자 1개
--  1글자+ '이'    포함

select pid, pname, year from person
where pname REGEXP '...'; -- ... : 문자 3개 포함

select pid, pname, year from person
where pname REGEXP '성건'; --  성건 포함 : 2개

select pid, pname, year from person
where pname REGEXP '성|건'; --  성 or 건 포함

select pid, pname, year from person
where pname REGEXP '[성건]'; --  성 or 건 포함 

select pid, pname, year from person
where pname REGEXP '[성건]'; --  성 or 건 포함 

select pid, pname, year from person
where pname REGEXP '[0-9]'; --  성 or 건 포함 

select pid, pname, year from person
where pname REGEXP '[a-z]'; -- 대문자 포함

select pid, pname, year from person
where pname REGEXP '[a-z0-9@.]';

select pid, pname, year from person
where pname REGEXP '^[0-9]'; -- ^ : 시작


select pid, pname, year from person
where pname REGEXP '성$'; -- $ : 끝

select pid, pname, year from person
where pname REGEXP '^이$'; --  '이'

select pid, pname, year from person
where pname REGEXP '^이+$'; -- + : 1회 이상

select pid, pname, year from person
where pname REGEXP '^이건*$';-- * : 건 : 0회 이상

select pid, pname, year from person
where pname REGEXP '^이건+$';-- + : 건 : 1회 이상

select pid, pname, year from person
where pname REGEXP '^이?$'; -- 0~1회
select pid, pname, year from person
where pname REGEXP '^이건?$';-- 0~1회


select pid, pname, year from person
where pname REGEXP '^[a-z0-9@.]+$';

select pid, pname, year from person
where pname REGEXP '^[a-z0-9@.]{3}$';  -- 3글자


select pid, pname, year from person
where pname REGEXP '^[a-z0-9@.]{3,4}$';  -- 3~4글자

select pid, pname, year from person
where pname REGEXP '^[a-z0-9@.]{3,}$'; -- 3글자 이상

select pid, pname, year from person
where pname REGEXP '^[^성건]*$'; -- 성 or 건 제외

-- '이' 가 들어가는 3글자 이름을 가진 사람들의 친구들 성적을 출력하세요


select * from exam 
where pid in (select fr from person
where pname regexp '^.{3}$' and pname regexp '이');