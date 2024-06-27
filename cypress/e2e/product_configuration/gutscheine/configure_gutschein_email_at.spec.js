var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "PEXConfig.-Gutschein_Email_AT",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Email",
    "beschenkter": "Henry",
    "strasse": "",
    "betrag": "50",
    "plz": "",
    "nachricht": "Hallo Henry, Happy Birthday!",
    "stadt": "",
    
    "anzahl": 1,
    "grundpreis": 50,  
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Magdalena",
    "last_name": "Cosic",
    "email": "magdalena@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "1234",
    "city": "Linz",
    "state": "Österreich",
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

describe('Test: configuration of Gutschein Email AT', () => {

    configurator.configureGutschein(test)

})