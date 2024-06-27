var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Rabattcode 20% mit Montageplatten",
    "produkt": "Stick&Fix- einzelne Montageplatten",
    "url": "/montageplatten-einzeln",
    "abPreis": "9,35",
    "produkttyp": "Zubehoer",
    "option1": "3 Montageplatten inkl. Klebepads +8,00 €",
    "option2": "",

    "rabatt_code": "PEX-TEST-20P", 
    "rabatt_faktor_a": 20,  
    "rabatt_faktor_b": 80,

    "anzahl": 5,
    "grundpreis": 17.35,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Mahmoudi",
    "email": "test@delphinus-test.de",
    "street": "Via Cardinale 11",
    "postal_code": "2145",
    "city": "Venedig",
    "state": "Italien",
    "phone": "114477",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration with Rabattcode of Zubehör Stick&Fix- einzelne Montageplatten', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureZubehoer(test)
})
