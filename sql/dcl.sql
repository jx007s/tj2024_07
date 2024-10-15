-- Active: 1728348058583@@127.0.0.1@3306@study_db

-- 기본키 : PRIMARY key
-- not null
-- UNIQUE
create table stud(
    sid VARCHAR(50) PRIMARY key,
    sname text not null,
    tel text UNIQUE,
    addr text
);

select * from stud;

insert into stud (sid, sname, tel, addr) values
('aaa','학생1','1111','우리집');

/*
PK 중복
insert into stud (sid, sname, tel, addr) values
('aaa','학생3','3333','우리집');

PK null
insert into stud (sname, tel, addr) values
('학생3','3333','우리집');


sname - null
insert into stud (sid, tel, addr) values
('ccc','3333','우리집');
*/

-- sname 중복 허용
insert into stud (sid, sname, tel, addr) values
('ccc','학생1','3333','우리집');

/*
-- tel unique
insert into stud (sid, sname, tel, addr) values
('ddd','학생1','3333','우리집');
*/

insert into stud (sid, sname ) values
('ddd','학생1');


-- 테이블 구조 확인
select * from information_schema.COLUMNS
where TABLE_SCHEMA = 'study_db' and table_name='stud2';


select COLUMN_NAME ,COLUMN_TYPE, COLUMN_KEY from information_schema.COLUMNS
where TABLE_SCHEMA = 'study_db' and table_name='stud2';


create table stud2(
    sid VARCHAR(50),
    sname text,
    tel text,
    addr text
);



-- [제약조건 추가]
-- PK 추가 : 제약 조건 이름을 지정해도 PRIMARY로 설정
alter table stud2 add constraint st2_pk PRIMARY key(sid);

-- unique 추가
alter table stud2 add constraint st2_tel_uni unique(tel);

-- not null 추가
--alter table stud2 add constraint st2_sname_notnull not null(sname);
alter table stud2 modify column sname text not null;

-- 제약조건 확인
select * from information_schema.TABLE_CONSTRAINTS
where TABLE_SCHEMA = 'study_db' and table_name='stud2';

insert into stud2 (sid, sname, tel, addr) values
('aaa','학생1','1111','우리집');

select * from stud2;

insert into stud2 (sid, sname, addr) values
('aaa','학생1','우리집');

insert into stud2 (sid,  tel, addr) values
('bbb','1111','우리집');

insert into stud2 (sid, sname, tel, addr) values
('ccc','학생1','1111','우리집');

-- [제약조건 삭제]
-- PK 삭제
alter table stud2 drop PRIMARY key;
alter table stud2 modify column sid varchar(50) null;

-- unique 삭제
alter table stud2 drop index st2_tel_uni;

-- not null -> null 변경
alter table stud2 modify column sname text null;

/*
 AUTO_INCREMENT 불가
create table stud3(
    sid int PRIMARY key AUTO_INCREMENT,
    sname text not null,
    tel text UNIQUE,
    addr text,
    age int AUTO_INCREMENT
);

create table stud3(
    sid VARCHAR(50) PRIMARY key AUTO_INCREMENT,
    sname text not null,
    tel text UNIQUE,
    addr text,
    age int AUTO_INCREMENT
);
*/

create table stud3(
    sid int PRIMARY key AUTO_INCREMENT,
    sname text not null,
    tel text,
    addr text,
    constraint st3_tel_uni unique(tel)
);

insert into stud3 (sid, sname, tel, addr) values
(1,'학생1','1111','우리집');

insert into stud3 (sname, addr) values
('학생4','우리집');

insert into stud3 (sid,sname, addr) values
(10,'학생3','우리집');

select * from stud3;

-- 증가값 조절 (세션 대비 설정)
set @@AUTO_INCREMENT_INCREMENT = 10;


create table stud4(
    sid int,
    sname text not null,
    tel text,
    addr text
);

-- 기존 컬럼에 PK + AUTO_INCREMENT 설정
alter table stud4 modify sid int AUTO_INCREMENT PRIMARY key;


create table stud5(
    sname text not null,
    tel text,
    addr text
);

-- 컬럼 새로 추가 :  PK + AUTO_INCREMENT 설정
alter table stud5 add sid int AUTO_INCREMENT PRIMARY key;


-- 외래키(FK)
-- 참조하는 테이블의 기본키를 외래키로 사용
-- 외래키 -> 참조하는 기본컬럼에 있는 내용 혹은 null 만 허용
-- 1:다 관계 형성


create table ticket(
    tid int,
    reg_date DATETIME,
    title text,
    fid varchar(50),
    constraint ticket_fid_fk FOREIGN key(fid) REFERENCES stud(sid)
);
-- constraint ticket_fid_fk FOREIGN key(fid) REFERENCES stud(sid)
--            제약이름         외래키를 : fid 에 설정
--                                                    참조하는 테이블 : stud , 컬럼 : sid(PK)

-- 정상입력
insert into ticket ( tid, reg_date, title, fid ) values
(1,'2020-09-03', '식권7000','aaa');

insert into ticket ( tid, reg_date, title, fid ) values
(1,'2020-09-03', '식권7000','bbb');

/*
 fff 가 참조하는 테이블에 없음
insert into ticket ( tid, reg_date, title, fid ) values
(1,'2020-09-03', '식권7000','fff');
*/

insert into ticket ( tid, reg_date, title) values
(1,'2020-09-03', '식권7000');

delete from stud where sid = 'ccc';

/* bbb를 ticket의 fid 에서 참조하고 있어 삭제 불가
delete from stud where sid = 'bbb';
*/

drop table stud3;

drop table stud2;

/* bbb를 ticket의 fid 에서 참조하고 있어 삭제 불가
drop table stud;
*/

-- 외래키 제약 조건 제거
alter table ticket drop  FOREIGN key ticket_fid_fk;

delete from stud where sid = 'bbb';

drop table stud;

/*
게시판(qwer) 테이블 - 글 5개
id - 기본키 (자동번호 증가)
제목 - not null
내용
날짜시간 - unique


댓글(zxcv) 테이블 - 기본글 2개 에 댓글 달기
id  - 기본키 (자동번호 증가)
gid - qwer 참조
내용 - not null
*/

create table qwer(
    id int PRIMARY key AUTO_INCREMENT,
    title text not null,
    content text,
    regdate DATETIME unique
);

insert into qwer (title, content, regdate) values
('제목1','내용1','2023-05-06'),
('제목2','내용2','2023-08-06'),
('제목3','내용3','2023-11-06'),
('제목4','내용4','2023-12-06'),
('제목5','내용5',sysdate());

select * from qwer;


create table zxcv(
    id int PRIMARY key AUTO_INCREMENT,
    gid int,
    content text,
    constraint zxcv_gid_fk FOREIGN key(gid) REFERENCES qwer(id)
);
insert into zxcv (gid, content) values
(7,'댓글1'),
(7,'댓글2'),
(9,'댓글3'),
(9,'댓글4'),
(7,'댓글5');

select * from zxcv;

