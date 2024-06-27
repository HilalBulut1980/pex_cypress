var configurator = require("../../../support/configurator_muster.js");

var test = {
    "name": "PEXConfig. - Muster Meran-4400",
    "produkt": "Meran 4400",
    "stoff_url": "meran-4400", //R5, R18
    "abPreis": "73,00",
    "abPreis_red": "51,00",  //-5| -25% = 51,00
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "21",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Magdalena",
    "last_name": "Trump",
    "email": "test@delphinus-test.de",
    "street": "Henkstr. 11a",
    "postal_code": "16985",
    "city": "Brügge",
    "state": "Belgien",
    "phone": "123456",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


describe('Configuration Stoffmuster order Meran 4400', () => {
    configurator.configureMuster(test)
})