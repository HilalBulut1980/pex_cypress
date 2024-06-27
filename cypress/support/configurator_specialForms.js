import jsonLogic from 'json-logic-js';
var cartPage = require("./cart.js");
var checkoutPage = require("./checkout.js");


module.exports = {

    configureSpecialForms: function configureSpecialForms(test) {
        const emailSuffix = Date.now();

        it(test.name, function () {

            //***************************************************** PRICE CALCULATION **************************************************** */
            //*************************************************************************************************************************** */

            // GRUNDPREISE
            // 1. Stoff:
            let grundpreis = test.grundpreis;
            let grundPreis_red = (jsonLogic.apply({ '-': [grundpreis, test.discount_2] })).toFixed(2);  //Abzug 1. Rabatt
            grundPreis_red = (jsonLogic.apply({ '-': [grundPreis_red, test.discount_3] })).toFixed(2); //Abzug 2. Rabatt
            grundPreis_red = (jsonLogic.apply({ '*': [grundPreis_red, test.discount_1] })).toFixed(2); //Abzug 3. Rabatt (prozentual)
            //grundpreis 1. Stoff mit neuer mwst
            let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundpreis, 119] }), test.vat] })).toFixed(2);
            let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);

            // 2. Stoff --> nur bei VSSD, F3
            let grundpreis_2 = test.grundpreis_b;
            let grundPreis_red_2 = (jsonLogic.apply({ '-': [grundpreis_2, test.discount_2b] })).toFixed(2);  //Abzug 1. Rabatt
            grundPreis_red_2 = (jsonLogic.apply({ '-': [grundPreis_red_2, test.discount_3b] })).toFixed(2); //Abzug 2. Rabatt
            grundPreis_red_2 = (jsonLogic.apply({ '*': [grundPreis_red_2, test.discount_1b] })).toFixed(2); //Abzug 3. Rabatt (prozentual)
            //grundpreis 2. Stoff mit neuer mwst
            let grundpreis_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundpreis_2, 119] }), test.vat] })).toFixed(2);
            let grundPreis_red_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red_2, 119] }), test.vat] })).toFixed(2);

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
            let pendelsicherung = test.pendelsicherung_preis;
            let pendelsicherung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [pendelsicherung, 119] }), test.vat] })).toFixed(2);
            let kurbel = test.kurbel_preis;
            let kurbel_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kurbel, 119] }), test.vat] })).toFixed(2);

            //Konfigurator
            let streichPreis_conf = (jsonLogic.apply({ '+': [grundpreis, grundpreis_2, bediengriff, bediengriff_aufpreis, bedienstab, pendelsicherung, befestigung, kurbel] })).toFixed(2)
            let redPreis_conf = (jsonLogic.apply({ '+': [grundPreis_red, grundPreis_red_2, bediengriff, bedienstab, pendelsicherung, befestigung, kurbel] })).toFixed(2)

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
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] }))//.toFixed(2);
                rabatt_betrag = (Math.round(rabatt_betrag * 100) / 100).toFixed(2).toString()
                sieSparen_new = (jsonLogic.apply({ '+': [sieSparen, rabatt_betrag] })).toFixed(2)
                warenkorbTotal_new = (jsonLogic.apply({ '-': [warenkorbTotal, rabatt_betrag] })).toFixed(2)

                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                warenkorbTotal_new = warenkorbTotal_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000    
            }


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //--------------------------------------------------------------------------------------------------------------------------------\\


            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, grundpreis_mwst_2, bediengriff_mwst, bediengriff_aufpreis_mwst, pendelsicherung_mwst, befestigung_mwst, kurbel_mwst] })).toFixed(2)
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
            let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, grundPreis_red_mwst_2, bediengriff_mwst, pendelsicherung_mwst, befestigung_mwst, kurbel_mwst] })).toFixed(2)
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
            let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst, versandkosten] })).toFixed(2)
            let zwischensumme_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(4)
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, test.vat] }), test.mwst_1] }))
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            let steuer_betrag_3
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);


            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //--------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst;
            let rabatt_betrag_mwst_1;
            let rabatt_betrag_mwst_2;
            let bedienstab_mwst_total = bedienstab_mwst;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [zwischensumme_mwst, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_1 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, 100] }), test.rabatt_faktor_a] })).toFixed(2);

                sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst_1] })).toFixed(2)
                bedienstab_mwst_total = (jsonLogic.apply({ '-': [bedienstab_mwst, rabatt_betrag_mwst_2] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',')
                rabatt_betrag_mwst_1 = rabatt_betrag_mwst_1.replace('.', ',')
                rabatt_betrag_mwst_2 = rabatt_betrag_mwst_2.replace('.', ',')

                cy.log('rabatt_betrag_mwst: ' + rabatt_betrag_mwst)
                cy.log('rabatt_betrag_mwst_1: ' + rabatt_betrag_mwst_1)
                cy.log('rabatt_betrag_mwst_2: ' + rabatt_betrag_mwst_2)
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
            //********************************************************************************************************************************/

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

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
            setHoeheLinks(test.hoehe_links)
            setHoeheRechts(test.hoehe_rechts)
            setGesamtHoehe(test.gesamthoehe)
            setTeilHoehe(test.teilhoehe)
            setBreite(test.breite)
            setBreiteUnten(test.breite_unten)
            setBreiteOben(test.breite_oben)
            setUntererStoff(test.unterer_Stoff)
            setUntererStoffCode(test.unterer_Stoffcode)
            setPendularClip(test.pendelsicherung)
            setOptionalStab(test.optional_gruppe, test.optional_name)
            setSchienenfarbe(test.schienenfarbe)
            setBediengriff(test.bediengriff)
            setBedienstab(test.bedienstab)
            checkPrices(redPreis_conf, streichPreis_conf)
            addQuantityToCart(test.anzahl)

            //-------------------CHECKING PRICES IN CART--------------------\\
            cartPage.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, bedienstab, sieSparen, warenkorbTotal, test.rabatt_code, rabatt_betrag, sieSparen_new, warenkorbTotal_new)

            //-------------------CHECKOUT------------------------------------\\
            checkoutPage.checkOut(test.produkttyp, test.missing_name, test.login, test.prefix, test.first_name, test.last_name, test.company_name, test.vatID, test.email, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.password, test.prefix_2, test.first_name_2, test.last_name_2, test.company_name_2, test.vatID_2, test.street_2, test.postal_code_2, test.city_2, test.state_2, test.phone_2, versandkosten, test.payment)
            checkoutPage.checkFinalPrices(test.produkttyp, test.payment, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, bedienstab_mwst, test.rabatt_code, rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
            checkoutPage.placeOrder(test.produkttyp, test.rmg, test.payment, test.canceled_payment, test.failed_payment, einzel_backend, summe_backend, befestigung_mwst, befestigung_mwst_total, bedienstab_mwst, bedienstab_mwst_total, versandkosten, total_backend, test.mwst_1, steuer_betrag, test.mwst_2, steuer_betrag_2, test.mwst_3, steuer_betrag_3, steuer_betrag_gesamt, rabatt_betrag_mwst, rabatt_betrag_mwst_1, rabatt_betrag_mwst_2, test.rabatt_code)
        })
    }
}

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
    if (typeof value !== "undefined" && value != "") {
        cy.get('input[value=' + value + ']').check({ force: true })
    }
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

