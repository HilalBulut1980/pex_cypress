var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Halteclip groß",
    "produkt": "Halteclip groß",
    "url": "/halteclip-gross",
    "abPreis": "5,00",
    "produkttyp": "Zubehoer",
    "option1": "silber",
    "option2": "",

    "anzahl": 12,
    "grundpreis": 5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 20,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Renate",
    "last_name": "Meier",
    "email": "test@delphinus-test.de",
    "street": "Main Street 10",
    "postal_code": "3658",
    "city": "Bukarest",
    "state": "Rumänien",
    "phone": "665588",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Halteclip groß', () => {
    configurator.configureZubehoer(test)
})
