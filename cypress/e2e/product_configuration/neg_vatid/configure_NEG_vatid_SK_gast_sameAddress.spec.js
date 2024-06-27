var configurator = require("../../../support/configurator_NEG_vatid.js");

var test = {
    "name": "neg. Umsatzsteuertest ungültige UID SK Gast same address",
    "produkt": "Triest 1030",  //PG 1
    "stoff_url": "triest-1030",
    "supplier": "Erfal",
    "abPreis": "67,00", //-25%
    "abPreis_red": "50,25",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50
    // "kosten_stab": "54,00",

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 56.50,  
    "discount_1": 0.75,
    "discount_2": 0,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 16.81,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Natalie",
    "last_name": "Drusky",
    "company_name": "Lidlana Slovenska",
    "vatID_false": "SLO2020279415",
    "vatID": "SK2020279415",
    "state_code": "SK",
    "email": "naty@delphinus-test.de",
    "password": "",
    "street": "Karlsplatz 99",
    "postal_code": "5248",
    "city": "Bratislava",
    "state": "Slowakei",
    "phone": "85469",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of neg. VAT ID order - Slowakei/Gast - same address', () => {
    configurator.configure_NEG_vatid(test)
})
