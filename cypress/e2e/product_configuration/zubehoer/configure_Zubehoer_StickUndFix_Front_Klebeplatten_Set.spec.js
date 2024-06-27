var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Stick&Fix Front Klebeplattenset",
    "produkt": "Stick&Fix Front Klebeplattenset",
    "url": "/klebeplatten-front",
    "abPreis": "20,00",
    "produkttyp": "Zubehoer",
    "option1": "",
    "option2": "",

    "anzahl": 3,
    "grundpreis": 20,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Heinz",
    "last_name": "Manner",
    "email": "test@delphinus-test.de",
    "street": "Klosterdamm 11",
    "postal_code": "1025",
    "city": "Wien",
    "state": "Österreich",
    "phone": "774411",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Stick&Fix Front Klebeplattenset', () => {
    configurator.configureZubehoer(test)
})
