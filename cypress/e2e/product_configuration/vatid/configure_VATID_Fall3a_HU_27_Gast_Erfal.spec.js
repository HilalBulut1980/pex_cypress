var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "Umsatzsteuertest Fall 3a HU",
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
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 56.504,
    "discount_1": 0.75,
    "discount_2": 0,
    "discount_3": 0,
    "vat": 127,
    "mwst_1": 27,
    "mwst_2": 27,
    "versandkosten": 21.35,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Ela",
    "last_name": "David",
    "company_name": "Lidl Hungary",
    "vatID": "",
    "email": "ela@delphinus-test.de",
    "password": "",
    "street": "Carrer de Balmes 115",
    "postal_code": "08018",
    "city": "Budapest",
    "state": "Ungarn",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VAT ID order - EU-Staat/Gast', () => {
    configurator.configureVertical(test)
})
