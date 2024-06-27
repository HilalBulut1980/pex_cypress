var cartPage = require("./cart.js");
var checkoutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';



module.exports = {

    configureService: function configureService(test) {
        const emailSuffix = Date.now();

        it(test.name, function () {

            let preis = test.grundpreis.toFixed(2)
            let preis_total = (jsonLogic.apply({ '*': [preis, test.anzahl] })).toFixed(2)

            let warenkorbTotal = preis_total

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag;
            let sieSparen_new;
            let warenkorbTotal_new;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // cart
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_new = rabatt_betrag;
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

            let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)

            let einzel_backend = preis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, test.vat] }), test.mwst_1] })).toFixed(4);
            cy.log(steuer_betrag)
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            cy.log(steuer_betrag)
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst = 0;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                let sieSparen_mwst = rabatt_betrag_mwst
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
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
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_backend = total_backend.replace('.', ',')
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.url)
            
            //-------------------CONFIGURATION--------------------\\
            if (test.service == "Längere Führungsschnüre") {
                laengereSchnuere(test.produktname, test.schienenfarbe, test.breite, test.hoehe, test.laenge_neu, test.seite, test.anmerkungen)
            }
            else if (test.service == "Schnur Ersetzen") {
                schnurErsetzen(test.bestellnummer, test.breite, test.hoehe, test.laenge_neu, test.produkt)
            }
            else if (test.service == "Änderungsauftrag Schnurlänge") {
                aenderungSchnur(test.bestellnummer, test.breite, test.hoehe, test.laenge_neu, test.produkt)
            }
            else if (test.service == "Änderungsauftrag Breite Kürzen") {
                breiteKuerzen(test.bestellnummer, test.breite, test.hoehe, test.kuerzung, test.produkt)
            }
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

function laengereSchnuere(produktname, schienenfarbe, breite, hoehe, laenge_neu, seite, anmerkungen) {

    cy.get('label').contains('Produktname').next().type(produktname)
    cy.get('label').contains('Schienenfarbe').next().type(schienenfarbe)
    cy.get('label').contains('Breite (in mm)').next().type(breite)
    cy.get('label').contains('Höhe (in mm)').next().type(hoehe)
    cy.get('label').contains('Gewünschte Länge der Schnüre (in mm)').next().type(laenge_neu)
    cy.get('label').contains('Gewünschte Seite').next('select').select(seite)
    cy.contains('Sonstige Anmerkungen').next().type(anmerkungen)
}

function schnurErsetzen(bestellnummer, breite, hoehe, laenge_neu, produkt) {
    cy.get('label').contains('Bestellnummer').next().type(bestellnummer)
    cy.get('label').contains('Produkt').next().type(produkt)
    cy.get('label').contains('Breite lt. Lieferschein').next().type(breite)
    cy.get('label').contains('Höhe lt. Lieferschein').next().type(hoehe)
    cy.get('label').contains('gewünschte Höhe in mm').next().type(laenge_neu)

}

function aenderungSchnur(bestellnummer, breite, hoehe, laenge_neu, produkt) {
    cy.get('label').contains('Bestellnummer').next().type(bestellnummer)
    cy.get('label').contains('Produkt').next().type(produkt)
    cy.get('label').contains('Breite lt. Lieferschein').next().type(breite)
    cy.get('label').contains('Höhe lt. Lieferschein').next().type(hoehe)
    cy.get('label').contains('gewünschte Höhe in mm').next().type(laenge_neu)

}

function breiteKuerzen(bestellnummer, breite, hoehe, kuerzung, produkt) {
    cy.get('label').contains('Bestellnummer').next().type(bestellnummer)
    cy.get('label').contains('Produkt').next().type(produkt)
    cy.get('label').contains('Breite lt. Lieferschein').next().type(breite)
    cy.get('label').contains('Höhe lt. Lieferschein').next().type(hoehe)
    cy.get('label').contains('gewünschte Breite in mm').next().type(kuerzung)

}

function checkPrice(price) {
    cy.get('.price').should("contain", price) 
}

function addQuantityToCart(value) {
    cy.get('#qty').clear().type(value, { force: true })
    cy.contains('In den Warenkorb').click()
}
