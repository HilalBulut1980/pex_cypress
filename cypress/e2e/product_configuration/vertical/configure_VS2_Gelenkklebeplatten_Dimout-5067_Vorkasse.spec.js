var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "PEXConfig. - VS2-Gelenkklebeplatten",
    "produkt": "Dimout 5067",  //PG 2
    "stoff_url": "dimout-5067",
    "abPreis": "73,00",
    "abPreis_red": "40,80",  //Regel 5 -5,00, Regel 7 -40%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "gelenkklebeplatten",  //+20
    "hoehe": "1200",
    "breite": "1000",
    "schienenfarbe": "anthrazit",

    "anzahl": 2,
    "grundpreis": 208,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,  
    "discount_1": 0.6, //-40%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Marilyn",
    "email": "marta@delphinus-test.de",
    "street": "Kobelgasse 13",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

describe('Configuration of VS2 Slide Comfort with Dimout 5067', () => {
    configurator.configureVertical(test)
})