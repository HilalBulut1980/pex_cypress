var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Zubehör Klemmträger Slim Set",
    "produkt": "Klemmträger Slim Set",
    "url": "/klemmtraeger-slim",
    "abPreis": "20,00",
    "produkttyp": "Zubehoer",
    "option1": "schwarzbraun",
    "option2": "",

    "anzahl": 2,
    "grundpreis": 20,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 20.68,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Franco",
    "last_name": "Milara",
    "email": "test@delphinus-test.de",
    "street": "Via Cecenia 18",
    "postal_code": "1268",
    "city": "Porto",
    "state": "Portugal",
    "phone": "995511",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Zubehör Klemmträger Slim Set', () => {
    configurator.configureZubehoer(test)
})
