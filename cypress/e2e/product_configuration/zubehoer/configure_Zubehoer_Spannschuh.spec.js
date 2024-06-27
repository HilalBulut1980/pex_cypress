var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Spannschuh",
    "produkt": "Spannschuh",
    "url": "/spannschuh",
    "abPreis": "4,15",
    "produkttyp": "Zubehoer",
    "option1": "schwarzbraun",
    "option2": "3 Spannschuhe +3,00 €",

    "anzahl": 4,
    "grundpreis": 7.15,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Alain",
    "last_name": "Victor",
    "email": "test@delphinus-test.de",
    "street": "Laisweg 30",  
    "postal_code": "3254",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Spannschuh', () => {
    configurator.configureZubehoer(test)
})
