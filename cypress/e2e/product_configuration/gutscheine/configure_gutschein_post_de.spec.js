var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "PEXConfig.-Gutschein_Post_DE",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Post",
    "beschenkter": "Maik Meier",
    "strasse": "Lange Reihe 1",
    "betrag": "25",
    "plz": "12345",
    "nachricht": "Hi Markus, dieser Gutschein ist für Dich!",
    "stadt": "Hamburg",

    "anzahl": 4,
    "grundpreis": 30,  
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "1234",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "775300",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "street_2": "",
    "postal_code_2": "",
    "city_2": "",
    "state_2": "",
    "phone_2": "",
    "payment": "Vorkasse"
}

describe('Test: configuration of Gutschein Post DE', () => {

    configurator.configureGutschein(test)

})