function setBreiteUnten(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite_unten').type(value, { force: true })
    }
}

function setBreiteOben(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite_oben').type(value, { force: true })
    }
}

function setUntererStoff(value) {
    if (typeof value !== "undefined") {
        cy.get('select[id="unterer_stoff_gruppe_select"]').select(value, { force: true })
    }
}

function setUntererStoffCode(value) {
    if (typeof value !== "undefined") {
        cy.get('select[id="unterer_stoff_nummer_select"]').select(value, { force: true })
    }
}

function setHoeheLinks(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe_links').type(value, { force: true })
    }
}

function setHoeheRechts(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe_rechts').type(value, { force: true })
    }
}

function setGesamtHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#gesamthoehe').type(value, { force: true })
    }
}

function setTeilHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#teilhoehe').type(value, { force: true })
    }
}

function setAusrichtung(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('input[value=' + value + ']').check()
    }
}

function setOptionalStab(optGruppe, OptName) {
    if (typeof optGruppe !== "undefined") {
        if (optGruppe == "Kurbel") {
            cy.contains(optGruppe).click()
            cy.get('#handkurbel_select').select(OptName, { force: true })
        }
        else if (optGruppe == "Elektrostab") {
            cy.contains(optGruppe).click()
            cy.get('#elektrostab_select').select(OptName, { force: true })
        }
    }
}

function setBediengriff(value) {
    if (typeof value !== "undefined") {
        cy.get('input[value=' + value + ']').check({ force: true })
    }
}

function setBedienstab(value) {
    if (typeof value !== "undefined") {
        cy.get('#bedienstab_select').select(value, { force: true })
    }
}

function setPendularClip(value) {
    if (typeof value !== "undefined" && value != "") {
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
    cy.get('.add_to_cart_button').click()
}
