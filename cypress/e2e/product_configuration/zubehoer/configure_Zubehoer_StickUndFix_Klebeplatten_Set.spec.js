var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Stick & Fix Klebeplattenset",
    "produkt": "Stick & Fix Klebeplattenset",
    "url": "/klebeplatten",
    "abPreis": "20,00",
    "produkttyp": "Zubehoer",
    "option1": "",
    "option2": "",

    "anzahl": 2,
    "grundpreis": 20,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 20.84,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Manuela",
    "last_name": "Triebl",
    "email": "test@delphinus-test.de",
    "street": "Via Rotta 5",
    "postal_code": "123456",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "885522",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Stick & Fix Klebeplattenset', () => {
    configurator.configureZubehoer(test)
})
