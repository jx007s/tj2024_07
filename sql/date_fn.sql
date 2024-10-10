-- Active: 1728348058583@@127.0.0.1@3306@study_db

select SYSDATE(), now(), curdate(), curtime();

select year(sysdate()), year('1999-08-23'), year('2002-06-03 15:27:39');
select year(sysdate()), MONTH(sysdate()), day(sysdate()), date(sysdate());
--         년              월                 일            년-월-일
-- 2024, 10, 20 ,  2024-10-20  

select dayofyear(sysdate()), DAYOFMONTH(sysdate()), dayofweek(sysdate());

select week(sysdate()), weekday(sysdate()), weekofyear(sysdate());
/*                     일 월 화 수 목 금  토 일
dayofweek(sysdate())   1  2  3  4  5  6  7
weekday(sysdate())        0  1  2  3  4  5  6 

올해 몇번째 주
week : 0 부터 시작
weekofyear : 1 부터 시작
*/

select monthname(sysdate()), dayname(sysdate());
select last_day(sysdate()), last_day('2024-02-12'), last_day('2023-02-12');
select HOUR(sysdate()),MINUTE(sysdate()), SECOND(sysdate());

select date_add(SYSDATE(), INTERVAL 3  MONTH), date_add(SYSDATE(), INTERVAL -3  MONTH);
select date_sub(SYSDATE(), INTERVAL 3  MONTH), date_sub(SYSDATE(), INTERVAL -3  MONTH);
select adddate(SYSDATE(), INTERVAL 3  MONTH), adddate(SYSDATE(), INTERVAL -3  MONTH);
select subdate(SYSDATE(), INTERVAL 3  MONTH), subdate(SYSDATE(), INTERVAL -3  MONTH);

select sysdate(), addtime(sysdate(),'00:05:13'), date_add(SYSDATE(), INTERVAL 5 MINUTE), addtime(sysdate(),'0-2-10 00:05:13');
-- addtime(sysdate(),'0-2-10 00:05:13') : null ==> 연산되지 않음(시간만 가능)


select SYSDATE(), adddate(SYSDATE(), '01-02-04'); --의미없음

select sysdate(), addtime(sysdate(),'00:05:13'), subtime(sysdate(),'00:05:13');
select sysdate(), addtime(sysdate(),'-00:05:13'), subtime(sysdate(),'-00:05:13');

select datediff(sysdate(), '2022-05-05'), datediff('2022-05-05',sysdate());

select PERIOD_ADD(202203, 5), PERIOD_ADD(202211, 5), PERIOD_ADD(202211, -5);
select PERIOD_diff(202203, 202306), PERIOD_diff(202403, 202306);

select DATE_FORMAT('2023-08-09 15:06:45', '%Y')
,DATE_FORMAT('2023-08-09 15:06:45', '%y')
,DATE_FORMAT('2023-08-09 15:06:45', '%M')
,DATE_FORMAT('2023-08-09 15:06:45', '%m')
,DATE_FORMAT('2023-08-09 15:06:45', '%c')
,DATE_FORMAT('2023-08-09 15:06:45', '%D')
,DATE_FORMAT('2023-08-09 15:06:45', '%d')
,DATE_FORMAT('2023-08-09 15:06:45', '%e')
,DATE_FORMAT('2023-08-09 15:06:45', '%w')  -- 일요일 : 0
,DATE_FORMAT('2023-08-09 15:06:45', '%W')  -- 요일 : Full
,DATE_FORMAT('2023-08-09 15:06:45', '%a')  -- 요일 : short
,DATE_FORMAT('2023-08-09 15:06:45', '%p')  -- AM/PM
,DATE_FORMAT('2023-08-09 15:06:45', '%H')  -- 24 :2
,DATE_FORMAT('2023-08-09 05:06:45', '%H')  -- 24 :2
,DATE_FORMAT('2023-08-09 15:06:45', '%k')  -- 24 : 1
,DATE_FORMAT('2023-08-09 05:06:45', '%k') --  24 : 1
,DATE_FORMAT('2023-08-09 15:06:45', '%h')  -- 12 : 2
,DATE_FORMAT('2023-08-09 05:06:45', '%h') --  12 : 2
,DATE_FORMAT('2023-08-09 15:06:45', '%l')  -- 12 : 1
,DATE_FORMAT('2023-08-09 05:06:45', '%l') --  12 : 1
,DATE_FORMAT('2023-08-09 05:06:45', '%i')
,DATE_FORMAT('2023-08-09 05:06:45', '%s')
,DATE_FORMAT('2023-08-09 05:06:45', '%j') -- dayofyear
,DATE_FORMAT('2023-08-09 15:06:45', '%r') -- 시간 12시간
,DATE_FORMAT('2023-08-09 15:06:45', '%T') -- 시간 24시간
,DATE_FORMAT('2023-08-09 15:06:45', '%Y년 %m-%d')
;

-- 2023-08-09 15:06:45를 2023년 8월 09일 (수) 15:06:45 PM 으로 출력하세요
select concat(
    DATE_FORMAT('2023-08-09 15:06:45', '%Y년 %c월 %d일 ('),
    mid('일월화수목금토',DATE_FORMAT('2023-08-09 15:06:45', '%w')+1,1),
    DATE_FORMAT('2023-08-09 15:06:45', ') %H:%i:%s %p'));



select UNIX_TIMESTAMP(), UNIX_TIMESTAMP('1970-1-1 9:0:0'), UNIX_TIMESTAMP('1970-1-1 9:0:10');
--1728539329
select FROM_UNIXTIME(0),  FROM_UNIXTIME(100),  FROM_UNIXTIME(1728539329);

select to_days('1970-01-01'),to_days('0000-01-01'),to_days('0000-02-15');

select FROM_DAYS(1),FROM_DAYS(10),FROM_DAYS(42),FROM_DAYS(367);

select TIME_TO_SEC('0:02:15'),TIME_TO_SEC('3:02:15');

select SEC_TO_TIME(100);

insert into person (pname, reg_date) values
('한가인','2015-05-06 15:30:40'),
('두가인','2017-08-13');

-- 에러
insert into person (pname, reg_date) values
('세가인','2019년09월25일 16시31분40초');

select STR_TO_DATE('2019년09월25일','%Y년%m월%d일');

insert into person (pname, reg_date) values
('사가인',
STR_TO_DATE('2019년09월25일 16시31분40초','%Y년%m월%d일 %H시%i분%s초'));

select  STR_TO_DATE(concat(year(sysdate()),mid('980320-1234567',3,4)),'%Y%m%d');