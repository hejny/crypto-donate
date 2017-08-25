START TRANSACTION;


CREATE TABLE `donates` (
  `uuid` varchar(128) COLLATE utf8_czech_ci NOT NULL,
  `name` varchar(200) COLLATE utf8_czech_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
  `currency` enum('BTC') COLLATE utf8_czech_ci DEFAULT NULL,
  `address` varchar(34) COLLATE utf8_czech_ci DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


ALTER TABLE `donates`
  ADD PRIMARY KEY (`uuid`);
COMMIT;
