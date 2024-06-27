var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "PEXConfig. - Rabattcode 7,5% mit VS2",
    "produkt": "Triest 1030",  //PG 1
    "stoff_url": "triest-1030",
    "supplier": "Erfal",
    "abPreis": "67,00",
    "abPreis_red": "50,25",  //-25%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (125 cm)", // +44,00

    "rabatt_code": "PEX-TEST-7K5P",  // 7,5%
    "rabatt_faktor_a": 7.5,  
    "rabatt_faktor_b": 92.5,

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 44, 
    "discount_1": 0.75, //-20%
    "discount_2": 0,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0, // bedienstab
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 10",
    "postal_code": "1110",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration with Rabattcode of VS2 with Stick&Fix and Triest-1030', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureVertical(test)
})