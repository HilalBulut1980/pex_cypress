var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "Umsatzsteuertest Fall 3a LUX",
    "produkt": "Triest 1030",  //PG1 R18
    "stoff_url": "triest-1030",
    "supplier": "Erfal",
    "abPreis": "67,00", //-25%
    "abPreis_red": "50,25", 
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 56.50,
    "discount_1": 0.75,
    "discount_2": 0,
    "discount_3": 0,
    "vat": 116,
    "mwst_1": 16,
    "mwst_2": 16,
    "versandkosten": 19.50,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Ela",
    "last_name": "David",
    "company_name": "Lidl Luxemburg",
    "vatID": "",
    "email": "ela@delphinus-test.de",
    "password": "",
    "street": "Berliner Allee 32",
    "postal_code": "123587",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VAT ID order - EU-Staat/Gast', () => {
    configurator.configureVertical(test)
})
