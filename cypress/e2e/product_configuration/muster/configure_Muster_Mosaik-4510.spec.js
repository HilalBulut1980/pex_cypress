var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Mosaik-4510",
    "produkt": "Mosaik 4510",
    "stoff_url": "mosaik-4510",
    "abPreis": "82,00",
    "abPreis_red": "50,05",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "25",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Daria",
    "last_name": "Numan",
    "email": "test@delphinus-test.de",
    "street": "Bremer Str. 158",
    "postal_code": "98569",
    "city": "Stockholm",
    "state": "Schweden",
    "phone": "95784",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Mosaik-4510', () => {
    configurator.configureMuster(test)
})