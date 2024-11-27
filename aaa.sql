-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        11.5.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 study_db.exam 구조 내보내기
DROP TABLE IF EXISTS `exam`;
CREATE TABLE IF NOT EXISTS `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hakgi` int(11) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `pid` text DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `kor` int(11) DEFAULT NULL,
  `eng` int(11) DEFAULT NULL,
  `mat` int(11) DEFAULT NULL,
  `upSystem` varchar(255) DEFAULT NULL,
  `upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.exam:~11 rows (대략적) 내보내기
DELETE FROM `exam`;
INSERT INTO `exam` (`id`, `hakgi`, `name`, `pid`, `reg_date`, `kor`, `eng`, `mat`, `upSystem`, `upOri`) VALUES
	(4, 1, 'final', 'fff', '2019-07-04', NULL, 65, 57, NULL, NULL),
	(6, 2, 'semi', 'mmm', '2019-10-04', 45, 68, 77, NULL, NULL),
	(7, 2, 'final', 'rrr', '2019-12-04', 84, 85, 107, NULL, NULL),
	(13, 2, 'semi', 'qqq', '2018-05-06', 67, 11, 33, NULL, NULL),
	(24, 1, 'semi', 'aaa', '2024-11-04', 66, 67, 65, '2024-09-02 14 07 491730701825013.png', '2024-09-02 14 07 49.png'),
	(26, 1, 'semi', 'qazx', '2024-11-13', 56, 98, 3, 'a_(12)1731481856136.JPG', 'a_(12).JPG'),
	(28, 1, 'semi', 'ddd', '2024-11-13', 56, 67, 78, 'thumb (2)1731483891363.jpg', 'thumb (2).jpg'),
	(29, 1, 'semi', 'bgt11', '2024-11-13', 66, 33, 64, 'thumb (9)1731485432212.jpg', 'thumb (9).jpg'),
	(30, 2, 'semi', 'fwewef', '2024-11-14', 11, 22, 33, 'thumb (7)1731556369628.jpg', 'thumb (7).jpg'),
	(35, 2, 'final', 'ccc', '2024-11-18', 56, 55, 54, 'thumb (9)1731894954799.jpg', 'thumb (9).jpg'),
	(36, 2, 'final', 'ccc', '2024-11-18', 56, 55, 54, 'thumb (9)1731895018560.jpg', 'thumb (9).jpg');

-- 테이블 study_db.menu_1 구조 내보내기
DROP TABLE IF EXISTS `menu_1`;
CREATE TABLE IF NOT EXISTS `menu_1` (
  `title` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.menu_1:~4 rows (대략적) 내보내기
DELETE FROM `menu_1`;
INSERT INTO `menu_1` (`title`, `price`) VALUES
	('김치찌개', 5000),
	('된장찌개', 4000),
	('떡라면', 3000),
	('떡볶이', 2000);

-- 테이블 study_db.menu_2 구조 내보내기
DROP TABLE IF EXISTS `menu_2`;
CREATE TABLE IF NOT EXISTS `menu_2` (
  `title` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.menu_2:~4 rows (대략적) 내보내기
DELETE FROM `menu_2`;
INSERT INTO `menu_2` (`title`, `price`) VALUES
	('김치찌개', 5000),
	('오므라이스', 6000),
	('라면', 2500),
	('된장찌개', 4500);

-- 테이블 study_db.menu_3 구조 내보내기
DROP TABLE IF EXISTS `menu_3`;
CREATE TABLE IF NOT EXISTS `menu_3` (
  `title` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.menu_3:~3 rows (대략적) 내보내기
DELETE FROM `menu_3`;
INSERT INTO `menu_3` (`title`, `price`) VALUES
	('물냉면', 5500),
	('만두', 4500),
	('비빔냉면', 6500);

-- 뷰 study_db.myexper_1 구조 내보내기
DROP VIEW IF EXISTS `myexper_1`;
-- VIEW 종속성 오류를 극복하기 위해 임시 테이블을 생성합니다.
CREATE TABLE `myexper_1` (
	`id` INT(11) NOT NULL,
	`hakgi` INT(11) NULL,
	`name` TEXT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`pid` TEXT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`reg_date` DATE NULL,
	`kor` INT(11) NULL,
	`eng` INT(11) NULL,
	`mat` INT(11) NULL,
	`tot` BIGINT(13) NULL,
	`average` DECIMAL(16,4) NULL,
	`per_date` DATETIME NULL,
	`pname` VARCHAR(100) NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`year` VARCHAR(10) NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`phone` INT(11) NULL,
	`fr` TEXT NULL COLLATE 'utf8mb4_uca1400_ai_ci'
) ENGINE=MyISAM;

-- 뷰 study_db.myexper_2 구조 내보내기
DROP VIEW IF EXISTS `myexper_2`;
-- VIEW 종속성 오류를 극복하기 위해 임시 테이블을 생성합니다.
CREATE TABLE `myexper_2` (
	`id` INT(11) NOT NULL,
	`hakgi` INT(11) NULL,
	`name` TEXT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`pid` TEXT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`reg_date` DATE NULL,
	`kor` INT(11) NOT NULL,
	`eng` INT(11) NOT NULL,
	`mat` INT(11) NOT NULL,
	`tot` BIGINT(13) NOT NULL,
	`average` DECIMAL(16,4) NULL,
	`grade` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`pname` VARCHAR(100) NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`phone` INT(11) NULL
) ENGINE=MyISAM;

-- 테이블 study_db.notice 구조 내보내기
DROP TABLE IF EXISTS `notice`;
CREATE TABLE IF NOT EXISTS `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hakgi` int(11) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `pid` text DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `kor` int(11) DEFAULT NULL,
  `eng` int(11) DEFAULT NULL,
  `mat` int(11) DEFAULT NULL,
  `upSystem` varchar(255) DEFAULT NULL,
  `upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.notice:~1 rows (대략적) 내보내기
