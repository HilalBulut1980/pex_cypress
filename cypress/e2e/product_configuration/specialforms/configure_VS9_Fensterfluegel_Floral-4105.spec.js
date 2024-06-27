var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - VS9",
    "produkt": "Floral 4105",  //PG2 R5,6
    "stoff_url": "floral-4105",
    "abPreis": "266,00",  //266
    "abPreis_red": "169,65",  // -5 -35%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1000",
    "breite": "800",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 2,
    "grundpreis": 393,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 8.50, 
    "bediengriff_aufpreis": 4, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
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


describe('Configuration of VS9 - Winkel and Floral-4105', () => {
    configurator.configureSpecialForms(test)
})

