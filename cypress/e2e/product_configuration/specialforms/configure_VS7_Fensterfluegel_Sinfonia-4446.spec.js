var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - VS7",
    "produkt": "Sinfonia 4446",  //PG2 R5,6
    "stoff_url": "sinfonia-4446",
    "abPreis": "266,00",  //266,00
    "abPreis_red": "169,65", //-5 -35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1000",
    "breite_oben": "400",
    "breite_unten": "1200",
    "schienenfarbe": "anthrazit",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 5,
    "grundpreis": 504,  
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
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 43",
    "postal_code": "1110",
    "city": "Wiener Neustadt",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VS7 - with WInkel and Sinfonia-4446', () => {

    configurator.configureSpecialForms(test)
})