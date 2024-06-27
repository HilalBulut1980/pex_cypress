var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Matera-4909",
    "produkt": "Matera-4909",
    "stoff_url": "matera-4909",
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
    "first_name": "Björn",
    "last_name": "Weidemann",
    "email": "test@delphinus-test.de",
    "street": "Mumkenstr. 55",
    "postal_code": "65897",
    "city": "Den Haag",
    "state": "Niederlande",
    "phone": "7584",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Neyla-4860', () => {
    configurator.configureMuster(test)
})
