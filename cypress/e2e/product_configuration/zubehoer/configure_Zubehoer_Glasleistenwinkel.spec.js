var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Glasleistenwinkel",
    "produkt": "Glasleistenwinkel",
    "url": "/glasleistenwinkel",
    "abPreis": "12,00",
    "produkttyp": "Zubehoer",
    "option1": "grau, Montage oben (rechts & links)",
    "option2": "",

    "anzahl": 4,
    "grundpreis": 12,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Mia",
    "last_name": "Lehmann",
    "email": "test@delphinus-test.de",
    "street": "Steinstr. 20",
    "postal_code": "20095",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "996633",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Glasleistenwinkel', () => {
    configurator.configureZubehoer(test)
})
