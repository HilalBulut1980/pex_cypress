var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "PEXConfig.-Gutschein_Email_EU",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Email",
    "beschenkter": "Liana",
    "strasse": "",
    "betrag": "500",
    "plz": "",
    "nachricht": "Alles Gute zur Silberhochzeit!",
    "stadt": "",

    "anzahl": 2,
    "grundpreis": 500,  
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Svetlana",
    "last_name": "Kühlheim",
    "email": "svetlana@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "12345",
    "city": "Sofia",
    "state": "Bulgarien",
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

describe('Test: configuration of Gutschein Email EU', () => {

    configurator.configureGutschein(test)

})