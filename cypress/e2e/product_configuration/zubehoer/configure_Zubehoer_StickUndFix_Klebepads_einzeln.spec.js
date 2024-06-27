var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Stick&Fix- einzelne Klebepads",
    "produkt": "Stick&Fix- einzelne Klebepads",
    "url": "/klebepads-einzeln",
    "abPreis": "8,00",
    "produkttyp": "Zubehoer",
    "option1": "4 Klebepads inkl. 1 Reinigungs- u. Haftvermittlertuch +2,00 €",  // 8 + 2
    "option2": "",

    "anzahl": 4,
    "grundpreis": 10,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Aman",
    "last_name": "Singh",
    "email": "test@delphinus-test.de",
    "street": "Kairing 10",
    "postal_code": "2154",
    "city": "Graz",
    "state": "Österreich",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Stick&Fix- einzelne Klebepads', () => {
    configurator.configureZubehoer(test)
})
