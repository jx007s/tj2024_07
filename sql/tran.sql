-- Active: 1728897126436@@127.0.0.1@3306@tran_db

-- autocommit 상태 확인
-- 1: 설정, 0:해제
select @@autocommit;

create table stud(
    sid VARCHAR(50) PRIMARY key,
    sname text not null,
    tel text UNIQUE,
    addr text
);

insert into stud (sid, sname) VALUES
('aa','장동건'),
('bb','장서건'),
('cc','장동건');


insert into stud (sid, sname) VALUES
('dd','정우성');
insert into stud (sid, sname) VALUES
('ee','정우성');
insert into stud (sid, sname) VALUES
('ff','정좌성');


insert into stud (sid, sname) VALUES
('gg','이효리'),
('hh','이효리'),
('gg','삼효리');


insert into stud (sid, sname) VALUES
('ii','한가인');
insert into stud (sid, sname) VALUES
('jj','한가인');
insert into stud (sid, sname) VALUES
('ii','두가인');

-- autocommit 해제
set @@autocommit = 0;

insert into stud (sid, sname) VALUES
('11','아기상어');
insert into stud (sid, sname) VALUES
('22','엄마상어');

commit;  -- 저장

select * from stud;



insert into stud (sid, sname) VALUES
('33','아빠상어');
insert into stud (sid, sname) VALUES
('44','할머니상어');

-- 되돌리기 : 이전 commit 상태로 되돌리기
ROLLBACK;


insert into stud (sid, sname) VALUES
('55','장수풍뎅이');
insert into stud (sid, sname) VALUES
('66','사슴벌레');

savepoint A;

insert into stud (sid, sname) VALUES
('77','잠자리');
insert into stud (sid, sname) VALUES
('88','메뚜기');

savepoint B;

insert into stud (sid, sname) VALUES
('99','나비');
insert into stud (sid, sname) VALUES
('100','나방');


ROLLBACK to SAVEPOINT B;
ROLLBACK to SAVEPOINT A;

/* -- 한번 실행된 rollback으로 회기 불가
ROLLBACK to SAVEPOINT B;
*/

rollback;


-- autocommit 설정
set @@autocommit = 1;

insert into stud (sid, sname) VALUES
('zz','티라노사우루스');

-- 각자 Database, user 새로 만들어서 작업하세요
-- 다른 사람의 DB 에 학생을 5명 입력하세요
-- 1분뒤 적용하세요
-- 3명 더 입력하세요
-- 2분뒤 적용하세요
-- 2명더 입력하세요
-- 1분 뒤 되돌리세요

