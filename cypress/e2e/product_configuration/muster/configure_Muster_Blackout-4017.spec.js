var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Blackout-4017",
    "produkt": "Blackout 4017",
    "stoff_url": "blackout-4017",
    "abPreis": "73,00",
    "abPreis_red": "34,00",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "22",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Moritz",
    "last_name": "Bachmann",
    "email": "test@delphinus-test.de",
    "street": "Columbusstr. 11",
    "postal_code": "1254",
    "city": "Florenz",
    "state": "Italien",
    "phone": "8547",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Blackout-4017', () => {
    configurator.configureMuster(test)
})