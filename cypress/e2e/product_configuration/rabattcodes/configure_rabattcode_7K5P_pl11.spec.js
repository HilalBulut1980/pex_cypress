var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - Rabattcode 7,5% mit PL11",
    "produkt": "Muscheln 4138",  //PG3 R5,15
    "stoff_url": "muscheln-4138",
    "abPreis": "159,00",  
    "abPreis_red": "84,70",  //- 5 |-45%
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl11",
    "befestigung": "clip",
    "hoehe": "2000",
    "breite": "1000",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00
    "bedienstab": "Bedienstab (125 cm)", // +44,00

    "rabatt_code": "PEX-TEST-7K5P",  // 7,5%
    "rabatt_faktor_a": 7.5,  
    "rabatt_faktor_b": 92.5,

    "anzahl": 2,
    "grundpreis": 445,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 8.50, 
    "bediengriff_aufpreis": 4, 
    "bedienstab_preis": 44,
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.55,  //-45%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 33",
    "postal_code": "1110",
    "city": "Sofia",
    "state": "Bulgarien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration with Rabattcode of PL11', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })
    
    configurator.configureSpecialForms(test)
})