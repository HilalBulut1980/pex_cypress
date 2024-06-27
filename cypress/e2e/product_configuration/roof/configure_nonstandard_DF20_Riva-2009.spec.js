var configurator = require("../../../support/configurator_roof.js");

var test = {
    "name": "PEXConfig. - DF20-nonstandard",
    "produkt": "Riva 2009",  //PG 3
    "stoff_url": "riva-2009",
    "abPreis": "118,00",  //113 + 5 (Preis für ungenormte DF mit PG3 = 113 )
    "abPreis_red": "72,80", //R 5, 7 + 5,00 --> 113 - 5,00 -40% |+5,00 = 72,80
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "1000",
    "df_falztiefe": "40",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1100",  // 1100 x 1000
    "df_falzart": "Schräger Falz mit Schattenfuge",
    "schienenfarbe": "weiss",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (250 cm)",  //+ 56,50

    "anzahl": 1,
    "grundpreis": 248,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 56.50,  
    "discount_1": 0.60,  //-40%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 124,
    "mwst_1": 24,
    "mwst_2": 24,  //bedienstab
    "versandkosten": 20.84,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 24",
    "postal_code": "1110",
    "city": "Patras",
    "state": "Griechenland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of nonstandard DF 20 with Riva-2009', () => {
    configurator.configureRoof(test)
})