DELETE FROM `notice`;
INSERT INTO `notice` (`id`, `hakgi`, `name`, `pid`, `reg_date`, `kor`, `eng`, `mat`, `upSystem`, `upOri`) VALUES
	(40, 1, 'semi', 'vvv', '2024-11-18', 77, 75, 71, 'thumb1731906534010.jpg', 'thumb.jpg');

-- 테이블 study_db.person 구조 내보내기
DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `pname` varchar(100) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `reg_date` datetime DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `pid` text DEFAULT NULL,
  `fr` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.person:~22 rows (대략적) 내보내기
DELETE FROM `person`;
INSERT INTO `person` (`pname`, `year`, `reg_date`, `phone`, `pid`, `fr`) VALUES
	('이효리', '20', '2020-09-08 12:23:45', 116, 'ddd', 'eee'),
	('정우a성', '30', '1988-08-08 08:08:08', 22, 'eee', 'fff'),
	('사효이', '17', '2023-04-05 19:43:23', NULL, 'fff', 'eee'),
	('장12동건', '17', '2024-10-08 11:05:49', 449, 'aaa', NULL),
	('정우성', '17', '1999-09-19 00:00:00', NULL, 'ttt', 'ttt'),
	('두@이인', NULL, '2015-05-06 15:30:40', NULL, 'bbb', NULL),
	('두.가인', NULL, '2017-08-13 00:00:00', NULL, 'ccc', 'eee'),
	('이가인', NULL, '2019-09-25 16:31:40', NULL, 'ggg', 'ccc'),
	('아기상어', NULL, NULL, NULL, NULL, 'fff'),
	('이이이', NULL, NULL, NULL, NULL, 'ddd'),
	('이건', NULL, NULL, NULL, NULL, 'ddd'),
	('감수성', NULL, NULL, NULL, NULL, 'ddd'),
	('정QQ성윤', NULL, NULL, NULL, NULL, 'mmm'),
	('삼건모', NULL, NULL, NULL, NULL, 'ddd'),
	('성건', NULL, NULL, NULL, NULL, 'fff'),
	('사성건', NULL, NULL, NULL, NULL, 'ddd'),
	('123', NULL, NULL, NULL, NULL, 'ddd'),
	('asdf', NULL, NULL, NULL, NULL, 'mmm'),
	('12asd', NULL, NULL, NULL, NULL, 'fff'),
	('이', NULL, NULL, NULL, NULL, 'ddd'),
	('이이', NULL, NULL, NULL, NULL, 'fff'),
	('이건건', '1', NULL, NULL, NULL, 'ddd');

-- 테이블 study_db.ppp 구조 내보내기
DROP TABLE IF EXISTS `ppp`;
CREATE TABLE IF NOT EXISTS `ppp` (
  `pname` varchar(100) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- 테이블 데이터 study_db.ppp:~3 rows (대략적) 내보내기
DELETE FROM `ppp`;
INSERT INTO `ppp` (`pname`, `year`, `phone`) VALUES
	('장동건', '54', 1234),
	('장서건', '36', 5678),
	('장남건', '23', 9012);

-- 임시 테이블을 제거하고 최종 VIEW 구조를 생성
DROP TABLE IF EXISTS `myexper_1`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `myexper_1` AS select `exam`.`id` AS `id`,`exam`.`hakgi` AS `hakgi`,`exam`.`name` AS `name`,`exam`.`pid` AS `pid`,`exam`.`reg_date` AS `reg_date`,`exam`.`kor` AS `kor`,`exam`.`eng` AS `eng`,`exam`.`mat` AS `mat`,`exam`.`kor` + `exam`.`eng` + `exam`.`mat` AS `tot`,(`exam`.`kor` + `exam`.`eng` + `exam`.`mat`) / 3 AS `average`,`person`.`reg_date` AS `per_date`,`person`.`pname` AS `pname`,`person`.`year` AS `year`,`person`.`phone` AS `phone`,`person`.`fr` AS `fr` from (`exam` left join `person` on(`exam`.`pid` = `person`.`pid`));

-- 임시 테이블을 제거하고 최종 VIEW 구조를 생성
DROP TABLE IF EXISTS `myexper_2`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `myexper_2` AS select `ex`.`id` AS `id`,`ex`.`hakgi` AS `hakgi`,`ex`.`name` AS `name`,`ex`.`pid` AS `pid`,`ex`.`reg_date` AS `reg_date`,`ex`.`kor` AS `kor`,`ex`.`eng` AS `eng`,`ex`.`mat` AS `mat`,`ex`.`kor` + `ex`.`eng` + `ex`.`mat` AS `tot`,(`ex`.`kor` + `ex`.`eng` + `ex`.`mat`) / 3 AS `average`,substr('가양미우수',interval(floor((`ex`.`kor` + `ex`.`eng` + `ex`.`mat`) / 3),0,60,70,80,90),1) AS `grade`,`person`.`pname` AS `pname`,`person`.`phone` AS `phone` from ((select `exam`.`id` AS `id`,`exam`.`hakgi` AS `hakgi`,`exam`.`name` AS `name`,`exam`.`pid` AS `pid`,`exam`.`reg_date` AS `reg_date`,ifnull(`exam`.`kor`,-5) AS `kor`,ifnull(`exam`.`eng`,-5) AS `eng`,ifnull(`exam`.`mat`,-5) AS `mat` from `exam`) `ex` left join `person` on(`ex`.`pid` = `person`.`pid`));

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
