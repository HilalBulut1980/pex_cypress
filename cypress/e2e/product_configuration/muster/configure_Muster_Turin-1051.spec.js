var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Turin-1051",
    "produkt": "Turin 1051",
    "stoff_url": "turin-1051",
    "abPreis": "73,00",
    "abPreis_red": "44,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "21",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Murat",
    "last_name": "Koparan",
    "email": "test@delphinus-test.de",
    "street": "Steinallee 32",
    "postal_code": "1234",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "665588",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Turin-1051', () => {
    configurator.configureMuster(test)
})