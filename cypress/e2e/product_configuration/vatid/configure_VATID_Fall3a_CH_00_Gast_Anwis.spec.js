var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "Umsatzsteuertest Fall 3a CH",
    "produkt": "Abdunkelnd 5024",  //PG2 R5,6
    "stoff_url": "/abdunkelnd-5024",
    "supplier": "Anwis",
    "abPreis": "73,00", //-5,00 | -35%
    "abPreis_red": "44,20", 
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "kosten_befestigung": "20,00",
    "hoehe": "1800",
    "breite": "1000",
    "schienenfarbe": "silber",
    "bediengriff": "",
    "bedienstab": "Bedienstab (200 cm)",  //+52

    "anzahl": 3,
    "grundpreis": 279,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Norah",
    "last_name": "Lilienfeld",
    "company_name": "",
    "vatID": "",
    "email": "norah@delphinus-test.de",
    "password": "",
    "street": "Lange Reihe 57",
    "postal_code": "0215",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VAT ID order - Fall 3a CH', () => {
    //configurator.configureVertical(test) --> PEX-3239
})
