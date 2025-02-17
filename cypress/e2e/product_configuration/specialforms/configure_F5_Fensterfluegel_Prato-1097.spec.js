var configurator = require("../../../support/configurator_specialForms.js");

var test = {
    "name": "PEXConfig. - F5",
    "produkt": "Prato 1097",  //PG 2 R18
    "stoff_url": "prato-1097",
    "supplier": "Erfal",
    "abPreis": "145,00",
    "abPreis_red": "108,75",  //-25%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f5",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1400",
    "breite": "750",
    "pendelsicherung": "nein",
    "schienenfarbe": "silber",

    "anzahl": 3,
    "grundpreis": 312,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.75,  //-25%
    "discount_2": 0,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 36",
    "postal_code": "1110",
    "city": "Cannes",
    "state": "Frankreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of F5 with Winkel and Prato-1097', () => {
    configurator.configureSpecialForms(test)
})