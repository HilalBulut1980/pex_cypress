var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Verdrehsicherung",
    "produkt": "Verdrehsicherung",
    "url": "/verdrehsicherung",
    "abPreis": "4,00",
    "produkttyp": "Zubehoer",
    "option1": "weiß",
    "option2": "",

    "anzahl": 4,
    "grundpreis": 4,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Alexander",
    "last_name": "Cheng",
    "email": "test@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "654789",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Verdrehsicherung', () => {
    configurator.configureZubehoer(test)
})
