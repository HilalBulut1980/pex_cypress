var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Bediengriff (Design)",
    "produkt": "Bediengriff (Design)",
    "url": "/bediengriff-design",
    "abPreis": "10,00",
    "produkttyp": "Zubehoer",
    "option1": "silbergrau",
    "option2": "",

    "anzahl": 6,
    "grundpreis": 10,
    "vat": 116,
    "mwst_1": 16,
    "versandkosten": 19.50,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lara",
    "last_name": "Monden",
    "email": "test@delphinus-test.de",
    "street": "Latviastreet 65",
    "postal_code": "6587",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "phone": "14785",
    "shipping": "same",   
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Bediengriff (Design)', () => {
    configurator.configureZubehoer(test)
})
