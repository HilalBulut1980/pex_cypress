var cartPage = require("../../../support/cart.js");
var successPage = require("../../../support/successpage.js");

var test = {
    "name": "PEXConfig. - VS1-direkt",
    "produkt": "Bologna 2028",  //PG 0
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
    "paypalExpress": true

    // "anzahl": 1,
    // "grundpreis": 141,
    // "befestigung_preis": 0,
    // "bediengriff_preis": 0, 
    // "bediengriff_aufpreis": 0,
    // "bedienstab_preis": 44,  
    // "discount_1": 0.50,
    // "discount_2": 5,
    // "discount_3": 5,
    // "vat": 122,
    // "mwst_1": 22,
    // "mwst_2": 22,  //bedienstab
    // "versandkosten": 20.51,

    // //customer data
    // "login": "guest",
    // "prefix": "Herr",
    // "first_name": "Max",
    // "last_name": "Mustermann",
    // "email": "test@delphinus-test.de",
    // "street": "Kobelgasse 7",
    // "postal_code": "1110",
    // "city": "Wien",
    // "state": "Österreich",
    // "phone": "123456",
    // "shipping": "new",
    // "prefix_2": "Frau",
    // "first_name_2": "Melanie",
    // "last_name_2": "Schulze",
    // "email_2": "test@delphinus-test.de",
    // "street_2": "Zentralweg 3",
    // "postal_code_2": "3541",
    // "city_2": "Rom",
    // "state_2": "Italien",
    // "phone_2": "225588",
    // "payment": "PayPalExpress"
}

describe('Configuration of VS1 - payment: PayPal Express ', () => {
    it(test.name, function () {

        cy.visit(test.stoff_url)

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains('Senkrechte Fenster').click()
        cy.get('input[value=' + test.plisseetyp + ']').click({ force: true })
        cy.get('input[value=' + test.befestigung + ']').click({ force: true })
        cy.get('#hoehe').type(test.hoehe, { force: true })
        cy.get('#breite').type(test.breite, { force: true })
        cy.get('input[value=' + test.schienenfarbe + ']').click({ force: true })
        cy.get('input[value=' + test.bediengriff + ']').click({ force: true })
        cy.get('#bedienstab_select').select(test.bedienstab, { force: true })
        cy.get('#qty').clear().type('1', { force: true })
        cy.get('.add_to_cart_button').click()
        paypalExpress(test.paypalExpress)
    })
})


function paypalExpress(paypalExpress) {

    if (paypalExpress) {
        cy.capturePopupFromIFrame_express()
        cy.paypalExpress('sb-zsomv8592744@personal.example.com', 'c)79sJ!.')
        cy.paypalPrice().should('to.contain', '109,50 EUR') // --> amount of the only paypalexpress testcase we have, can be replaced with variable

        //if placeOrder=true and baseurl is unequal to production then plade the order
        if (Cypress.env('placeOrder') && Cypress.config().baseUrl != "https://www.plissee-experte.de/") {

            cy.paypalComplete()
            cy.confirmPaypalExpress()
            successPage.checkSuccessMessage()
        }
        else { // otherwise if placeOrder=false then cancel the payment

            cy.cancelPaypal()
            cy.get('.totals > .checkout-types button').click()

        }
    }
}