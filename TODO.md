
- PHP verze 7.1
- Jasně, udělej to bez frameworku
- MySQL



- V celému projektu bude config.php, kde budou loginy do DB a API klíče, ty si samozřejmě pro testovací účeli obstarám sám a ty je nahradíš těmi pravými tajnými.


- HTML formulář (částka v BT, jméno, vzkaz - limit na 255 znaků, email). Poviná jen částka. CSS si nastyluju sám, stačí surové HTML.
- po odeslání se vygeneruje bitcoin adresa + uloží se do DB všechny údaje
- adresa se generuje přes API Coinbase. Stejně tak se přes API kontrolje (asi CRONem na serveru?), zda dorazila platba,
- úspěšný donate mi server vrátí přes JSON (tam si ho už natáhnu sám do overlayeru).
+ asi by bylo dobré myslet na to, aby šly případně v budoucnu implementovat i další kryptoměny








formular
api