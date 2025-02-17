var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Rovereto-1128",
    "produkt": "Rovereto 1128",
    "stoff_url": "rovereto-1128",
    "abPreis": "64,00",
    "abPreis_red": "32,45",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "21",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Melly",
    "last_name": "Tonndorf",
    "email": "test@delphinus-test.de",
    "street": "Brixstr. 54",
    "postal_code": "3685",
    "city": "Brünn ",
    "state": "Tschechische Republik",
    "phone": "35874",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Rovereto-1128', () => {
    configurator.configureMuster(test)
})