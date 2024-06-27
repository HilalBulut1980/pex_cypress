var configurator = require("../../../support/configurator_roof.js");

var test = {
    "name": "PEXConfig. - DF20C-nonst._Wabe",
    "produkt": "Camera-Blackout-4963",  //PG 3
    "stoff_url": "camera-blackout-4963",
    "abPreis": "176,00",  //171 + 5 (Preis für ungenormte DFC Wabe mit PG3 = 171,00 )
    "abPreis_red": "116,15",  //R 5,6 + 5,00 --> 176-5 -35% +5,00 = 116,15
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "500",
    "df_glashoehe": "800",
    "df_falztiefe": "50",
    "df_fluegelbreite": "550",
    "df_fluegelhoehe": "850", //900x600
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "grau",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50

    "anzahl": 1,
    "grundpreis": 247,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, //simulierter aufpreis
    "bedienstab_preis": 56.50,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 121,
    "mwst_1": 21,
    "mwst_2": 21,  //bedienstab
    "versandkosten": 20.35,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 19",
    "postal_code": "1110",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of nonstandard DF 20 Comfort with Camera-Blackout-4963', () => {
    configurator.configureRoof(test)
})