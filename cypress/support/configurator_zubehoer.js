var cartPage = require("./cart.js");
var checkoutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureZubehoer: function configureZubehoer(test) {
        const emailSuffix = Date.now();

        it(test.name, function () {

            let preis = test.grundpreis.toFixed(2)
            let preis_total = (jsonLogic.apply({ '*': [preis, test.anzahl] })).toFixed(2)

            let warenkorbTotal = preis_total
            let sieSparen;

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            // rabatt_betrag, sieSparen_new, total_cart_new
            let rabatt_betrag;
            let sieSparen_new;
            let warenkorbTotal_new;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // cart
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_new = rabatt_betrag
                warenkorbTotal_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_b] })).toFixed(2);

                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                warenkorbTotal_new = warenkorbTotal_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000    
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\

            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), test.vat] })).toFixed(2);
            let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, test.anzahl] })).toFixed(2)
            let summe_backend = preis_mwst_total;

            // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, test.vat] }), test.mwst_1] })).toFixed(4);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst = 0;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                cy.log(total_mwst)
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                let sieSparen_mwst = rabatt_betrag_mwst

                total_backend = (jsonLogic.apply({ '+': [summe_backend, versandkosten] })).toFixed(2)

                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_mwst, test.vat] }), test.mwst_1] })).toFixed(2);

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            }


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

            preis = preis.replace('.', ',')
            preis_total = preis_total.replace('.', ',')
            preis_mwst = preis_mwst.replace('.', ',')
            preis_mwst_total = preis_mwst_total.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            warenkorbTotal = warenkorbTotal.replace('.', ',')
            total_mwst = total_mwst.replace('.', ',')
            summe_backend = summe_backend.replace('.', ',')
            total_backend = total_backend.replace('.', ',')
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            cy.log(preis_mwst_total) //88,95
            cy.log(total_mwst) //91,67
            cy.log(total_backend) //109,46
            cy.log(summe_backend)
            cy.log()

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.url)
            checkFromPrices(test.abPreis)
            setOption(test.option1, test.option2)
            checkPrice(preis)
            addQuantityToCart(test.anzahl)

            //-------------------CHECKING PRICES IN CART--------------------\\
            cartPage.checkCartSimple(preis, warenkorbTotal, warenkorbTotal, test.rabatt_code, rabatt_betrag, sieSparen_new, warenkorbTotal_new)

            //-------------------CHECKOUT------------------------------------\\
            checkoutPage.checkOut(test.produkttyp, test.missing_name, test.login, test.prefix, test.first_name, test.last_name, test.company_name, test.vatID, test.email, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.password, test.prefix_2, test.first_name_2, test.last_name_2, test.company_name_2, test.vatID_2, test.street_2, test.postal_code_2, test.city_2, test.state_2, test.phone_2, versandkosten, test.payment)
            checkoutPage.checkFinalPrices(test.produkttyp, test.payment, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, test.kosten_stab_checkout, test.rabatt_code, rabatt_betrag_mwst, versandkosten, test.sieSparen_checkout, total_mwst)
            checkoutPage.placeOrder(test.produkttyp, test.rmg, test.payment, test.canceled_payment, test.failed_payment, preis_mwst, summe_backend, test.kosten_befestigung, test.kosten_befestigung_total, test.kosten_stab_backend, test.kosten_stab_checkout, versandkosten, total_backend, test.mwst_1, steuer_betrag, test.vat_rate_2, test.vat_bedienstab, test.vat_rate_3, test.vat_befestigung, steuer_betrag_gesamt, rabatt_betrag_mwst, test.rabattbetrag_backend_1, test.rabattbetrag_backend_2, test.rabatt_code)
        })
    }
}

function checkFromPrices(price) {
    cy.get('.price').should('contain', price)
}

function setOption(option1, option2) {

    if (option1 != "") {
        cy.get('.product-options > :nth-child(1) select').select(option1)
    }
    if (option2 != "") {
        cy.get('.product-options .additional_option_item').last().find('select').select(option2)
    }

}

function checkPrice(price) {
    cy.get('.price').should("contain", price)
}

function addQuantityToCart(value) {
    cy.get('#qty').clear().type(value, { force: true })
    cy.contains('In den Warenkorb').click()
}
