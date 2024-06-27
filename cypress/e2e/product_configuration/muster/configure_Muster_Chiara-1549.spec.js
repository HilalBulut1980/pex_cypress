var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Chiara-1549",
    "produkt": "Chiara 1549",
    "stoff_url": "chiara-1549",
    "abPreis": "73,00",
    "abPreis_red": "37,40",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "21",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Manuel",
    "last_name": "Kimmy",
    "email": "test@delphinus-test.de",
    "street": "Hamburger Damm 99",
    "postal_code": "12457",
    "city": "Riga",
    "state": "Lettland",
    "phone": "95784",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Chiara-1549', () => {
    configurator.configureMuster(test)
}) 