var configurator = require("../../../support/configurator_roof.js");

var test = {
    "name": "PEXConfig. - DF20-nonst._Wabe",
    "produkt": "Sirmione-2024",  //PG4
    "stoff_url": "sirmione-2024",
    "abPreis": "151,00", //146+5 (Preis für ungenormte DF mit PG4 = 146,00 )
    "abPreis_red": "99,90", //R 5,6 +5,00 --> 151-5 -35% +5,00 = 99,90
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1100",
    "df_glashoehe": "1100",
    "df_falztiefe": "40",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1200", //1200 x 1200
    "df_falzart": "Schräger Falz mit Schattenfuge",
    //"df_falzart": "falzschattenfuge",
    "schienenfarbe": "weiss",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (200 cm)", //+52,00

    "anzahl": 3,
    "grundpreis": 400,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, //simulierter aufpreis
    "bedienstab_preis": 52,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,  //bedienstab
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 18",
    "postal_code": "1110",
    "city": "Cannes",
    "state": "Frankreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of nonstandard DF 20 Wabe with Sirmione-2024', () => {
    configurator.configureRoof(test)
})