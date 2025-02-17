var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Wandwinkel",
    "produkt": "Wandwinkel",
    "url": "/wandwinkel",
    "abPreis": "5,00",
    "produkttyp": "Zubehoer",
    "option1": "weiß",
    "option2": "3 Wandwinkel +5,00 €",  //5,00 + 5,00

    "anzahl": 10,
    "grundpreis": 10,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Marco",
    "last_name": "Santos",
    "email": "test@delphinus-test.de",
    "street": "Via Liberale 66",
    "postal_code": "4587",
    "city": "Vilnius",
    "state": "Litauen",
    "phone": "123654",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Wandwinkel', () => {
    configurator.configureZubehoer(test)
})
