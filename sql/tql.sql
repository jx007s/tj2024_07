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