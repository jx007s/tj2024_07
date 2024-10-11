-- Active: 1728348058583@@127.0.0.1@3306@study_db

select pname, year from ppp;

select pname, year from ppp30;

select pname, year from pppZero;


select pname, year from ppp where year <= 40
UNION
select pname, year from ppp30 where year % 5
union
select pname, year from pppZero;

-- 에러 : 컬럼 종류가 아닌 갯수가 맞으면 가능
select pname, year,phone from ppp where year <= 40
UNION
select pname, year,phone from ppp30 where year % 5
union
select pname, year from pppZero;


-- 컬럼 종류가 아닌 갯수가 맞으면 가능
select pname, year,phone from ppp where year <= 40
UNION
select pname, year,phone from ppp30 where year % 5
union
select pname, year, reg_date from pppZero;


select pname, year from ppp 
UNION
select pname, year from ppp30
union
select pname, year from pppZero;

-- 중복 데이터 1개만 처리
select year from ppp 
UNION
select year from ppp30
union
select year from pppZero;

-- all : 중복된 데이터 모두 호출
select year from ppp 
UNION all
select year from ppp30
union all
select year from pppZero;
/*

menu_1

김치찌개 5000
된장찌개 4000
떡라면 3000
떡볶이 2000

menu_2

김치찌개       5000
오므라이스    6000
라면            2500
된장찌개       4500

menu_3

물냉면 5500
만두          4500
비빔냉면    6500


 제품 목록

 메뉴판 
*/
create table menu_3(
    title text,
    price int
);


insert into menu_3 (title, price) VALUES
('물냉면',  5500),
('만두',   4500),
('비빔냉면', 6500);

-- 제품목록
select title from menu_1
union
select title from menu_2
union
select title from menu_3;

--메뉴판
select '메뉴1',title,price from menu_1
union
select '메뉴2', title,price from menu_2
union
select '메뉴3', title,price from menu_3;