var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - Rabattcode 10% mit PL40",
    // "name": "PEXConfig. - PL 40",
    "produkt": "Tarent-1272",  //PG 3 R18
    "stoff_url": "tarent-1272",
    "supplier": "Erfal",
    "abPreis": "274,00", 
    "abPreis_red": "205,50",//-25%
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "befestigung": "winkel",
    "breite": "900",
    "hoehe_links": "1500",
    "hoehe_rechts": "1900",
    "ausrichtung": "rechts",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)", // +52,00
    
    "rabatt_code": "PEX-TEST-10P",  // 10%
    "rabatt_faktor_a": 10,  
    "rabatt_faktor_b": 90,

    "anzahl": 3,
    "grundpreis": 561,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 52, 
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.75,  //-25%
    "discount_2": 0,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 30",
    "postal_code": "1110",
    "city": "Frankfurt",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration with Rabattcode ofPL40', () => {

    it('check/create rabatt code: ' + test.rabatt_code, function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })
    
    configurator.configureSpecialForms(test)
})

