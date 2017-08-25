





todo endpoints









CREATE TABLE `donates` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_czech_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
  `currency` enum('BTC') COLLATE utf8_czech_ci DEFAULT NULL,
  `address` varchar(34) COLLATE utf8_czech_ci DEFAULT NULL,
  `amount` float(10,10) NOT NULL DEFAULT '0.0000000000',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `donates`
--
ALTER TABLE `donates`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `donates`
--
ALTER TABLE `donates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;COMMIT;
