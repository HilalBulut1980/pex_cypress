var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Wabe-Plus-4855",
    "produkt": "Wabe-Plus-4855",
    "stoff_url": "wabe-plus-4855",
    "abPreis": "93,00",
    "abPreis_red": "57,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "23",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Peter",
    "last_name": "Navin",
    "email": "test@delphinus-test.de",
    "street": "Kolpstr. 587",
    "postal_code": "1247",
    "city": "Porto",
    "state": "Portugal",
    "phone": "8547",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Wabe-Plus-4855', () => {
    configurator.configureMuster(test)
})