var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Falzverlängerung / Sockelplatte",
    "produkt": "Falzverlängerung / Sockelplatte",
    "url": "/sockelplatten",
    "abPreis": "7,70",
    "produkttyp": "Zubehoer",
    "option1": "weiß",
    "option2": "",

    "anzahl": 8,
    "grundpreis": 7.70,
    "vat": 118,
    "mwst_1": 18,
    "versandkosten": 19.84,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Morena",
    "last_name": "Valenzuela",
    "email": "test@delphinus-test.de",
    "street": "Via Nordia",
    "postal_code": "6548",
    "city": "Valletta",
    "state": "Malta",
    "phone": "123987",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Falzverlängerung / Sockelplatte', () => {
    configurator.configureZubehoer(test)
})
