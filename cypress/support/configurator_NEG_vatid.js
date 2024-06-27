var cartPage = require("./cart.js");
var checkoutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configure_NEG_vatid: function configure_NEG_vatid(test) {
        const emailSuffix = Date.now();

        it(test.name, function () {

            //***************************************************** PRICE CALCULATION **************************************************** */
            //*************************************************************************************************************************** */
            //grundpreis
            let grundpreis = test.grundpreis;
            let grundPreis_red = (jsonLogic.apply({ '-': [grundpreis, test.discount_2] })).toFixed(2);
            grundPreis_red = (jsonLogic.apply({ '-': [grundPreis_red, test.discount_3] })).toFixed(2);
            grundPreis_red = (jsonLogic.apply({ '*': [grundPreis_red, test.discount_1] })).toFixed(2);

            //grundpreis mit neuer mwst
            let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);
            let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);

            //zusätze
            let befestigung = test.befestigung_preis;
            let befestigung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung, 119] }), test.vat] })).toFixed(2);
            let befestigung_mwst_total = (jsonLogic.apply({ '*': [befestigung_mwst, test.anzahl] })).toFixed(2)
            let bediengriff = test.bediengriff_preis;
            let bediengriff_aufpreis = test.bediengriff_aufpreis;
            let bediengriff_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bediengriff, 119] }), test.vat] })).toFixed(2);
            let bediengriff_aufpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bediengriff_aufpreis, 119] }), test.vat] })).toFixed(2);
            let bedienstab = test.bedienstab_preis.toFixed(2);
            let bedienstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab, 119] }), test.vat] })).toFixed(2);

            //Konfigurator
            let streichPreis_conf = (jsonLogic.apply({ '+': [grundpreis, bediengriff, bediengriff_aufpreis, bedienstab, befestigung] })).toFixed(2)
            let redPreis_conf = (jsonLogic.apply({ '+': [grundPreis_red, bediengriff, bedienstab, befestigung] })).toFixed(2)

            //warenkorb --> bedienstab wird getrennt
            let streichPreis = (jsonLogic.apply({ '-': [streichPreis_conf, bedienstab] })).toFixed(2)
            let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
            let redPreis = (jsonLogic.apply({ '-': [redPreis_conf, bedienstab] })).toFixed(2)
            let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let warenkorbTotal = (jsonLogic.apply({ '+': [redPreisTotal, bedienstab] })).toFixed(2)
            let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            // rabatt_betrag, sieSparen_new, total_cart_new
            let rabatt_betrag;
            let sieSparen_new;
            let warenkorbTotal_new;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // cart
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_new = (jsonLogic.apply({ '+': [sieSparen, rabatt_betrag] })).toFixed(2)
                warenkorbTotal_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_b] })).toFixed(2);

                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                warenkorbTotal_new = warenkorbTotal_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000    
            }


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, bediengriff_mwst, bediengriff_aufpreis_mwst, befestigung_mwst] })).toFixed(2)
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
            let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, bediengriff_mwst, befestigung_mwst] })).toFixed(2)
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
            let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst, versandkosten] })).toFixed(2)
            let zwischensumme_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] }))
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, test.vat] }), test.mwst_1] }))
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            let steuer_betrag_3
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);


            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst;
            let rabatt_betrag_mwst_1;
            let rabatt_betrag_mwst_2;
            let bedienstab_mwst_total = bedienstab_mwst;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [zwischensumme_mwst, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_1 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, 100] }), test.rabatt_faktor_a] })).toFixed(2);

                // cy.log('Summe backend alt: ' + summe_backend)

                sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst_1] })).toFixed(2)
                bedienstab_mwst_total = (jsonLogic.apply({ '-': [bedienstab_mwst, rabatt_betrag_mwst_2] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

                // cy.log('Summe backend abzgl. rabatt: ' + summe_backend)

                // rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',')
                // rabatt_betrag_mwst_1 = rabatt_betrag_mwst_1.replace('.', ',')
                // rabatt_betrag_mwst_2 = rabatt_betrag_mwst_2.replace('.', ',')
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

            streichPreis_conf = streichPreis_conf.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis_conf = redPreis_conf.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreis = streichPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis = redPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            bedienstab = bedienstab.replace('.', ',')
            bedienstab_mwst = bedienstab_mwst.replace('.', ',')
            bedienstab_mwst_total = bedienstab_mwst_total.replace('.', ',')
            warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis_mwst = redPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.stoff_url)
            cy.wait('@configurator-js-files')
            cy.get('.dev_tool_body').should('exist')


            //-------------------PRODUCT CONFIGURATION--------------------\\
            setProduktTyp(test.produkttyp)
            checkFromPrices(test.abPreis, test.abPreis_red)
            setPlisseeTyp(test.plisseetyp)
            setBefestigung(test.befestigung)
            setHoehe(test.hoehe)
            setBreite(test.breite)
            setSchienenfarbe(test.schienenfarbe)
            setBediengriff(test.bediengriff)
            setBedienstab(test.bedienstab)
            checkPrices(redPreis_conf, streichPreis_conf)
            addQuantityToCart(test.anzahl)

            //-------------------CHECKING PRICES IN CART--------------------\\
            cartPage.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, bedienstab, sieSparen, warenkorbTotal)

            //-------------------CHECKOUT------------------------------------\\
            checkoutPage.checkOut_negVATID(test.produkttyp, test.login, test.prefix, test.first_name, test.last_name, test.company_name, test.vatID_false, test.vatID, test.email, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.password, test.prefix_2, test.first_name_2, test.last_name_2, test.company_name_2, test.vatID2_false, test.vatID2_correct, test.street_2, test.postal_code_2, test.city_2, test.state_2, test.phone_2, versandkosten, test.payment)
            checkoutPage.checkFinalPrices(test.produkttyp, test.payment, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, bedienstab_mwst, test.rabatt_code, rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
            checkoutPage.placeOrder(test.produkttyp, test.rmg, test.payment, test.canceled_payment, test.failed_payment, einzel_backend, summe_backend, befestigung_mwst, befestigung_mwst_total, bedienstab_mwst, bedienstab_mwst_total, versandkosten, total_backend, test.mwst_1, steuer_betrag, test.mwst_2, steuer_betrag_2, test.mwst_3, steuer_betrag_3, steuer_betrag_gesamt, rabatt_betrag_mwst, rabatt_betrag_mwst_1, rabatt_betrag_mwst_2, test.rabatt_code)
        })
    }
}

function setProduktTyp() {
    cy.contains('Senkrechte Fenster').click()
}

function checkFromPrices(oldPrice, newPrice) {
    cy.get('.original_price').should('contain', oldPrice)
    cy.get('.final_price').should('contain', newPrice)
}

function setPlisseeTyp(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
}

function setBefestigung(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
}

function setHoehe(value) {
    cy.get('#hoehe').type(value, { force: true })
}

function setBreite(value) {
    cy.get('#breite').type(value, { force: true })
}

function setSchienenfarbe(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
}

function setBediengriff(value) {
    if (typeof value != "undefined") {
        cy.get('input[value=' + value + ']').click({ force: true })
    }
}

function setBedienstab(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienstab_select').select(value, { force: true })
    }
}

function checkPrices(reduced_price, old_price) {
    cy.get('.original_price').should('contain', old_price)
    cy.get('.final_price').should('contain', reduced_price)
}

function addQuantityToCart(value) {
    cy.get('#qty').clear().type(value, { force: true })
    cy.get('.add_to_cart_button').click()
}

