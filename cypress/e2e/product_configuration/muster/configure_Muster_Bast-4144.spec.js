var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Bast-4144",
    "produkt": "Bast 4144",
    "stoff_url": "bast-4144",
    "abPreis": "73,00",
    "abPreis_red": "44,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    //Backend
    "vat_rate": "22",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Sandra",
    "last_name": "Bauer",
    "email": "test@delphinus-test.de",
    "street": "Treustr. 254",
    "postal_code": "32587",
    "city": "Catania",
    "state": "Italien",
    "phone": "1235258",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Bast-4144', () => {
    configurator.configureMuster(test)
})