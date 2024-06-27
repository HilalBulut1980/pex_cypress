var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Stick & Fix Front - einzeln",
    "produkt": "Stick & Fix Front - einzeln",
    "url": "/klebeplatten-front-einzeln",
    "abPreis": "10,00",
    "produkttyp": "Zubehoer",
    "option1": "3 Klebeplatten inkl. Klebepads +8,00 €",  //10+8
    "option2": "",

    "anzahl": 2,
    "grundpreis": 18,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Maria",
    "last_name": "Taubenwaller",
    "email": "test@delphinus-test.de",
    "street": "Karl-Arnold-Ring 5",
    "postal_code": "12345",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Stick&Fix- einzelne Klebepads', () => {
    configurator.configureZubehoer(test)
})
