var configurator = require("../../../support/configurator_service.js");

var test = {
    "name": "PEXConfig. - Serviceprodukt Änderungsauftrag Breite kürzen",
    "service": "Änderungsauftrag Breite Kürzen",
    "url": "/aenderungsauftrag-breite",
    "produkttyp": "Serviceprodukt",
    "bestellnummer": "1000999",
    "breite": "1400",
    "hoehe": "1600",
    "kuerzung": "100",
    "produkt": "Monza-1121",

    "anzahl": 2,
    "grundpreis": 50,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Laila",
    "last_name": "Gomez",
    "email": "test@delphinus-test.de",
    "street": "Via Colinale 33",
    "postal_code": "123456",
    "city": "Rom",
    "state": "Italien",
    "phone": "665544",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of Serviceprodukt Änderungsauftrag Breite Kürzen', () => {
    configurator.configureService(test)
})
