var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Actinia-1562",
    "produkt": "Actinia 1562",
    "stoff_url": "actinia-1562",
    "abPreis": "73,00",
    "abPreis_red": "40,15",
    "produkttyp": "Muster",
    "anzahl": "1",
    
    //Backend
    "vat_rate": "25",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Jessica",
    "last_name": "Fieldmann",
    "email": "test@delphinus-test.de",
    "street": "Steinstraße 11a",
    "postal_code": "2056",
    "city": "Split",
    "state": "Kroatien",
    "phone": "98745",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Actinia-1562', () => {
    configurator.configureMuster(test)
})