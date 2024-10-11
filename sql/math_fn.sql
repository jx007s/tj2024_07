-- Active: 1728348058583@@127.0.0.1@3306@study_db

select abs(123.456),abs(-123.456);
select ceiling(123.456),ceiling(-123.456),ceiling(987.654),ceiling(-987.654);
select ceil(123.456),ceil(-123.456),ceil(987.654),ceil(-987.654);
select floor(123.456),floor(-123.456),floor(987.654),floor(-987.654);
--select ceiling(123.456, 2);
select round(123.456),round(123.456,2),round(123.456,-1), round(-123.456),round(-123.456,2),round(-123.456,-1);
select TRUNCATE(123.456,2),TRUNCATE(123.456,-1),TRUNCATE(-123.456,2),TRUNCATE(-123.456,-1);

select pi();

select pow(2,4), mod(15,7);

select greatest(34,78,12,9,65), least(34,78,12,9,65);
select INTERVAL(77,   0,60,70,80,90),  INTERVAL(70,   0,60,70,80,90);
      --        77 의 위치
      --              1, 2, 3, 4, 5

select INTERVAL(77,   0,100,70,80,90), INTERVAL(77,   100,0,70,80,90);

select *, (kor+eng+mat)/3, 
mid('가양미우수',INTERVAL((kor+eng+mat)/3,0,60,70,80,90),1) ,
mid('가가가가가양미우수',TRUNCATE((kor+eng+mat)/3 /10,0 ),1)
from exam;


select *, year >= 20, IFNULL(year, 10), IFNULL(year, 10) >= 20 from person;

select if(false, '참이지롱','거짓부렁');

select id, kor , 
if(kor>= 80, '합격','불합격') ,
if(kor>= 80, '우수',if(kor>= 60, '양호','미달') ) 
from exam;



select id, (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3 , 
if((ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 90, '수', 
if((ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 80, '우',
if((ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 70, '미',
if((ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 60, '양','가' )  )  ) ) 
from exam;



select 
case '악어'
    when '개구리' then '양서류'
    when '상어' then '어류'
    when '호랑이' then '포유류'
    when '독수리' then '조류'
    else '몰라'
end;


select id, kor,
case 
    when kor >= 80 then '우수'
    when kor >= 60 then '양호'
    when kor >= 40 then '정상'
    else '미달'
end 
from exam;

select id, (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3,
case 
    when (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 90 then '수' 
    when (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 80 then '우'
    when (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 70 then '미'
    when (ifnull(kor,0)+ifnull(eng,0)+ifnull(mat,0))/3>= 60 then '양'
    else '가'
end 
from exam;

select '1234', PASSWORD('1234');

select 
AES_ENCRYPT('내용','qwer'),
HEX(AES_ENCRYPT('내용','qwer'));


--7D5C7A40009B3836A6C35D2ED353DCA0
select AES_DECRYPT(UNHEX('7D5C7A40009B3836A6C35D2ED353DCA0'),'qwer');
select pid, pname from person
order by pid;



select me.*, you.pname as fr_name, exam.* FROM
person me, person you, exam
where me.fr = you.pid and me.pid = exam.pid;

