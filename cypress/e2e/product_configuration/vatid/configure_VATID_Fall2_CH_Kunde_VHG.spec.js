var configurator = require("../../../support/configurator_vertical.js");

var test = {
    "name": "Umsatzsteuertest Fall 2 CH",
    "produkt": "Monza 1113",
    "stoff_url": "monza-1113",
    "abPreis": "93,00",
    "abPreis_red": "57,20",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1500",
    "breite": "600",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)",  //+52,00

    "anzahl": 3,
    "grundpreis": 204,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "customer",
    "prefix": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "vatID": "CHE150906972",
    "state_code": "CHE",
    "email": "uid_CH@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Schweiz",
    "phone": "",
    "shipping": "same",
    "payment": "Vorkasse"
}


describe('Configuration of VAT ID order - Schweiz/Kunde', () => {

    it('check testaccount uid_CH@delphinus-test.de', function () {
        //check/create testaccount --- uid_CH@delphinus-test.de ---
        //cy.visit('/scripts/customers/testaccounts.php?email=uid_CH@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Schweiz&billing_company=Test%20UG&billing_vatid=CHE150906972&password=Abcde_12345&billing_street=Teststraße%203&billing_postcode=1234&billing_city=Basel&billing_country=CH&shipping_vatid=CHE150906972&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')
    })

    //configurator.configureVertical(test)
    // Fall 2 für Drittländer können wir nicht testen, da innerhalb von Magento die UStID auf einer Webseite der EU geprüftwird. 
    // Nicht-EU-Länder werden dort standardmäßig als ungültig validiert. 
})