// **************************************** PUT LONG CSS-SELECTROS INTO VARIABLES ****************************************
// line unit of main product
var product_unit = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(4) > .price-incl-tax';
// line total of main product
var product_total = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(10) > .price';
// rabattbetrag
var fieldRabattBetrag_1 = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(9) > .price';
var fieldRabattBetrag_2 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(9) > .price';
// line unit of bedienstab
var bedienstab_unit = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(4) > .price-incl-tax';
// line total of bedienstab
var bedienstab_total = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(10) > .price';
// line unit of befestigung
var befestigung_unit = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(4) > .price-incl-tax';
// line total of befestigung
var befestigung_total = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(10) > .price';
// vat of main product
var vat_rate_product = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(8)';
var vat_product = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(7)';
// vat of bedienstab
var vat_rate_bedienstab = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(8)';
var vat_bedienstab = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(7)';
// vat of separate befestigung bei anwis+vhg
var vat_rate_befestigung = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(8)';
var vat_befestigung = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(7)';
// shipping cost 
var fieldShippingCost = '.order-totals > table > tbody > :nth-child(2) > :nth-child(2) > .price';
// vat total 
var fieldTotal = '.order-totals > table > tfoot > .0 > .emph > strong .price'

module.exports = {

    login: function login() {
        cy.get('.login-form > .input-box.input-left input').type(Cypress.env('backend_user'))
        cy.get('.login-form > .input-box.input-right > #login').type(Cypress.env('backend_passw'))
        cy.contains('Anmelden').click()
    },

    getOrder: function getOrder(orderNumber) {

        //get Bestellungen
        cy.contains('Bestellungen').click({ force: true })

        //selecting a specific order 
        cy.get('tbody').children().contains(orderNumber).click()
    },

    checkOrder: function checkOrder(type, unit, lineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, shippingCost, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode) {


        //************************************************************************* */

        // CHECK PRICE OF MAIN PRODUCT

        if (type == "Muster") {

            cy.get(product_unit).should(($txt) => {
                expect($txt).to.contain("0,00")
            })

            cy.get(product_total).should(($txt) => {
                expect($txt).to.contain("0,00")
            })
        }
        else {
            cy.get(product_unit).should(($txt) => {
                expect($txt).to.contain(unit)
            })

            cy.get(product_total).should(($txt) => {
                expect($txt).to.contain(lineTotal)
            })
        }

        //************************************************************************* */

        //CHECK BEDIENSTAB 
        // if (typeof kostenStab != "undefined") {
        if (typeof kostenStab != "undefined" && kostenStab != "0,00") {

            cy.get(bedienstab_unit).should(($txt) => {
                expect($txt).to.contain(kostenStab)  //in der 4. Spalte wird der Betrag ohne Rabatt angezeigt --> also total
            })

            cy.get(bedienstab_total).should(($txt) => {
                expect($txt).to.contain(kostenStabTotal) // in der 10. Spalte wird der eigentliche Betrag angezeigt
            })
        }


        //************************************************************************* */

        //CHECK BEFESTIGUNG BEI: ANWIS-PLISSEE + VHG-BEFESTIGUNG
        // --> currently no anwis products active <--
        // if (typeof befestigungUnit != "undefined") {
        //     // CHECK UNIT COST OF BEFESTIGUNG
        //     cy.get(befestigung_unit).should(($txt) => {
        //         expect($txt).to.contain(befestigungUnit)
        //     })
        //     // CHECK LINE TOTAL OF BEFESTIGUNG
        //     cy.get(befestigung_total).should(($txt) => {
        //         expect($txt).to.contain(befestigungTotal)
        //     })
        // }


        // ******************************** CHECK VATS ********************************
        // ****************************************************************************

        // CHECK VAT RATE AND VAT AMOUNT OF MAIN PRODUCT
        cy.get(vat_rate_product).should('contain', vatRate + '%')
        cy.get(vat_product).should('contain', vatProduct)

        // CHECK VAT RATE AND VAT AMOUNT OF BEDIENSTAB
        if (typeof vatRate2 !== "undefined") {
            cy.get(vat_rate_bedienstab).should('contain', vatRate2 + '%')
            cy.get(vat_bedienstab).should('contain', vatBedienstab)
        }

        // CHECK VAT RATE AND VAT AMOUNT OF BEFESTIGUNG
        if (typeof vatRate3 !== "undefined") {
            cy.get(vat_rate_befestigung).should('contain', vatRate3 + '%')
            cy.get(vat_befestigung).should('contain', vatBefestigung)
        }
        // cy.get(field_vatTotal).children().contains('Gesamtbetrag Steuern').parent().siblings().should('contain', vatTotal)
        cy.contains('Gesamtbetrag Steuern').parent().siblings().should('contain', vatTotal)


        // ******************************** CHECK RABATTCODE & -BETRAG ********************************
        // ********************************************************************************************

        if (typeof rabattcode != "undefined") {

            if (typeof rabattbetrag_1 !== "undefined" &&  rabattbetrag_1 != "0,00") {  //wenn es mehrere Zeilen gibt zB wegen Bedienstab
                cy.log('mehrere Zeilen')
                cy.get(fieldRabattBetrag_1).should("contain", rabattbetrag_1)
                cy.get(fieldRabattBetrag_2).should("contain", rabattbetrag_2)
            }
            else {
                cy.log('nicht mehrere Zeilen')
                cy.get(fieldRabattBetrag_1).should("contain", rabattbetrag)
            }

            cy.contains('Rabatt (' + rabattcode + ')').next().should("contain", '-' + rabattbetrag)

        }


        //************************************************************************* */

        //CHECK LAST SHIPPING COST
        if (type != "Gutschein") {
            cy.get(fieldShippingCost).should("contain", shippingCost)
        }


        //************************************************************************* */

        //CHECK FINAL TOTAL
        if (type == "Muster") {
            cy.get(fieldTotal).should("contain", "0,00")

        }
        else {
            cy.get(fieldTotal).should("contain", totalBackend)
        }
    },

    check_RMG: function check_RMG(rmg) {
        if (typeof rmg != "undefined") {
            cy.get('.data.order-tables').should('contain', 'Richtig Messen Garantie').and('contain', '0,00')
        }
    },

    logout: function logout() {
        cy.contains('Abmelden').click({ force: true })
    }
}