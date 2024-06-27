var cartPage = require("../../../support/cart.js");
var checkoutPage = require("../../../support/checkout.js");
import jsonLogic from 'json-logic-js';

var test = {
    "name": "PEXConfig. - F1 mit RMG",
    "produkt": "Varese 4449",  //PG 2
    "stoff_url": "varese-4449",
    "abPreis": "96,00",
    "abPreis_red": "59,15",  //R 5,6 -5,00 -35% 
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "2200",
    "breite": "1950",
    "bedienseite": "links",
    "pendelsicherung": "nein",
    "schienenfarbe": "bronze",

    //Richtig Messen Garantie
    "rmg": "ja",

    "anzahl": 1,
    "grundpreis": 641,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marlene",
    "last_name": "Hansen",
    "email": "marly@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "email_2": "",
    "street_2": "",
    "postal_code_2": "",
    "city_2": "",
    "state_2": "",
    "phone_2": "",
    "payment": "Vorkasse"
}


describe('Configuration of F1 with Richtig Messen Garantie', () => {
    // configurator.configureSpecialForms(test)

    it(test.name, function () {

        // let grundpreis

        //Konfigurator
        let streichPreis = test.grundpreis.toFixed(2);
        let redPreis = (jsonLogic.apply({ '-': [streichPreis, test.discount_2] })).toFixed(2);  //Abzug 2. Rabatt
        redPreis = (jsonLogic.apply({ '*': [redPreis, test.discount_1] })).toFixed(2); //Abzug 1. Rabatt

        //warenkorb --> bedienstab wird getrennt
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let warenkorbTotal = redPreisTotal;
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)
        cy.log(sieSparen)

        let versandkosten = test.versandkosten.toFixed(2);
        let streichPreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [streichPreis, 119] }), test.vat] })).toFixed(2);
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)

        let redPreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreis, 119] }), test.vat] })).toFixed(2);
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)

        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] })).toFixed(4)
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_mwst, test.vat] }), test.mwst_1] })).toFixed(2);

        streichPreis = streichPreis.replace('.', ',')
        redPreis = redPreis.replace('.', ',')
        streichPreisTotal = streichPreisTotal.replace('.', ',')
        redPreisTotal = redPreisTotal.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',')
        sieSparen = sieSparen.replace('.', ',')
        cy.log(sieSparen)
        versandkosten = versandkosten.replace('.', ',')
        streichPreis_mwst = streichPreis_mwst.replace('.', ',')
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',')
        redPreis_mwst = redPreis_mwst.replace('.', ',')
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',')
        sieSparen_mwst = sieSparen_mwst.replace('.', ',')
        total_mwst = total_mwst.replace('.', ',')
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')


        cy.visit(test.stoff_url)
        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        //-------------------PRODUCT CONFIGURATION--------------------\\
        setProduktTyp()
        setWindowShape(test.form)
        setPlisseeTyp(test.plisseetyp)
        checkFromPrices(test.abPreis, test.abPreis_red)
        setBefestigung(test.befestigung)
        setAusrichtung(test.ausrichtung)
        setHoehe(test.hoehe)
        setBreite(test.breite)
        setSchienenfarbe(test.schienenfarbe)
        setBediengriff(test.bediengriff)
        checkPrices(redPreis, streichPreis)
        addQuantityToCart(test.anzahl)

        //-------------------CHECKING PRICES IN CART--------------------\\
        cartPage.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.kosten_stab, sieSparen, warenkorbTotal, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.warenkorbTotal_new)
        //add RMG
        cy.visit('richtig-messen-garantie')
        cy.contains('In den Warenkorb').click()

        //check cart with RMG
        cartPage.checkCart_withRMG(streichPreis, redPreis, streichPreisTotal, redPreisTotal, sieSparen, warenkorbTotal)

        //-------------------CHECKOUT------------------------------------\\
        checkoutPage.checkOut(test.produkttyp, test.missing_name, test.login, test.prefix, test.first_name, test.last_name, test.company_name, test.vatID, test.email, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.password, test.prefix_2, test.first_name_2, test.last_name_2, test.company_name_2, test.vatID_2, test.street_2, test.postal_code_2, test.city_2, test.state_2, test.phone_2, versandkosten, test.payment)
        checkoutPage.checkFinalPrices(test.produkttyp, test.payment, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, test.bedienstab_mwst, test.rabatt_code, test.rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
        checkoutPage.check_RMG()
        checkoutPage.placeOrder(test.produkttyp, test.rmg, test.payment, test.canceled_payment, test.failed_payment, redPreis_mwst, redPreisTotal_mwst, test.befestigung_mwst, test.befestigung_mwst_total, test.bedienstab_mwst, test.bedienstab_mwst_total, versandkosten, total_mwst, test.mwst_1, steuer_betrag, test.mwst_2, test.steuer_betrag_2, test.mwst_3, test.steuer_betrag_3, steuer_betrag_gesamt, test.rabatt_betrag_mwst, test.rabatt_betrag_mwst_1, test.rabatt_betrag_mwst_2, test.rabatt_code)
    })
})

function setProduktTyp() {
    cy.contains('Sonderformen').click()
}

function checkFromPrices(oldPrice, newPrice) {
    cy.get('.original_price').should('contain', oldPrice)
    cy.get('.final_price').should('contain', newPrice)
}

function setWindowShape(value) {
    cy.get('input[value=' + value + ']').check({ force: true })
}

function setPlisseeTyp(value) {
    cy.get('input[value=' + value + ']').check({ force: true })
}

function setBefestigung(value) {
    cy.get('input[value=' + value + ']').check({ force: true })
}

function setHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe').type(value, { force: true })
    }
}

function setBreite(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite').type(value, { force: true })
    }
}

function setAusrichtung(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('input[value=' + value + ']').check({ force: true })
    }
}

function setBediengriff(value) {
    if (typeof value !== "undefined") {
        cy.get('input[value=' + value + ']').check({ force: true })
    }
}

function setSchienenfarbe(value) {
    cy.get('input[value=' + value + ']').check({ force: true })
}

function checkPrices(reduced_price, old_price) {
    cy.get('.original_price').should('contain', old_price)
    cy.get('.final_price').should('contain', reduced_price)
}

function addQuantityToCart(value) {
    cy.get('#qty').clear().type(value, { force: true })
    cy.get('.add_to_cart_button').click({ force: true })
}
