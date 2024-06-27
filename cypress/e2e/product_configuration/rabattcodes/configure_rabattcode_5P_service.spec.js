var configurator = require("../../../support/configurator_service.js");

var test = {
    "name": "PEXConfig. - Rabattcode 5% mit Serviceprodukt",
    "service": "Änderungsauftrag Schnurlänge",
    "url": "/aenderungsauftrag-schnurlaenge",
    "produkttyp": "Serviceprodukt",
    "bestellnummer": "1000999",
    "breite": "950",
    "hoehe": "1500",
    "laenge_neu": "1800",
    "produkt": "Magic-Crush-4058",

    "rabatt_code": "PEX-TEST-5P",  // 5%
    "rabatt_faktor_a": 5,  
    "rabatt_faktor_b": 95,

    "anzahl": 3,
    "grundpreis": 30,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Marcus",
    "last_name": "Martinez",
    "email": "test@delphinus-test.de",
    "street": "Oldesloer Weg 12",
    "postal_code": "32574",
    "city": "Genf",
    "state": "Schweiz",
    "phone": "665544",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration with Rabattcode of Serviceprodukt Änderungsauftrag Schnurlänge', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureService(test)
})
