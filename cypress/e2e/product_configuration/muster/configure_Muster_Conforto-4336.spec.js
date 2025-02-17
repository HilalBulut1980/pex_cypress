var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Conforto-4336",
    "produkt": "Conforto 4336",
    "stoff_url": "conforto-4336",
    "abPreis": "73,00",
    "abPreis_red": "44,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "22",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Tom",
    "last_name": "Budermann",
    "email": "test@delphinus-test.de",
    "street": "Sumatrastr. 22",
    "postal_code": "95847",
    "city": "Ljubljana",
    "state": "Slowenien",
    "phone": "8547",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Conforto-4336', () => {
    configurator.configureMuster(test)
})