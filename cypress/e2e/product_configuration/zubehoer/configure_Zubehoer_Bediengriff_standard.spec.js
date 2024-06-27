var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Bediengriff (Standard)",
    "produkt": "Bediengriff (Standard)",
    "url": "/bediengriff-standard-neu",
    "abPreis": "7,00",
    "produkttyp": "Zubehoer",
    "option1": "grau",
    "option2": "",

    "anzahl": 5,
    "grundpreis": 7,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Jens",
    "last_name": "Friedrichsen",
    "email": "test@delphinus-test.de",
    "street": "Steparedlo 65",
    "postal_code": "14785",
    "city": "Split",
    "state": "Kroatien",
    "phone": "19876",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Bediengriff (Standard)', () => {
    configurator.configureZubehoer(test)
})
