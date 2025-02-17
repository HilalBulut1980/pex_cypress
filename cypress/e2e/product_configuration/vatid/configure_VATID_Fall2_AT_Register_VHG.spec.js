var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "Umsatzsteuertest Fall 2 AT",
    "produkt": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "abPreis": "73,00",
    "abPreis_red": "33,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (200 cm)", //+52,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 2,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 15.03,
 
    //customer data
    "login": "register",
    "prefix": "Frau",
    "first_name": "Martina",
    "last_name": "Schulz",
    "company_name": "Billa AG",
    "vatID": "ATU15255907",
    "state_code": "ATU",
    "email": "martina@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "Lange Reihe 2",
    "postal_code": "18019",
    "city": "Linz",
    "state": "Österreich",
    "phone": "456789",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VAT ID order - Österreich/Gast', () => {
    configurator.configureVertical(test)
})
