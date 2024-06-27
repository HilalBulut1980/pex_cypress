var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - FDS4",
    "produkt": "Ferrara 1084",  //PG 4 R5,6
    "stoff_url": "ferrara-1084",
    "abPreis": "222,00",
    "abPreis_red": "141,05",  //-5,00 -35%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "befestigung": "am_fensterfluegel",
    "breite": "1000",
    "hoehe": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "weiss",

    "anzahl": 1,
    "grundpreis": 409,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 29",
    "postal_code": "1110",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of FDS4 with Klemmträger and Ferrara-1084', () => {
    configurator.configureSpecialForms(test)
})