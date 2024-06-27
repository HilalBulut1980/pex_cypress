var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Klemmträger",
    "produkt": "Klemmträger",
    "url": "/klemmtraeger",
    "abPreis": "7,50",
    "produkttyp": "Zubehoer",
    "option1": "schwarzbraun",
    "option2": "3 Klemmträger +7,00 €",  //7,50 + 7

    "anzahl": 4,
    "grundpreis": 14.50,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marlene",
    "last_name": "Hansen",
    "email": "test@delphinus-test.de",
    "street": "Zierlistr. 25a",
    "postal_code": "2365",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "265487",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Klemmträger', () => {
    configurator.configureZubehoer(test)
})
