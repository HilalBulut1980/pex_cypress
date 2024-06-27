var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "PEXConfig. - VS1-direkt",
    "produkt": "Bologna 2028",  //PG 0
    "route_url": "customoptions/index/specialshape",
    "route_DF": "/customoptions/index/fill",
    "stoff_url": "bologna-2028",
    "abPreis": "64,00",
    "abPreis_red": "27,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "1000",
    "breite": "990",
    "schienenfarbe": "weiss",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (125 cm)", //+44

    "anzahl": 1,
    "grundpreis": 141,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 44,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 5,
    "vat": 122,
    "mwst_1": 22,
    "mwst_2": 22,  //bedienstab
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 7",
    "postal_code": "1110",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Frau",
    "first_name_2": "Melanie",
    "last_name_2": "Schulze",
    "email_2": "test@delphinus-test.de",
    "street_2": "Zentralweg 3",
    "postal_code_2": "3541",
    "city_2": "Rom",
    "state_2": "Italien",
    "phone_2": "225588",
    "payment": "Vorkasse"
}

describe('Configuration of VS1 with direkte Befestigung and Bologna-2028', () => {
    configurator.configureVertical(test)
})