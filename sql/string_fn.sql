-- Active: 1728348058583@@127.0.0.1@3306@study_db


-- 추출
select left('아기상어',2);
select right('아기상어',2);
select mid('아기상어 뚜루루뚜루',3,5);
---          12 3
select mid('아기상어 뚜루루뚜루',3);
---          12 3
select SUBSTRING('아기상어 뚜루루뚜루',3, 5);

select SUBSTRING('아기상어 뚜루루뚜루',3);

select SUBSTR('아기상어 뚜루루뚜루',3,5);
select SUBSTR('아기상어 뚜루루뚜루',3);


select SUBSTRING_INDEX('aaa,bb,cccc,dd,eeee,ff,g,hh',',',3);

select SUBSTRING_INDEX('aaa,bb,cccc,dd,eeee,ff,g,hh',',',-3);


-- 검색
select LENGTH('abcd 아기상어 efg'),CHAR_LENGTH('abcd 아기상어 efg');
-- byte (한글은 3byte), 글자수

select INSTR('더조은 it com 더조 iit asco Com qwer','co');
--             12 345678

select INSTR('더조은 it com 더조 iit asco Com qwer','Co'); -- 대소문자 구분 못함
--             12 345678

select INSTR('더조은 it com 더조 iit asco Com qwer','asdf');

--select INSTR('더조은 it com 더조 iit asco Com qwer','asdf',10);

select POSITION('Co' in '더조은 it com 더조 iit asco Com qwer');



-- 변환
SELECT ASCII('A');

select UPPER('더조은 aBCd Efg'), LOWER('더조은 aBCd Efg');

select REPLACE('더조은 it com 더조 iit asco Com qwer', 'c','씨');

select REPEAT('asd',5);

select INSERT('asd dfg hjk',3,4,'we');
 --                        3부터 4글자 ==> we

select CONCAT('zzxx','eerr','장수풍뎅이');
select 'zzxx'+'eerr'+'장수풍뎅이';

select ltrim('     더조은 it     '), rtrim('     더조은 it     '), trim('     더조은 it     ');
select 
CHAR_LENGTH('     더조은 it     '),
CHAR_LENGTH(ltrim('     더조은 it     ')), 
CHAR_LENGTH(rtrim('     더조은 it     ')), 
CHAR_LENGTH(trim('     더조은 it     '));

select lpad('더조은 it',10,'@'), rpad('더조은 it',10,'@');

select lpad('더조은0123456789',10,'@'), rpad('더조은0123456789',10,'@');

select REVERSE('qwer tyui op');

-- 1 ==> A학기, 2 ==> B학기 로 바꾸어 출력하세요