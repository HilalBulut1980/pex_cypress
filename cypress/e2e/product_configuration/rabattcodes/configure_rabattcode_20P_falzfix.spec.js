var configurator = require("../../../support/configurator_zubehoer.js");

var test = {
    "name": "PEXConfig. - Rabattcode 20% mit Falzfix",
    "produkt": "Falzfix",
    "url": "/falzfix",
    "abPreis": "6,50",
    "produkttyp": "Zubehoer",
    "option1": "dunkelbraun",
    "option2": "4 Falzfixträger +10,50 €",  //6,50+ 10,50

    "rabatt_code": "PEX-TEST-20P", 
    "rabatt_faktor_a": 20,  
    "rabatt_faktor_b": 80,

    "anzahl": 1,
    "grundpreis": 17,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Tobias",
    "last_name": "Kunze",
    "email": "test@delphinus-test.de",
    "street": "Santosdamm 55",
    "postal_code": "52148",
    "city": "Köln",
    "state": "Deutschland",
    "phone": "225544",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration with Rabattcode of Zubehör Falzfix', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureZubehoer(test)
})
