var configurator = require("../../../support/configurator_service.js");

var test = {
    "name": "PEXConfig. - Serviceprodukt Schnur Ersetzen",
    "service": "Schnur Ersetzen",
    "url": "/reparaturauftrag-schnur-ersetzen",
    "produkttyp": "Serviceprodukt",
    "bestellnummer": "1000555",
    "breite": "800",
    "hoehe": "1000",
    "laenge_neu": "1200",
    "produkt": "riva-2014",

    "anzahl": 2,
    "grundpreis": 30,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Alexander",
    "last_name": "Bauer",
    "email": "test@delphinus-test.de",
    "street": "Hochbrüggen 5",
    "postal_code": "2365",
    "city": "Graz",
    "state": "Österreich",
    "phone": "999888",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Serviceprodukt Schnur Ersetzen', () => {
    configurator.configureService(test)
})
