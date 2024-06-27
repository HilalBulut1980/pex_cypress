var configurator = require("../../../support/configurator_roof.js");

var test = {
    "name": "PEXConfig. - DF20C-nonstandard",
    "produkt": "Selene 4535",  //PG 2
    "stoff_url": "selene-4535",
    "abPreis": "135,00",  //130 + 5,00 (Preis für ungenormte DFC mit PG2 = 130,00 )
    "abPreis_red": "102,50",  // R5, 18 --> 135-5,00 -25% danach +5,00 = 102,50
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "900",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1000",  //1000 x 1000
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "grau",
    "bedienstab": "Bedienstab (250 cm)",  //56,50

    "anzahl": 2,
    "grundpreis": 264,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 56.50,  
    "discount_1": 0.75,  //-25%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,  //bedienstab
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 25",
    "postal_code": "1110",
    "city": "Graz",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of nonstandard DF 20 Comfort with Selene-4535', () => {
    configurator.configureRoof(test)
})