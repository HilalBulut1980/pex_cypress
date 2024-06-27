var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Stick&Fix- einzelne Montageplatten",
    "produkt": "Stick&Fix- einzelne Montageplatten",
    "url": "/montageplatten-einzeln",
    "abPreis": "9,35",
    "produkttyp": "Zubehoer",
    "option1": "3 Montageplatten inkl. Klebepads +8,00 €",
    "option2": "",

    "anzahl": 2,
    "grundpreis": 17.35,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.50,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Mahmoudi",
    "email": "test@delphinus-test.de",
    "street": "Via Cardinale 11",
    "postal_code": "2145",
    "city": "Venedig",
    "state": "Italien",
    "phone": "114477",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Stick&Fix- einzelne Montageplatten', () => {
    configurator.configureZubehoer(test)
})
