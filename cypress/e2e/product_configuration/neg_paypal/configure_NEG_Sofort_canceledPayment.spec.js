var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "PEXConfig. - neg. Paypal - canceled Sofort",
    "produkt": "Hestia 4544",  //PG 1
    "stoff_url": "hestia-4544",
    "abPreis": "67,00",
    "abPreis_red": "40,30",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix_front",  //+20
    "hoehe": "900",
    "breite": "600",
    "schienenfarbe": "weiss",
    "bediengriff": "standard",

    "anzahl": 1,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,  
    "discount_1": 0.65, //-35%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Helene",
    "last_name": "Fischer",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 11",
    "postal_code": "1110",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Sofort",
    "canceled_payment": true
}

describe('Configuration of canceled Sofort payment', () => {
    configurator.configureVertical(test)
})