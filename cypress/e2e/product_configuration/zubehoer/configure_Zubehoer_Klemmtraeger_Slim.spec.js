var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Klemmträger Slim",
    "produkt": "Klemmträger Slim",
    "url": "/klemmtraeger-slim-einzeln",
    "abPreis": "7,00",
    "produkttyp": "Zubehoer",
    "option1": "grau",
    "option2": "",

    "anzahl": 4,
    "grundpreis": 7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Ulrich",
    "last_name": "Soest",
    "email": "test@delphinus-test.de",
    "street": "Klosterneuburger Ring 10",
    "postal_code": "1011",
    "city": "Wien",
    "state": "Österreich",
    "phone": "114488",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Klemmträger Slim', () => {
    configurator.configureZubehoer(test)
})
